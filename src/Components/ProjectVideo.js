import React from "react";
import YoutubeEmbed from "./Video";

class ProjectVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,
        };
    }

    toggle = () => {
        const {show} = this.state;
        this.setState({show: !show});
    }

    changeImageSize = (e) => {
        e.target.style.width = '100%';
        e.target.style.height = "350px";
    }

    resetImageSize = (e)  => {
        e.target.style.width = '95%';
        e.target.style.height = "300px";
    }

    render() {
        return (
        <div
            className="col"
            height = '100px'>
            <div className="card border-0">
                <YoutubeEmbed embedId={this.props.embedId} />
                <div className="card-body defaultText">
                    <h2 className="defaultText">
                        {this.props.projectTitle}
                    </h2>
                    <h5 className="defaultText">
                        {this.props.projectSubTitle}
                    </h5>
                    <h6 className="defaultText">
                        {this.props.projectRole}
                    </h6>
                    <p className="text-muted card-text">
                        {this.state.show && this.props.projectDescriptionText}
                    </p>
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.toggle()}>
                        {this.state.show ? "Hide Description" : "Show Description"}
                    </button>
                    <br/><br/>
                    <button
                        className="btn btn-primary"
                        type="button">
                        <a
                            id="CardButtonText"
                            href={this.props.sourceCodeLink}
                            target={"_blank"}
                            rel="noopener noreferrer"
                            >
                                Source Code
                        </a>
                    </button>
                </div>
            </div>
        </div>
        );
    }
}

export default ProjectVideo;