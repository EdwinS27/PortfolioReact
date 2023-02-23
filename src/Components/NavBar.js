import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function NavBar() {

    const [open, setOpen] = useState(false);
    
    return  (           
        <nav
            className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient"
            id="NavBarStyle" >
            <div className="container">
                <Link className="navbar-brand logo" href="/">
                    EdwinS
                </Link>

                <Button
                    data-toggle="collapse" className="navbar-toggler" data-target="navbarNav"
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse"
                    aria-expanded={open}
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="navbar-toggler-icon"></span>
                </Button>

                <Collapse in={open}>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link active" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link active is-active" to='projects'>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link active is-active" to='resume'>
                                Resume
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link active is-active" to="contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link active is-active">
                                Color
                            </Link>
                        </li>
                    </ul>
                </div>
                </Collapse>
            </div>
        </nav>
    );
}

export default NavBar;