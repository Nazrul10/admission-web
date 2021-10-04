import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import slider1 from '../../images/hero_-area.jpg'
import slider2 from '../../images/hero_area_2.jpg'
import slider3 from '../../images/slider-image1.jpg'
const HeroSection = () => {
  //Use State
    const [index, setIndex] = useState(0);
    //button Handle
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="hero-bg">
            <Carousel.Caption style={{position: "absolute",
   top:"40%"}}>
            <h3>
World-class education for your world</h3>
            <p>You can apply from around the world. Contact us today for admission into any one of our Academic Programs!

</p>
            <NavLink to="/contact">
            <button className="btn bg-warning fs-5">Contact Us</button>
            </NavLink>
          </Carousel.Caption>
        <div
            className="d-block w-100"
            style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${slider1})`, backgroundSize:"cover",height: "100vh" }}
          />
        </Carousel.Item>
        <Carousel.Item>
        <div
            className="d-block w-100"
            style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${slider2})`, backgroundSize:"cover",height: "100vh" }}
          />
          <Carousel.Caption style={{position: "absolute",
   top:"40%"}}>
            <h3>Admission with scholarship</h3>
            <p>Continue our founding mission to bring knowledge</p>
            <NavLink to="/contact">
            <button className="btn bg-warning fs-5">Contact Us</button>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="d-block w-100"
            style={{ backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${slider3})`, backgroundSize:"cover",height: "100vh" }}
          />
  
          <Carousel.Caption style={{position: "absolute",
   top:"40%"}}>
            <h3>Earn Your Skills from us</h3>
            <p>Don't delay to apply for your admission, this is the world-class education system
            </p>
            <NavLink to="/contact">
            <button className="btn bg-warning fs-5">Contact Us</button>
            </NavLink>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};
export default HeroSection;