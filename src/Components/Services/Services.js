import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';

const Services = () => {
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
        course.map(course => <Service info={course}></Service>)
      }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Services;