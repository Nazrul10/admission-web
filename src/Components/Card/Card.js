import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import './Card.css'
const Card = () => {
  //useState
  const [course, setCourse] = useState([])
    //useEffect
    useEffect(()=>{
        fetch('./education.JSON')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
  return (
    <div>
      <h1 className="text-center fs-1 pt-5">Our Service</h1>
      <div className="card-style">
      {
        course.slice(0, 4).map(course =>  <Courses info={course}></Courses>)
      }
    </div>
    </div>
  );
};
//export
export default Card;