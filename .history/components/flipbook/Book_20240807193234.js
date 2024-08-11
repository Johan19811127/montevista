import Image from 'next/image';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';


const Flipbook = () => {
  return (
   
    <HTMLFlipBook width={600} height={850px} >
    <div className="demoPage"><Image src="/admission policy/1.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 1"></Image></div>
    <div className="demoPage"><Image src="/admission policy/2.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 2"></Image></div>
    <div className="demoPage"><Image src="/admission policy/3.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 3"></Image></div>
    <div className="demoPage"><Image src="/admission policy/4.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 4"></Image></div>
    <div className="demoPage"><Image src="/admission policy/5.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 5"></Image></div>
    <div className="demoPage"><Image src="/admission policy/6.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 6"></Image></div>
    <div className="demoPage"><Image src="/admission policy/6.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 6"></Image></div>
    <div className="demoPage"><Image src="/admission policy/7.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 7"></Image></div>
    <div className="demoPage"><Image src="/admission policy/8.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 8"></Image></div>
</HTMLFlipBook>

  );
};

export default Flipbook;