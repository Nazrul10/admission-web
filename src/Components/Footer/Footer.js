import { MDBIcon } from 'mdbreact';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        //Footer Section
        <footer>
        <div className="container-fluid mt-5 mb-5">
        <div className="card">
            <div className="row g-0">
                <div className="col-md-8 border-right">
                    <div className="border-bottom">
                        <div className="row p-4">
                            <div className="col-md-3">
                                <h1 className="text-center">About</h1>
                                <p>The Strobel Center for Applied Apologetics at CCU focuses on equipping a vast network of Christians who are actively engaged in the marketplace of ideas in local churches and communities</p>
                            </div>
                            <div className="col-md-3">
                                <ul className="item-list">
                                <li><a href="/home">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Services</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="item-list">
                                <li><a href="/home">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Services</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="item-list">
                                    <li><a href="/home">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Services</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom">
                        <div className="row p-4">
                            <div className="col-md-3">
                                <div className="d-flex flex-column align-items-center mr-46"> <img src="https://i.imgur.com/phiO1J4.jpg" className="rounded-circle" width="50" alt=""/> <span className="text-white mt-2">USA</span> </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex flex-column align-items-center mr-46"> <img src="https://i.imgur.com/KXDKPvt.jpg" className="rounded-circle" width="50" alt=""/> <span className="text-white mt-2">RUSSIA</span> </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex flex-column align-items-center mr-46"> <img src="https://i.imgur.com/D4pUdsf.jpg" className="rounded-circle" width="50" alt=""/> <span className="text-white mt-2">GERMANY</span> </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex flex-column align-items-center mr-46"> <img src="https://i.imgur.com/Tm9cEMT.png" className="rounded-circle" width="50" alt="" /> <span className="text-white mt-2">JAPAN</span> </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-4"> <span className="text-white">2021 Copyright</span> <span className="text-white">Terms and conditions</span> </div>
                </div>
                <div className="col-md-4">
                    <div className="border-bottom">
                        <div className="bg-danger p-3">
                            <div className="d-flex justify-content-between align-items-center"> <span className="dots"><i className="fa fa-phone"></i></span> <span className="text-content">Let's Talk</span> </div>
                        </div>
                        <div className="mt-3 text-center p-2">
                            <div className="text-center d-flex flex-row align-items-center"> <img src="https://i.imgur.com/QpQpT3e.png" width="60" alt=""/>
                                <div className="ml-3"> <span className="text-white d-block text-left">E-maiil</span> <span className="text-white">nazrul.com200@gmail.com</span> </div>
                            </div>
                        </div>
                        <div className="mt-0 text-center p-2">
                            <div className="text-center d-flex flex-row align-items-center"> <img src="https://i.imgur.com/KtUwFEK.png" width="60" alt=""/>
                                <div className="ml-3"> <span className="text-white d-block text-left">Official E-mail</span> <span className="text-white">nazrl.com300@gmail.com</span> </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom">
                        <div className="p-3 px-3 py-2">
                            <div className="search d-flex align-items-center"> <input className="search_input" type="text" placeholder="Enter your email"/> <a href="/home" className="search_icon"><i className="fa fa-envelope"></i></a> </div>
                        </div>
                    </div>
                    <div className="social p-4 text-center">
                        <ul className="social-icons">
                            <li><MDBIcon fab icon="facebook" /></li>
                            <li><MDBIcon fab icon="linkedin" /></li>
                            <li><MDBIcon fab icon="github" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
    );
};

export default Footer;