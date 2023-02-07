import React from 'react';
import ProjectTemplate from '../Components/projects';
//  import logo from './logo.svg';
 import CoS from '../img/CoS.jpg';
 import Pong from '../img/pong.png';
 import Drive from '../img/driveCar.jpg';
 import Phobia from '../img/Phobias.PNG';
 import Starwars from '../img/starwars.png';
 import SkillShot from '../img/currentProgress.PNG';

class ProjectPageApp extends React.Component {
  render() {

    return (
      <div id="mainDiv">
        <div className="heading">
            <h2 className="text-center">
                Projects
            </h2>
        </div> {/* heading */}
        <section className="portfolio-block block-intro">
          <div className="container" id="resume">
            <div className="group">
              <div className="row" id="space">
                <ProjectTemplate
                  demoLocation={"https://www.youtube.com/watch?v=tiOJsRY7074&ab_channel=EdwinS27"}
                  imSrcLocation={SkillShot}
                  projectTitle={"Skill Shot Practice Tool"}
                  projectSubTitle={"Practice Tool"}
                  projectRole={"Role: Designer; Game Developer; Game Programmer"}
                  projectDescriptionText={"Created a Unity Game. Built as a practice tool to increase mouse accuracy."}
                  sourceCodeLink={"https://github.com/EdwinS27/CulminationProject"}
                />
                <ProjectTemplate
                  demoLocation={"https://www.youtube.com/watch?v=tiOJsRY7074&ab_channel=EdwinS27"}
                  imSrcLocation={Starwars}
                  projectTitle={"Star Wars"}
                  projectSubTitle={"Space Invaders Inspired"}
                  projectRole={"Role: Designer; Game Developer; Game Programmer"}
                  projectDescriptionText={"Created a mini-game based on the perspective of the empire. Created using Processing. A java based open source graphical library and integrated development environment."}
                  sourceCodeLink={"https://github.com/EdwinS27/SpaceInvaders"}
                />
              </div>
            </div>{/* className="group" */}
            <div className="group">
              <div className="row" id="space">
                <ProjectTemplate
                demoLocation={"https://openprocessing.org/sketch/775796"}
                imSrcLocation={Pong}
                projectTitle={"Pong"}
                projectSubTitle={"Local Multiplayer"}
                projectRole={"Role: Designer; Developer"}
                projectDescriptionText={"Created a mini game using the p5 JavaScript library. Also Created a physical version with Arduino and Processing.  Arduino is a C++ platform application used to upload programs to the Arduino boards, and Processing is a java based open source graphical library and integrated development environment. "}
                sourceCodeLink={"https://github.com/EdwinS27/pong"}
                />
                <ProjectTemplate
                demoLocation={"CryptoCalculatorApp"}
                imSrcLocation={'https://th.bing.com/th/id/OIP.QvLwMgHgdyOdmaUIh5_gVQHaHa?pid=ImgDet&rs=1'}
                projectTitle={"Crypto Profit Calculator"}
                projectSubTitle={""}
                projectRole={"Role: Developer"}
                projectDescriptionText={"Created a mini calculator to keep track of potential gains."}
  
                />
              </div>
            </div>{/* className="group" */}
            <div className="group">
              <div className="row" id="space">
                    <ProjectTemplate
                      demoLocation={"https://openprocessing.org/sketch/1335438"}
                      imSrcLocation={Drive}
                      projectTitle={"Drive around the Block"}
                      projectSubTitle={""}
                      projectRole={"Role: Designer; Developer"}
                      projectDescriptionText={"Created a mini game using the p5 JavaScript library"}
                      sourceCodeLink={"https://openprocessing.org/sketch/1335438"}
                    />
                    <ProjectTemplate
                      demoLocation={"https://openprocessing.org/sketch/900184"}
                      imSrcLocation={'https://th.bing.com/th/id/OIP.QvLwMgHgdyOdmaUIh5_gVQHaHa?pid=ImgDet&rs=1'}
                      projectTitle={"You Are Prepared"}
                      projectSubTitle={""}
                      projectRole={"Role: Q/A; Back End Engineer"}
                      projectDescriptionText={"Created an interactive experience using computer vision. It is a web browser body controlled game."}
                      sourceCodeLink={"https://openprocessing.org/sketch/900184"}
                    />
                </div>
              </div>{/* className="group" */}
            <div className="group">
              <div className="row" id="space">
                    <ProjectTemplate
                      demoLocation={"https://renuka92.github.io/fear-itself/"}
                      imSrcLocation={Phobia}
                      projectTitle={"Phobias"}
                      projectSubTitle={""}
                      projectRole={"Role: Game Programmer"}
                      projectDescriptionText={"A prototype game which was designed, developed and built by the students in a class collaboratively. I oversaw the implementation of the game’s mechanics such as level progression, inventory, and mapping the characters animations and controls using the unreal engine."}
                      sourceCodeLink={"https://github.com/EdwinS27/Phobia-Third-Person"}
                    />
                    <ProjectTemplate
                      demoLocation={"https://www.youtube.com/watch?v=2yl_p63yVAM&ab_channel=EdwinS27"}
                      imSrcLocation={CoS}
                      projectTitle={"Circle Of Salt"}
                      projectSubTitle={""}
                      projectRole={"Role: Game Programmer"}
                      projectDescriptionText={"A prototype game which was designed, developed and built by the students in a class collaboratively. I was a part of a 3-man programmer squad. I oversaw the implementation of the game’s mechanics such as level progression, the characters animations, and mapping controls using the unreal engine."}
                      sourceCodeLink={"https://github.com/entertainmenttechnology/Boisvert-ENT3320-Fall2020/tree/master/CircleOfSalt"}
                    />
                </div>
              </div>{/* className="group" */}
          </div>
        </section>
      </div>
    );
  }
}
export default ProjectPageApp;