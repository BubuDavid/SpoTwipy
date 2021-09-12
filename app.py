# Import important imports from flask
from flask import Flask, render_template,\
                  request, \
                  session, redirect
# Import Python imports
from decouple import config
import json

# Import my spotify module
from models.spotify_api import Bubufy
from models.user import User


# Get secret keys from a hidden .env file
secret_key       = config('SECRET_KEY')
sp_client_id     = config('SPOTIFY_CLIENT_ID')
sp_client_secret = config('SPOTIFY_CLIENT_SECRET')
sp_callback_uri  = config('SPOTIFY_CALLBACK_URI')

#### Spotify Initialization ####
bubufy = Bubufy(
    sp_client_id,
    sp_client_secret,
    sp_callback_uri
)
# Get the authorization data url from spotify
sp_auth_url = bubufy.get_auth_url(scopes=['playlist-read-private', 'user-top-read'])

# Create the session user (first is empty)
user = User('')



# Init our app flask object
app = Flask(__name__)
app.secret_key = secret_key

# Define routes below
@app.route('/')
def index_method():
    # Log out the user
    if user.username:
        user.delete_user()
    # Create the context to pass to the page
    context = {
        'page_title': 'Welcome!',
        'auth_url'  : sp_auth_url
    }
    return render_template('index.html', context=context)

@app.route('/spotify-callback')
def spotify_callback_method():
    
    # Grab the code and set bubufy up for querying
    sp_code = request.args.get('code')
    bubufy.code_for_token = sp_code
    bubufy.set_token()

    # Get the top songs and create a json
    songs = bubufy.get_top_tracks_or_artists(
        key_names=['name', 'artists', 'id', 'album', 'uri'],
        time_range='short_term'
    )

    # Generate the user
    user.create_user('Bubu', songs)
    
    return redirect('/shuffle-songs')


@app.route('/shuffle-songs')
def shuffle_songs_method():
    if not user.username:
        return redirect('/')

    # Create the context to pass to the page
    context = {
        'page_title': 'Shuffle it!',
        'user_info' : {
            'username': user.username,
            'songs'   : user.songs
        }
    }
    return render_template('shuffle_songs.html', context=context)

# Start the app
if __name__ == '__main__':
    app.run(debug=True, port=8888)