'use client';
import ScrollToTop from "react-scroll-to-top";

const BottomToTop = () => {
  return (
    <ScrollToTop
      className='animate-bounce flex items-center justify-center'
      smooth
      style={{
        backgroundColor: 'black',
      }}
      color="white"
      viewBox="0 0 24 24"
      svgPath="m18 15-6-6-6 6"
    />
  );
};

export default BottomToTop;