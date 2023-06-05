import React from "react";

class PracticalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const experiences = this.props.experiences.map(experience => {
            return (
                <div id="experiences">
                    <span>Company: {experience.company}</span>
                    <span>Position: {experience.position}</span>
                    <span>Period: {experience.from}- {experience.until}</span>
                </div>
            );
        });

        return (
            <div id="experience-container">
                <h1>Experience</h1>
                <div id="experience-wrapper">
                    {experiences}
                </div>
            </div>
        );
    }
}

export default PracticalInfo;