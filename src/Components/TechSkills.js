import React from 'react';
const TechnicalSkills = () =>{
    return(
        <div className="changeText group">
            <div className="item">
                <h2 id='centerDiv'>
                    Skills
                </h2>
                <div className="col"> {/* Outer Row*/}
                    <div className="row"> {/* Inner Row*/}
                        <div className="col" id='centerDiv'>
                            <h3><span>Front End</span></h3>
                            CSS<br/>
                            HTML5<br/>
                            JavaScript
                        </div>
                        <div className="col" id='centerDiv'>
                            <h3><span>BackEnd</span></h3>
                            Java<br/>
                            JavaScript<br/>
                            TypeScript
                        </div>
                        <div className="col" id='centerDiv'>
                            <h3><span>Frame Works</span></h3>
                            Spring Boot<br/>
                            React.js<br/>
                            Express.js
                        </div>
                        <div className="col" id='centerDiv'>
                            <h3>
                                <span>
                                    Technologies
                                </span>
                            </h3>
                            Git<br/>
                            Bash<br/>
                            Agile<br/>
                            AWS RDS<br/>
                            Postman
                        </div>
                        <div className="col" id='centerDiv'>
                            <h3>
                                <span>
                                    Databases:
                                </span>
                            </h3>
                            MySQL<br/>
                            PostgreSQL<br/>
                        </div>
                    </div> {/* Inner Row*/}
                </div> {/* Outer Row*/}
            </div>
        </div>
    );
}

export default TechnicalSkills;