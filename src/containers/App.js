import React, { Component } from 'react';
import axios from 'axios';
import Keys from '../config/keys';
import Header from '../components/Header';
import Examples from '../components/Examples';
import Footer from '../components/Footer/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = { accessToken: null, topArtists: null, topTracks: [], apiError: null };
    this.getAuth = this.getAuth.bind(this);
    this.getTops = this.getTops.bind(this);
    this.getTopArtists = this.getTopArtists.bind(this);
    this.getTopTracks = this.getTopTracks.bind(this);
  }

  componentDidMount() {
    const hashParams = {};
    const hash = window.location.hash.substring(1);
    const ampIndex = hash.indexOf('&');
    const lastAmpIndex = hash.lastIndexOf('&');
    hashParams.accessToken = hash.slice(13, ampIndex);
    hashParams.tokenType = hash.slice(ampIndex + 12, lastAmpIndex);
    hashParams.expiresIn = hash.slice(lastAmpIndex + 12);
    if (hashParams.accessToken) {
      this.setState({ accessToken: hashParams.accessToken });
      window.location.hash = '/';
    }
  }

  /* eslint-disable-next-line */
  getAuth() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${
      Keys.spotifyID
    }&scope=user-top-read&response_type=token&redirect_uri=http://localhost:3000/`;
  }

  getTops(event) {
    event.preventDefault();
    const { accessToken } = this.state;
    const url = 'https://api.spotify.com/v1/me/top/';
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    };
    if (event.target.name === 'artists') {
      this.getTopArtists(url, options);
    } else {
      this.getTopTracks(url, options);
    }
  }

  getTopArtists(url, options) {
    axios
      .get(`${url}artists`, options)
      .then(res => {
        console.log('[RESPONSE ARTISTS]', res.data);
        const topFiveArtists = res.data.items.slice(0, 5);
        this.setState({ topArtists: res.data.items, topFiveArtists });
      })
      .catch(err => {
        this.setState({ apiError: err });
      });
  }

  getTopTracks(url, options) {
    axios
      .get(`${url}tracks`, options)
      .then(res => {
        console.log('[RESPONSE TRACKS]', res.data);
        const topFiveTracks = res.data.items.slice(0, 5);
        this.setState({ topArtists: res.data.items, topFiveTracks });
      })
      .catch(err => {
        this.setState({ apiError: err });
      });
  }

  render() {
    const { getAuth, getTops } = this;
    const { accessToken } = this.state;
    return (
      <main className="app">
        <Header getAuth={getAuth} getTops={getTops} accessToken={accessToken} />
        <Examples />
        <Footer />
      </main>
    );
  }
}

export default App;
