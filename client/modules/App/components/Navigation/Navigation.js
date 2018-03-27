import React, { PropTypes } from 'react';

import { Link } from 'react-router';

const Navigation = (props, context) => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/">Posts</Link></li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
};

export default Navigation;