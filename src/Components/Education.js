import React from "react";
const Education = () => {
    return(
        <div className="education group changeText">
                <h2 className="text-center">
                    Education
                </h2>
                <div className="row">
                    <div className="col-md-6">
                        <h3>
                            New York City College of Technology
                        </h3>
                    </div>
                    <div className="col-6">
                        <span className="period">
                            08/2018 - 06/2022
                        </span>
                    </div>
                </div>
                <p className="changeText">
                    Bachelor of Technology in Emerging Media Technologies
                    <br/>
                    Major: Media Computation
                </p>
                <div>
                    <h5>
                        Coursework:
                    </h5>
                    Data Structures and Algorithms | Database Fundamentals | Java Programming | Application Development
                </div>
        </div>
    );
}

export default Education;