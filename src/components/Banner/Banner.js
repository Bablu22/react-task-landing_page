import React from 'react';
import Header from '../Header/Header';
import './Banner.css'
import video from '../../assets/videos/video.mp4'

const Banner = () => {
    return (
        <div className='banner'>
            <Header />

            <div className="container banner-container">
                <div className="row w-100">
                    <div className="col-md-6">
                        <h2 className='text-white '>THE SOUL OF THE WORLD <br />A SIMPLE SOLUTION</h2>
                        <video className='rounded' width="100%" controls="false" autoplay="autoplay" poster="https://images.unsplash.com/photo-1505775561242-727b7fba20f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80">
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                    <div className="col-md-6 d-flex justify-content-between align-items-center">
                        <div>
                            <p className='text-white fs-5'>For businesses and organizations - you can build communities and
                                engage audiences with one easy-to-use mobile app platform.</p>
                            <button className='btn my-btn'>Know More</button>
                            <button className='btn my-btn'>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='why-choose'>
                <h1 className='fw-bold'>Why Choose BOTSPOT AI? <br />
                    We’re so glad you
                    asked !</h1>
                    <button className='btn why-btn'>GET STARTED TODAY <i class="fas fa-arrow-down"></i></button>
                    <button className='btn why-btn'>OUR SERVICES <i class="fas fa-arrow-down"></i></button>
            </div>
        </div>
    );
};

export default Banner;