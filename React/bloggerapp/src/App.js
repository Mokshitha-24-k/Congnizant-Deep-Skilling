import React from 'react';
import { BookDetails } from './components/BookDetails';
import { BlogDetails } from './components/BlogDetails';
import { CourseDetails } from './components/CourseDetails';

const App = () => {
  const contentData = [
    { id: 'b1', type: 'book', title: 'React for Beginners' },
    { id: 'bl1', type: 'blog', title: 'Understanding Hooks in React' },
    { id: 'c1', type: 'course', title: 'Fullstack Web Development' }
  ];

  const renderContentWithSwitch = (item) => {
    switch (item.type) {
      case 'book': return <BookDetails key={item.id} item={item} />;
      case 'blog': return <BlogDetails key={item.id} item={item} />;
      case 'course': return <CourseDetails key={item.id} item={item} />;
      default: return null;
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger Content Hub</h1>
      <h2>Rendering List via Switch</h2>
      {contentData.map(item => renderContentWithSwitch(item))}
      <hr />
      <h2>Rendering List via Ternary & Logical &&</h2>
      {contentData.map(item => (
        <React.Fragment key={'inline-'+item.id}>
          {item.type === 'book' ? <BookDetails item={item} /> : null}
          {item.type === 'blog' && <BlogDetails item={item} />}
          {item.type === 'course' && <CourseDetails item={item} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default App;
