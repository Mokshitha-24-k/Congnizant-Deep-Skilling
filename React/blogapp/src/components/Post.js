import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { title, body } = this.props.post;
    return (
      <div style={{ border: '1px solid #ccc', margin: '15px', padding: '15px', borderRadius: '5px' }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;
