import React from 'react';
import PropTypes from 'prop-types';
import Top from '../Top/Top';
import Menu from '../Menu/Menu';

const propTypes = {
  copy: PropTypes.shape({}),
};

const defaultProps = {
  copy: {},
};

class Header extends React.Component {

  render() {
    const { copy, isLoggedIn, logoutUser } = this.props;

    return (
      <header>
        <Top copy={copy}></Top>
        <Menu isLoggedIn={isLoggedIn} logoutUser={logoutUser} copy={copy}></Menu>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;