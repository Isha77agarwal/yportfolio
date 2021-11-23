/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import image from '../assets/PicsArt_11-16-09.03.11-removebg-preview.png'
import '../Styles/Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <section className="home-section h-screen section">
            {/* Effect Wrap */}
            <div className="effect-wrap">
                <div className="effect effect-1">
                </div>
                <div className="effect effect-2">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
                <div className="effect effect-3"></div>
                <div className="effect effect-4"></div>
                <div className="effect effect-5 flex justify-between">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
            <div className="container">
                <div className="row flex-wrap md:flex-nowrap flex items-center">
                    <div className="home-text flex-1">
                        <p className="text-black-300">Hello</p>
                        <h2 className="text-black-900">I'm YuvrajSingh</h2>
                        <h1 className="text-black-700">Full Stack Web Developer</h1>
                        <Link className="shadow hover:shadow-inner moreBtn" to="#">More About Me</Link>
                    </div>
                    <div className="home-img flex-1">
                        <div className="img-box shadow-inner">
                            <img src={image} className="shadow" alt="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
