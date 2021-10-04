import React from 'react';
//fontWasome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPhoenixFramework , faMedapps, faTrello } from '@fortawesome/free-brands-svg-icons';
import './Contact.css'
import Footer from '../Footer/Footer';
const Contact = () => {
    return (
        //Contact Section
        <div class="wrapper">
    <div class="overlay">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-9">
                <div class="contact-us text-center">
                    <h3>Contact Us</h3>
                    <p class="mb-5">Let's contact us to comfirm your admission, and gather a lot of knowladge</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mt-5 text-center px-3">
                                <div class="d-flex flex-row align-items-center"> <span class="icons"><FontAwesomeIcon icon={faMedapps} /></span>
                                    <div class="address text-left"> <span>Address</span>
                                        <p>Wasekpur, sonaimuri, Noakhali</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mt-3"> <span class="icons"><FontAwesomeIcon icon={faPhoenixFramework} /></span>
                                    <div class="address text-left"> <span>Phone</span>
                                        <p>01708332531</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mt-3"> <span class="icons"><FontAwesomeIcon icon={faTrello} /></span>
                                    <div class="address text-left"> <span>Address</span>
                                        <p>nazrul.com200@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="text-center px-1">
                                <div class="forms p-4 py-5 bg-white">
                                    <h5>Send Message</h5>
                                    <div class="mt-4 inputs"> <input type="text" class="form-control" placeholder="Name"/> <input type="text" class="form-control" placeholder="Email"/> <textarea class="form-control" placeholder="Type your message"></textarea> </div>
                                    <div class="button mt-4 text-left"> <button class="btn btn-dark">Send</button> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</div>
    );
};

export default Contact;