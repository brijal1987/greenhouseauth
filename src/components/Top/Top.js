import React from 'react';
import PropTypes from 'prop-types';
import './Top.scss';

const propTypes = {
  copy: PropTypes.shape({}),
};

const defaultProps = {
  copy: {},
};

class Top extends React.Component {

  render() {
    const { copy } = this.props;

    return (
      <div className="jumbotron">
        <div className="container text-center">
          <h1>{copy.project_title}</h1>
        </div>
      </div>
    );
  }
}

Top.propTypes = propTypes;
Top.defaultProps = defaultProps;
export default Top;