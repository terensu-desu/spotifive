import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';

const Header = ({ accessToken, getAuth, getTops }) => {
  let callToAction = (
    <button type="button" className="btn__cta" name="spotifyLogin" onClick={getAuth}>
      Sign in through Spotify
    </button>
  );
  if (accessToken) {
    callToAction = (
      <Fragment>
        <button type="button" className="btn__cta" name="artists" onClick={getTops}>
          Get top artists
        </button>
        <button type="button" className="btn__cta" name="tracks" onClick={getTops}>
          Get top tracks
        </button>
      </Fragment>
    );
  }
  return (
    <div className="header">
      <h1 className="header__main">Spotifive</h1>
      <h2 className="header__sub">Show the world what you're jamming to</h2>
      <div className="header__call-to-action">{callToAction}</div>
    </div>
  );
};

Header.propTypes = {
  getAuth: PropTypes.func.isRequired,
  getTops: PropTypes.func.isRequired,
  accessToken: PropTypes.string
};

export default Header;
