import React from "react";
const WorkExp = () => {
    return(
        <div className="work-experience group changeText">
            <div className="item">
                <h2 className="text-center">Work Experience </h2>
                <div className="row">
                    <div className="">
                        <div>
                            <h4>
                                Revature
                                <span className="period">07/2022 - 12/2022 </span>
                            </h4>
                        </div>
                        <h3>
                            Full Stack Software Engineer
                            <span className="period">Remote</span>
                        </h3>
                        <div>
                            <p>
                                ● Built, tested and deployed scalable, and modular software products. Executed full lifecycle software development. <br/>
                                ● Modified existing software to correct errors, and improve performance as well as add features. <br/>
                                ● Wrote testable, efficient code. Documented and maintained software functionality
                            </p>
                        </div>
                    </div> {/* col */}
                </div> {/* row */}
            </div>
        </div>
    );
}

export default WorkExp;


// <div className="row">
// <div className="col-md-6">
//     <h3>Freelance Web Developer</h3>
// </div> {/* col */}
// <div className="col-md-6">
//     <span className="period">
//         12/2019- Present
//     </span>
// </div> {/* col */}
// </div> {/* row */}
