import React from 'react';
//Icons Import
import 'mdbreact/dist/css/mdb.css';
import './Courses.css'
import { MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
const Courses = (props) => {
  const {picture, name, versity, title, Course, Duaration, time} = props.info
  return (
    //card Section
    <div>
       <div class="card-group">
  <div class="card">
    <img className="w-100" src={picture} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h1 class="card-title">{name}</h1>
      <h5>{versity}</h5>
      <h6><small>{title}</small></h6>

      <div className="d-flex justify-content-between">
        <div>
          <h6><span><MDBIcon icon="university" /></span> {Course}</h6>
        </div>
        <div>
          <h6><span><MDBIcon far icon="clock" /></span> {Duaration} years</h6>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <h6><span><MDBIcon icon="book" /></span> {time}</h6>
        </div>
        <div>
        <h6><span><MDBIcon icon="calendar-day" /></span> 21-6-21</h6>
        </div>
      </div>
      <NavLink to="/services">
      <button className="butn">See more</button>
      </NavLink>
    </div>
  </div>
</div>
    </div>
  );
};

export default Courses;