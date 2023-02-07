import React from "react";
function Contact()  {
    let shouldReveal = false;
    // const checkIfCorrect = () =>    {
    //     //
    // }
    return(
        <div id="mainDiv">
            {/* <!-- Start: Contact Form Clean --> */}
            <div id="contact" className="contact-clean">
                <form method="post">
                <h2 className="text-center" >
                    Contact us
                </h2>
                {/* <!-- Start: Success Example --> */}
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Name" />
                </div>
                {/* <!-- End: Success Example --> */}
                {/* <!-- Start: Error Example --> */}
                <div className="form-group">
                    <input className="form-control is-invalid" type="email" name="email" placeholder="Email" />
                    {
                        shouldReveal
                        &&
                        <small className="form-text text-danger">
                            Please enter a correct email address.
                        </small>
                    }
                    {/* <!-- Start: The Error Message --> */}
                    {/* <!-- End: The Error Message --> */}
                </div>
                {/* <!-- End: Error Example --> */}
                <div className="form-group">
                    <textarea className="form-control" name="message" placeholder="Message" rows="14">
                    </textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                    send 
                </button>
                </div>
                </form>
            </div>
            {/* <!-- End: Contact Form Clean --> */}
        </div>
    );
}

export default Contact;