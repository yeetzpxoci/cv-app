import React from "react";

class EducationalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const educations = this.props.educations.map(education => {
            return (
                <div id="educations">
                    <span>Title: {education.title}</span>
                    <span>Institution: {education.school}</span>
                    <span>Period: {education.from} - {education.until}</span>
                </div>
            );
        });

        return (
            <div id="education-container">
                <h1>Education</h1>
                <div id="education-wrapper">
                    {educations}
                </div>
            </div>
        );
    }
}

export default EducationalInfo;