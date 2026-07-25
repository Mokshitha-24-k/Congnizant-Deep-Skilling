import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: null };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => this.setState({ posts: data.slice(0, 10) }))
      .catch(error => this.setState({ error }));
  }

  componentDidCatch(error, info) {
    console.error("Error caught by componentDidCatch:", error, info);
    this.setState({ error: error });
  }

  render() {
    if (this.state.error) {
      return <h2>Error loading posts: {this.state.error.message}</h2>;
    }
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default Posts;
