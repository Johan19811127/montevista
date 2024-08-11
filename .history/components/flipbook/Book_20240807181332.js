import React from 'react';
import FlipPage from 'react-flip-page';

const Flipbook = () => {
  return (
    <FlipPage
      uncutPages
      showSwipeHint
      className="flipbook"
    >
      <div className="page">Page 1 Content</div>
      <div className="page">Page 2 Content</div>
      <div className="page">Page 3 Content</div>
      {/* Add more pages as needed */}
    </FlipPage>
  );
};

export default Flipbook;