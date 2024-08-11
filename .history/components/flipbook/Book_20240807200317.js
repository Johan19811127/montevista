import Image from 'next/image';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const PageCover = React.forwardRef((props, ref) => {
    return (
      <div className="page page-cover" ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </div>
    );
  });
  
  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="page" ref={ref}>
        <div className="page-content">
          <h2 className="page-header">Page header - {props.number}</h2>
          <div className="page-image"></div>
          <div className="page-text">{props.children}</div>
          <div className="page-footer">{props.number + 1}</div>
        </div>
      </div>
    );
  });
  
  class DemoBook extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        page: 0,
        totalPage: 0,
      };
    }
  
    nextButtonClick = () => {
      this.flipBook.getPageFlip().flipNext();
    };
  
    prevButtonClick = () => {
      this.flipBook.getPageFlip().flipPrev();
    };
  
    onPage = (e) => {
      this.setState({
        page: e.data,
      });
    };
  
    componentDidMount() {
      this.setState({
        totalPage: this.flipBook.getPageFlip().getPageCount(),
      });
    }
  
    render() {
      return (
        <div>
          <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            onFlip={this.onPage}
            onChangeOrientation={this.onChangeOrientation}
            onChangeState={this.onChangeState}
            className="demo-book"
            ref={(el) => (this.flipBook = el)}
          >

            <PageCover>BOOK TITLE</PageCover>
            <Page number={1}>Lorem ipsum...</Page>
            <Page number={2}>Lorem ipsum...</Page>
            <Pzge className="demoPage"><Image src="/admission policy/2.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 2"></Image></div>
    <Page className="demoPage"><Image src="/admission policy/3.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 3"></Image></Page>
    <Page className="demoPage"><Image src="/admission policy/4.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 4"></Image></Page>
    <Page className="demoPage"><Image src="/admission policy/5.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 5"></Image></Page>
    <Page className="demoPage"><Image src="/admission policy/6.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 6"></Image></Page>
    <Page className="demoPage"><Image src="/admission policy/6.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 6"></Image></Page>
    <Page className="demoPage"><Image src="/admission policy/7.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 7"></Image></Page>
    <Page className="demoPage"><Image src="/admission policy/8.png" width="650" height="900" alt="admission policy for Monte Vista Primary School - Page 8"></Image></Page>
    
            <PageCover>THE END</PageCover>

          </HTMLFlipBook>
  
          <div className="container">
            <div>

              <button type="button" onClick={this.prevButtonClick}>
                Previous page
              </button>

              [<span>{this.state.page}</span> of
               <span>{this.state.totalPage}</span>]

              <button type="button" onClick={this.nextButtonClick}>
                Next page
              </button>

            </div>
            <div>

              State: <i>{this.state.state}</i>, orientation: <i>{this.state.orientation}</i>

            </div>
          </div>
        </div>
      );
    }
  }


const Flipbook = () => {
  return (
   
    <HTMLFlipBook width={['auto']} height={['90vh']} >
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