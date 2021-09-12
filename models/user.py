class User:
    def __init__(self, username):
        self.username = username
        songs = []

    def create_user(self, username, song_list):
        self.songs = song_list
        self.username = username

    def delete_user(self):
        self.username = ''
        self.songs = []
        