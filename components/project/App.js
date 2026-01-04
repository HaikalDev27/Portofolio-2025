import React, { useState } from 'react';
import './index.css';

const projects = [
  { title: "Project 1", description: "Description for Project 1", image: "/assets/project1.png" },
  { title: "Project 2", description: "Description for Project 2", image: "/assets/project2.png" },
  { title: "Project 3", description: "Description for Project 3", image: "/assets/project3.png" }
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' | 'prev'

  function handlePrev() {
    setDirection('prev');
    setCurrentIndex(i => (i - 1 + projects.length) % projects.length);
  }

  function handleNext() {
    setDirection('next');
    setCurrentIndex(i => (i + 1) % projects.length);
  }

  const project = projects[currentIndex];

  return (
    <div className="ProjectWrapper">
      <div className="ProjectContainer">
        <h1>My Projects</h1>

        <div className="ProjectSlider">
          <button className="PrevButton" aria-label="Previous project" onClick={handlePrev}>{"<"}</button>

          {/* key forces remount so the enter animation always runs */}
          <div
            className={"ProjectCard " + (direction === 'next' ? 'slide-next' : 'slide-prev')}
            key={currentIndex}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>

          <button className="NextButton" aria-label="Next project" onClick={handleNext}>{">"}</button>
        </div>

        <div className="ProjectPager">{currentIndex + 1} / {projects.length}</div>
      </div>
    </div>
  );
}
