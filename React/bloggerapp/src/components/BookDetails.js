import React from 'react';
export const BookDetails = ({ item }) => (
  <div style={{ border: '2px solid #007bff', margin: '10px', padding: '10px' }}>
    <h3 style={{ color: '#007bff' }}>📚 Book Details</h3>
    <p><b>Title:</b> {item.title}</p>
  </div>
);
