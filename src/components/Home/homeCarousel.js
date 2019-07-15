import React from 'react';
import { Fade } from 'react-slideshow-image';
import { FadeImages } from './carouselData'
import './home.css'

const fadeProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}

const HomeCarousel = () => {
  return (
    <div >

      <Fade {...fadeProperties}>
        <div >
          <div className="homecarousel">
            <img src={FadeImages[0]} width="100%" height="100%" height="100%" />
          </div>
        </div>
        <div >
          <div className="homecarousel">
            <img src={FadeImages[1]} width="100%" height="100%" />
          </div>
        </div>
        <div >
          <div className="homecarousel">
            <img src={FadeImages[2]} width="100%" height="100%" />
          </div>
        </div>
      </Fade>

    </div>
  )
}
export default HomeCarousel;