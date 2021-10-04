import React from 'react';
import Footer from '../Footer/Footer';
import './About.css'
const About = () => {
    return (
        <div>
            <div>
                <h1>Check out uni course entry requirements now, to see how the subjects and qualifications you choose now will affect the courses open to you later. </h1>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9">
                    <h1 className="headers">Where to start</h1>
                    <p>If you have any ideas about HE courses you might want to study, it’s worth doing a bit of research now.</p>
                    <li>Check entry requirements for any courses you're thinking about – these may mention particular subjects or qualifications you'll need, as well as any grades you'll need to get.</li>
                    <li>Universities and colleges may also list entry requirements using Tariff points. Find out more about the Tariff.</li>
                    <li>Compare course content – even courses with identical titles can vary, so if you’ve got an idea of what you'd like to study, compare the details by browsing subjects in the UCAS undergraduate search tool or the university's own website.  </li>
                    <li>Don’t worry – you don’t need to decide now! University choices and applications are usually started in Year 12 or Year 13. Your school or college will tell you about it. In the meantime you can also find details about what’s involved and how it all works on ucas.com. <br />
                    Don’t worry – you don’t need to decide now! University choices and applications are usually started in Year 12 or Year 13. Your school or college will tell you about it. In the meantime you can also find details about what’s involved and how it all works on ucas.com.  
                     </li>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;