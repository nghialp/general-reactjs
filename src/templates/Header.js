import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => (
  <header className="main-header">
    <nav className="navbar navbar-static-top">
      <div className="container">
        {props.children}
      </div>
    </nav>

  </header>
);

Header.propTypes = {
  children: PropTypes.any,
};

export default Header;
