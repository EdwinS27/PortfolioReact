import React from "react";
const RelExp = () => {
    return(
        <div className="work-experience group changeText">
            <div className="item">
                <h2 className="text-center">Relevant Experience</h2>
                <div className="row">
                    <div className="col">
                        <div>
                            <h4>
                                CUNY Tech Prep (CTP)
                                <span className="period">06/2021 - 06/2022 </span>
                            </h4>
                        </div>
                        <h3>
                            Fellow, Full Stack Software Engineer
                            <span className="period">Remote</span>
                        </h3>
                        <div>
                            <p>
                                Learned in-demand technologies like React, Node, Express.js, and PostgreSQL as well as industry best practices for design, implementation, and deployment such as MVC, version control with Git/GitHub, agile & Scrum with Trello and Slack, test driven development, and CI/CD.
                            </p>
                        </div>
                    </div> {/* col */}
                </div> {/* row */}
            </div>
        </div>
    );
}

export default RelExp;