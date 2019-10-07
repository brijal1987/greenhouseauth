import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import Post  from '../Post/Post';

const propTypes = {
  copy: PropTypes.shape({}),
};

const defaultProps = {
  copy: {},
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {id: 1, title: "Five Jobs That Hardly Expired 10 Years Ago", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting."},
        {id: 2, title: "McAfee Promo Codes and Coupons June 2019", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting."},
        {id: 3, title: "Five Jobs That Hardly Expired 10 Years Ago", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting."},
        {id: 4, title: "McAfee Promo Codes and Coupons June 2019", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting."},
      ]
    }
  }

  render() {
    const { copy, pessengers } = this.props;
    return (
      <div className="content">
        <h2>{copy.home.top_posts}</h2>
        {
          pessengers.map((pessenger) => {
            return (
              <Post key={pessenger.id} {...pessenger} />
            );
          })
        }
      </div>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;