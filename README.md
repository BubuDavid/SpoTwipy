<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/BubuDavid/SpoTwipy.git">
    <img src="static/images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">SpoTwiPy-Shuffle it!</h3>

  <p align="center">
    Amazing project where I challenge myself to do a python app with javascript vanilla interactions.
    <br />
    <a href="https://github.com/BubuDavid/SpoTwipy.git"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/BubuDavid/SpoTwipy.git/issues">Report Bug</a>
    ·
    <a href="https://github.com/BubuDavid/SpoTwipy.git/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

In this project I callenged myself to do a flask-app, with spotify API and Twitter API, what this does is to grab, from my top listened songs from spotify, 5 random songs and automatically tweet their names on my Twitter account. That is all, but here are the rules:

- You can not choose explicitly what song you want to tweet, but you can push a button over a song to replace it for another randomly selected song (always from your top listened songs).
- You can alter the tweet content, that is not fun at all, but exists the possibility to run out of characters for a proper tweet, so you can control what the tweet says.

Here's why:

I love to develop and create new projects everyday, this little `bot` is essencially just a project to improve my HTML, CSS, Python, JS, API skills ;)

### Built With

- [flask](https://flask.palletsprojects.com/en/2.0.x/)
- [Spotify API](https://developer.spotify.com/)
- [Tweepy](https://www.tweepy.org/)
- [SASS](https://sass-lang.com/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up follow these simple example steps.

1. Go to your terminal and travel where you want to save this project, in my case will be in a `Dev` folder.

```bash
cd Dev/
```

2. Now create a clone of this repository with

```bash
git clone https://github.com/BubuDavid/SpoTwipy.git
```

3. You are almost there, lets go for the peequisistes

### Prerequisites

You will need this on your computer

- Python 3.6+
- Pip (Compatible with python 3.6+)
- venv or your own environment creator
- A Spotify Develop account, these are free [here](https://developer.spotify.com/).
- A Twitter Develop account, this is harder but you can create one in [here](https://developer.twitter.com/)

### Installation

1. Crate a [spotify app](https://developer.spotify.com/documentation/web-api/quick-start/) and save the client id and the client secet in a `.env` file inside your folder. Notice you have to save this things with the appropiate names as appear in the `app.py` file. Notice you have to save a `SPOTIFY_CALLBACK_URI`, that is you callback url, I recomend you to just write `http://localhost:8888/spotify-callback` in your `.env` and in your app in the section of `callback uri`.
2. Create a [twitter app]() almost identically as the spotify app but save all the keys they give you, you will not be able to retrieve those keys if you lose them. You would have to re-generate them.
3. You have to create a env variable in the `.env` called `SECRET_KEY` and it can contain anything you want.
4. Now you only have to go into your terminal, get into your root folder (not the Dev folder, the repository folder), and write

```bash
pip install -r requirements.txt
```

If everything worked out, then you are ready to shuffle ittt yourself.

<!-- USAGE EXAMPLES -->

## Usage

You just need to run

```bash
python app.py
```

and voila! Your server is ready and running, just go to your web browser to this direction `http://localhost:8888/`. The following steps are pretty straightforward.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/BubuDavid/SpoTwipy.git/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

David, but you can call me **Bubu** - [@DBubu73](https://twitter.com/DBubu73) - david.pedroza.segoviano@gmail.com

Project Link: [SpoTwipy](https://github.com/BubuDavid/SpoTwipy.git)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Best Readme Template](https://github.com/othneildrew/Best-README-Template)
- [StackOverflow](https://stackoverflow.com/)
- [Font Awesome](https://fontawesome.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/BubuDavid/SpoTwipy.svg?style=for-the-badge
[contributors-url]: https://github.com/BubuDavid/SpoTwipy.git/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/BubuDavid/SpoTwipy.svg?style=for-the-badge
[forks-url]: https://github.com/BubuDavid/SpoTwipy.git/network/members
[stars-shield]: https://img.shields.io/github/stars/BubuDavid/SpoTwipy.svg?style=for-the-badge
[stars-url]: https://github.com/BubuDavid/SpoTwipy.git/stargazers
[issues-shield]: https://img.shields.io/github/issues/BubuDavid/SpoTwipy.svg?style=for-the-badge
[issues-url]: https://github.com/BubuDavid/SpoTwipy.git/issues
[license-shield]: https://img.shields.io/github/license/BubuDavid/SpoTwipy.svg?style=for-the-badge
[license-url]: https://github.com/BubuDavid/SpoTwipy.git/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/davidpedrozasegoviano/
[product-screenshot]: static/images/screenshot.gif
