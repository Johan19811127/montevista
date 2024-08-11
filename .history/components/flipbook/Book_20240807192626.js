import Image from 'next/image';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';


const Flipbook = () => {
  return (
   
    <HTMLFlipBook width={600} height={850} className="border border-slate-300 m-auto">
    <div className="demoPage"><Image src="/admission policy/1.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page "></Image></div>
    <div className="demoPage">Page 2</div>
    <div className="demoPage">Page 3</div>
    <div className="demoPage">Page 4</div>
</HTMLFlipBook>

  );
};

export default Flipbook;