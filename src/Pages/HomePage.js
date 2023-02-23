import React from "react";
// components
import Project from "../Components/Project";
import pong from '../img/pong.png';
import Logo from '../img/myLogo.jpg';
import starwars from '../img/starwars.png';
import SkillShot from '../img/currentProgress.PNG';
// import ProjectVideo from "../Components/ProjectVideo";
import FeaturedProject from "../Components/FeaturedProject.js"

function HomePage() {
    return (
      <div id="mainDiv">
        <section className="portfolio-block block-intro">
            <div className="container">
                <div className="avatar">
                    <img
                        src={Logo}
                        width="150"
                        alt='My Custom Logo Goes Here'
                    />
                </div>
                <div className="about-me">
                    <p className="changeText">
                        Hello I am <strong>Edwin Samaniego</strong>.
                        <br/>
                        A full-stack developer.
                    </p>
                </div>
            </div>
          </section>
        <section className="portfolio-block block-intro">
          <div className="container" id="resume">
            <div className="group">
              <div className="row" id="space">
                    <Project
                        demoLocation={"https://www.youtube.com/watch?v=tiOJsRY7074&ab_channel=EdwinS27"}
                        imSrcLocation={SkillShot}
                        projectTitle={"Skill Shot Practice Tool"}
                        projectSubTitle={"Practice Tool"}
                        projectRole={"Role: Designer; Game Developer; Game Programmer"}
                        projectDescriptionText={"Created a Unity Game. Built as a practice tool to increase mouse accuracy."}
                        sourceCodeLink={"https://github.com/EdwinS27/CulminationProject"}
                    />
                    <Project
                      demoLocation={"https://openprocessing.org/sketch/775796"}
                      imSrcLocation={pong}
                      projectTitle={"Pong"}
                      projectSubTitle={"Local Multiplayer"}
                      projectRole={"Role: Designer; Developer"}
                      projectDescriptionText={"Created a mini game using the p5 JavaScript library. Also Created a physical version with Arduino and Processing.  Arduino is a C++ platform application used to upload programs to the Arduino boards, and Processing is a java based open source graphical library and integrated development environment. "}
                      sourceCodeLink={"https://github.com/EdwinS27/pong"}
                    />
                </div>
                    <FeaturedProject
                      embedId = {"tiOJsRY7074"}
                      projectTitle={"Star Wars"}
                      projectSubTitle={"Space Invaders Inspired"}
                      projectRole={"Role: Designer; Game Developer; Game Programmer"}
                      projectDescriptionText={"Created a mini-game based on the perspective of the empire. Created using Processing. A java based open source graphical library and integrated development environment."}
                      sourceCodeLink={"https://github.com/EdwinS27/SpaceInvaders"}
                    />
              </div>{/* className="group" */}
          </div>
        </section>
      </div>
    );
}

export default HomePage;