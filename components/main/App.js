import './index.css';
import { TypeAnimation } from "react-type-animation";

export default function App() {
  return (
    <span className="responsive-wrapper">
        <span className="Header">
          <h1 className="Title">Meet @haikaru_27</h1>
          <TypeAnimation
            sequence={[
              'a Director',
              1000,
              'a Programmer',
              1000,
              'a Developer',
              1000,
              'a Multimedia Enthusiast',
              1000,
              'an Indonesian Director, Programmer, Developer & Multimedia Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
        </span>
        
          <br />
          <p className="Subheader">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <br />
          <a className="ContactButton" href="#contact">Contact Me</a>
      </span>
  );
}