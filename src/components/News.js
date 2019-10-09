import React, { Component } from 'react';
import { getData } from './Api';

class News extends Component {
  state = {
    data: null,
    isLoading: true,
    error: null
  };
  render() {
    const { isLoading, error } = this.state;
    if(isLoading) return <p>Loading...</p>
    return (
      <div>
        <h4>All the latest and greatest news</h4>
      </div>
    );
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = () => {
    const { isLoading, error } = this.state;

    getData()
      .then(data => console.log(data))
      .catch(error);
  };
}

export default News;
