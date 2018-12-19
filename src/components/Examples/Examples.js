import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
// import { PropTypes } from 'prop-types';

const Examples = () => (
  <div className="examples">
    <h2 className="examples__header">See What You Can Create</h2>
    <div className="examples__box">
      <img src="http://placehold.jp/150x150.png" className="examples__item" alt="stuff" />
      <img src="http://placehold.jp/150x150.png" className="examples__item" alt="stuff" />
      <img src="http://placehold.jp/150x150.png" className="examples__item" alt="stuff" />
      <img src="http://placehold.jp/150x150.png" className="examples__item" alt="stuff" />
      <img src="http://placehold.jp/150x150.png" className="examples__item" alt="stuff" />
      <img src="http://placehold.jp/150x150.png" className="examples__item" alt="stuff" />
    </div>
  </div>
);

// Examples.propTypes = {};

export default Examples;

/*

<Image
      cloudName="spotifive"
      publicId="https://media.pitchfork.com/photos/5931a95c31bcdd12429285f0/2:1/w_790/3b06ba70.jpg"
      type="fetch"
    >
      <Transformation width="300" height="300" radius="max" fetchFormat="auto" />
    </Image>

*/
