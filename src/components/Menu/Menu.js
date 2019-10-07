import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';
import { Link } from "react-router-dom";

const propTypes = {
  copy: PropTypes.shape({}),
};

const defaultProps = {
  copy: {},
};

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: localStorage["appState"]
      ? JSON.parse(localStorage["appState"]).user
      : [],
    };
  }

  render() {
    const { name } = this.state.user;
    const { copy, isLoggedIn, logoutUser} = this.props;

    return (
      <div>
          <ul>
            <li>
              <Link to="/">{copy.menu.home}</Link>
            </li>
            <li>
              <Link to="/">{copy.menu.members}</Link>
            </li>
            <li>
              <Link to="/">{copy.menu.photos}</Link>
            </li>
            <li>
              <Link to="/">{copy.menu.pages}</Link>
            </li>
            <li>
              <Link to="/">{copy.menu.discussions}</Link>
            </li>
            <li>
              <Link to="/">{copy.menu.more}</Link>
            </li>
            { isLoggedIn ?
              <li>
                <Link onClick={logoutUser}>Logout</Link>
              </li>
              :
              <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              </>
            }
            {isLoggedIn ?
            <li  className="welcome-message">
              <h2>Welcome {name}</h2>
            </li> : ''}
          </ul>
      </div>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
export default Menu;