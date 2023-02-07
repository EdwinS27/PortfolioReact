import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
    state = {
        color: "black"
    }
    changeMode = () => {
        let e = document.getElementById('mainDiv');
        let text = document.getElementsByClassName('changeText');
        let otherText = document.getElementsByClassName('defaultText');
        if(this.state.color === 'white')  {
            e.style.background = "black";
            for(let i = 0; i < text.length; i++) text[i].style.color = "white";
            for(let i = 0; i < otherText.length; i++) otherText[i].style.color = "black";
            this.setState({color: "black"});
        }
        else  {
            e.style.background = 'white ';
            for(let i = 0; i < text.length; i++) text[i].style.color = 'black';
            for(let i = 0; i < otherText.length; i++) otherText[i].style.color = "black";
            this.setState({color: "white"});
        }
    }
    render() {
        return  (
            <nav
                className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient"
                id="NavBarStyle" >
                <div className="container">
                    <a className="navbar-brand logo" href="/">
                        EdwinS
                    </a>
                    <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item" role="presentation">
                            <Link className="nav-link active" to="">
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
                        <li className="nav-item" role="presentation" onClick={this.changeMode}>
                            <Link className="nav-link active is-active">
                                Color
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );   
    }
}
export default NavBar;