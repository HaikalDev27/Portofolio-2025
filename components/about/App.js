import React from 'react';
import Marquee from "react-fast-marquee";
import './index.css';
const image_path = '/assets/image.png';

export default function App() {
  return (
    <div className="AboutWrapper">
        <div className="AboutContainer">
            <div className="AboutImageContainer">
                <img src={image_path} alt="About Me" />
                <div className="AboutOverlay">
                    <Marquee className='AboutMarquee' gradientColor={'#7656ce'} gradient={true} gradientWidth={50} speed={50}>
                    <h1>Director Director Director</h1>
                    </Marquee>
                    <br />
                    <br />
                    <Marquee direction='right' className='AboutMarquee' gradientColor={'#7656ce'} gradient={true} gradientWidth={50} speed={50}>
                    <h1>Programmer Programmer Programmer</h1>
                    </Marquee>
                    <br />
                    <br />
                    <Marquee className='AboutMarquee' gradientColor={'#7656ce'} gradient={true} gradientWidth={50} speed={50}>
                    <h1>Developer Developer Developer</h1>
                    </Marquee>
                </div>
            </div>
            <div className="AboutContent">
                <span className="AboutTitle">About Me</span>
                <div className="AboutSubheader">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    </div>
  );
}