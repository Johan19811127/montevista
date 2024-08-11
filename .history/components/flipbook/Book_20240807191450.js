import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const Flipbook = () => {
  return (
    <div className="container  w-[80vw] ">
    <HTMLFlipBook width={300} height={500} className="border border-slate-300">
    <div className="demoPage">Page 1</div>
    <div className="demoPage">Page 2</div>
    <div className="demoPage">Page 3</div>
    <div className="demoPage">Page 4</div>
</HTMLFlipBook>
</div>
  );
};

export default Flipbook;