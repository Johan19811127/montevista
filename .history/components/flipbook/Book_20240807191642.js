import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import style

const Flipbook = () => {
  return (
   
    <HTMLFlipBook width={300} height={500} className="border border-slate-300 m-auto">
    <div className="demoPage">Page 1</div>
    <div className="demoPage">Page 2</div>
    <div className="demoPage">Page 3</div>
    <div className="demoPage">Page 4</div>
</HTMLFlipBook>

  );
};

export default Flipbook;