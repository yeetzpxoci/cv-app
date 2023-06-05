import React from "react";
import MainInfo from '/home/yyigin/odin/cv-project/src/components/MainInfo';
import EducationalInfo from '/home/yyigin/odin/cv-project/src/components/EducationalInfo';
import PracticalInfo from '/home/yyigin/odin/cv-project/src/components/PracticalInfo';

class CV extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadPicture: false,
            selectedFile: null
        }

        this.handleReset = this.handleReset.bind(this);
    }

    handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.setState({
                    selectedFile: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    handleReset() {
        this.props.resetCV();
        this.setState({selectedFile: null});
    }

    render() {
        return (
            <div id="cv-wrapper">
                <div id="cv-container">
                    <div id="background-img"></div>
                    <MainInfo
                        name={this.props.name}
                        email={this.props.email}
                        phoneNo={this.props.phoneNo}
                        uploadPicture={this.state.uploadPicture}
                        selectedFile={this.state.selectedFile}
                        handleFileChange={this.handleFileChange}
                    />

                    <EducationalInfo
                        educations={this.props.educations}
                    />

                    <PracticalInfo
                        experiences={this.props.experiences}
                    />
                </div>
                <div id="button-wrapper">
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.props.printCV}>Save or Print out</button>
                </div>
            </div>
        );
    }
}

export default CV;