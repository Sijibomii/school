import React, { useEffect } from 'react';
import Image from 'next/image';
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import '../assets/owl.carousel';

const OwlCarousel = dynamic(() => {
  return import("react-owl-carousel")
},
 {
  ssr: false,
});

const Carousel = () => {

  useEffect(() => {
    let $ = require("jquery");
    if (!typeof window === "undefined") {
      window.$ = window.jQuery = require("jquery");
    }
  }, [])

  const responsive ={
    0:{
      items: 1.2,
      margin: 5,
    },
    580: {
      items: 2,
      margin: 10
    }
  }
  
  return(
    <div className='car-con'>
        <OwlCarousel
      loop
      nav={false} 
      responsive={responsive}
      autoplay={true}
      dots={false}
      autoplayTimeout={2000}
      autoplaySpeed={2000}
      autoplayHoverPause={false}
      >
        {/* <div className="item">
          <h4>1</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>3</h4>
        </div>
        <div className="item">
          <h4>4</h4>
        </div>
        <div className="item">
          <h4>5</h4>
        </div>
        <div className="item">
          <h4>6</h4>
        </div>
        <div className="item">
          <h4>7</h4>
        </div> */}
      <div className='services-item bg-white relative mt-24'>
            <div className='service-icon bb h-32 w-32 absolute text-center flex justify-center z-10'>
              <Image className='bb-img' src={'/bookkks.jpg'} width={150} height={150} />
            </div>
            <div className='service-item flex flex-col items-center p-3 justify-center'>
              <h2 className='text-black text-2xl mb-5 mt-10 font-bold'>Mark John</h2>
              <h2 className='text-black text-sm'>
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              </h2>
            </div>
      </div>
      <div className='services-item bg-white relative mt-24'>
            <div className='service-icon bb h-32 w-32 absolute text-center flex justify-center z-10'>
              <Image className='bb-img' src={'/bookkks.jpg'} width={150} height={150} />
            </div>
            <div className='service-item flex flex-col items-center p-3 justify-center'>
              <h2 className='text-black text-2xl mb-5 mt-10 font-bold'>Mark John</h2>
              <h2 className='text-black text-sm'>
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              </h2>
            </div>
      </div>
      <div className='services-item bg-white relative mt-24'>
            <div className='service-icon bb h-32 w-32 absolute text-center flex justify-center z-10'>
              <Image className='bb-img' src={'/bookkks.jpg'} width={150} height={150} />
            </div>
            <div className='service-item flex flex-col items-center p-3 justify-center'>
              <h2 className='text-black text-2xl mb-5 mt-10 font-bold'>Mark John</h2>
              <h2 className='text-black text-sm'>
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              </h2>
            </div>
      </div>
      <div className='services-item bg-white relative mt-24'>
            <div className='service-icon bb h-32 w-32 absolute text-center flex justify-center z-10'>
              <Image className='bb-img' src={'/bookkks.jpg'} width={150} height={150} />
            </div>
            <div className='service-item flex flex-col items-center p-3 justify-center'>
              <h2 className='text-black text-2xl mb-5 mt-10 font-bold'>Mark John</h2>
              <h2 className='text-black text-sm'>
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              Lorem ipsum dolor sit amet, consectetur adientum
              </h2>
            </div>
      </div>
      
    </OwlCarousel>
    </div>
      
  
  );
  
};

export default Carousel;