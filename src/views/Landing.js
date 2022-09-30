import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./landing.css";
import Classnames from "classnames"
import { sliderItems, categories } from "../components/SliderData";




const Slider = props => {
    const [current, setCurrent] = useState(0);
  const length = sliderItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };

  return (
    <div className="loading-section">
    <div className='landing-container'>
        <div className="landing-arrow landing-left">
            <FaArrowLeft className="landing-arrow-button" onClick={prevSlide}/>
        </div>
      <div className="landing-arrow landing-right">
            <FaArrowRight className="landing-arrow-button" onClick={nextSlide}/>
        </div>
        
      <div className="landing-wrapper" >
        {sliderItems.map((item, index) => {
         let position = "nextSlide";
         if (index === current) {
           position = "activeSlide";
         }
         if (
           index === current - 1 ||
           (current === 0 && index === sliderItems.length - 1)
         ) {
           position = "lastSlide";
         }

            return (
           <div className={ Classnames('main-slide-section',{'main-slide-section-hide': props.open } )}  onClick={()=> props.setOpen(!props.open)}>   
          <div className={`landing-slide ${position}`} key={item.id}>
            <div className='landing-image-container'>
              <img className="landing-image" src={item.img} alt="" />
            </div>
            <div className="landing-info-container">
              <h1 className="landing-title">{item.title}</h1>
              <p className="landing-desc">{item.desc}</p>
              <button className="landing-button"><a href="/products">Shop Now</a></button>
            </div>
          </div>
          </div>
            )
        }
        )}
      </div>
    </div>
   
    </div>
    
  );
};

export default Slider;