import React from "react";
import TechnicalSkills from "../Components/TechSkills";
import Education from "../Components/Education";
import WorkExp from "../Components/WorkExp";
import Header from "../Components/Header";
import RelExp from "../Components/RelevantExp";
function Resume() {
    return(
        <div id="mainDiv">
            <section className="portfolio-block cv">
            <br/><br/>
                <div className="container" id="resume">
                    <Header />
                    <WorkExp />
                    <RelExp />
                    <TechnicalSkills />
                    <Education />
                </div>   {/* container */}
            </section>
        </div>
    );
}

export default Resume;