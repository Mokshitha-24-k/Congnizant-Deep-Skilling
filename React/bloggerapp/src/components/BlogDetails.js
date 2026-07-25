import React from 'react';
export const BlogDetails = ({ item }) => (
  <div style={{ border: '2px solid #28a745', margin: '10px', padding: '10px' }}>
    <h3 style={{ color: '#28a745' }}>📝 Blog Details</h3>
    <p><b>Topic:</b> {item.title}</p>
  </div>
);
