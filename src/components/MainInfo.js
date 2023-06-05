import React from "react";

class MainInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main-info-container">
                <div id="main-info-wrapper">
                    <span id="name-text">{this.props.name}</span>
                    <span id="email-text">{this.props.email}</span>
                    <span id="phone-no-text">{this.props.phoneNo}</span>
                </div>
                <div id="profile-img-container" onClick={this.triggerUploadForm}>
                    <label id="upload-button">
                    <input type="file" onChange={(e) => this.props.handleFileChange(e)}></input>
                    </label>
                    <img alt="Profile" id="profile-img"
                        src={this.props.selectedFile || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}></img>
                </div>
            </div>
        );
    }
}

export default MainInfo;