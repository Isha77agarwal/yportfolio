import React from 'react'
import '../Styles/About.css'
import image from '../assets/PicsArt_11-16-09.03.11-removebg-preview.png'
import { saveAs } from "file-saver";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const About = () => {
    const downloadFile = () => {
        saveAs(
            "../assets/Yuvraj'sSDEResume.pdf",  //Need too change download link
            "YuvrajCV.pdf"
          );
    }
    return (
        <section className="about-section h-screen">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2 data-heading="main-info" className="text-black-900"> About me</h2>
                    </div>
                </div>
                <div className="row flex flex-wrap md:flex-nowrap">
                    <div className="about-img flex flex-col">
                        <div className="img-box shadow-inner">
                            <img src={image} alt="img" className="shadow"/>
                        </div>
                        <div className="social-links text-black-600">
                            <a className="shadow hover:shadow-inner" href="https://www.facebook.com/profile.php?id=100005298317127"><FacebookOutlinedIcon /></a>
                            <a className="shadow hover:shadow-inner" href="https://www.linkedin.com/in/07yuvraj"><LinkedInIcon /></a>
                            <a className="shadow hover:shadow-inner" href="https://instagram.com/07yuvraj?utm_medium=copy_link"><InstagramIcon /></a>
                            <a className="shadow hover:shadow-inner" href="https://github.com/07yuvraj"><GitHubIcon /></a>
                        </div>
                    </div>
                    <div className="about-info text-gray-600">
                        <p><span>Hi!👋 I'm Yuvraj Singh Tomar.</span> A diligent Full Stack Developer possessing profound knowledge and understanding of Data Structures and Algorithms looking for opportunities to upskill my jouney.</p>
                        <p> I am an undergraduate final year student from Ramanujan College, University of Delhi.I have 1 year of experience working as a Full Stack Developer.</p>
                        <button onClick={downloadFile} className="shadow hover:shadow-inner Btn">Download CV</button>
                        <a className="shadow hover:shadow-inner Btn" href="#">Hire Me!</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
