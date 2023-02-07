import React from "react";
import {Link} from 'react-router-dom';

function Footer(props)  {
    return(
        <footer className="page-footer">
                <div className="links">
                    <Link to={"/about"}>
                        About me
                    </Link>
                </div>
                <div className="social-icons">
                    <a
                        href={"https://github.com/EdwinS27"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon ion-social-github">
                    </a>
                    <a
                        href={"https://www.linkedin.com/in/edwinsamaniego/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon ion-social-linkedin">
                    </a>
                </div>
        </footer>
    );
}

export default Footer;