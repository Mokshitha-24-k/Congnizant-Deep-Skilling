import React from 'react';
export const CourseDetails = ({ item }) => (
  <div style={{ border: '2px solid #fd7e14', margin: '10px', padding: '10px' }}>
    <h3 style={{ color: '#fd7e14' }}>🎓 Course Details</h3>
    <p><b>Course Name:</b> {item.title}</p>
  </div>
);
