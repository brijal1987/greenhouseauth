import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const propTypes = {
  copy: PropTypes.shape({}),
};

const defaultProps = {
  copy: {},
};
class Sidebar extends React.Component {

  render() {
    const { copy } = this.props;

    return (
      <div className="sidebar">
        <h2>{copy.sidebar.image_of_week}</h2>
        <img alt="css" width="100%" src={process.env.PUBLIC_URL + '/sidebar-image.png'} />
        <button className="btn btn-primary btn-sidebar">{copy.sidebar.btn_see_more}</button>
        <hr/>
        <h2>{copy.sidebar.quote_of_week}</h2>
        <div className="verticalLine">
        {copy.sidebar.quote_line}<br/>
          <span>{copy.sidebar.quote_title}</span>
        </div>
        <button className="btn btn-primary btn-sidebar">{copy.sidebar.btn_more_quotes}</button>
      </div>
    );
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
export default Sidebar;