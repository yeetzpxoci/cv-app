import React from "react";

class PracticalInfoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEdit = (name, e, index) => {
        this.props.onEditPractical(name, e.target.value, index);
    }

    render() {
        return (
            <div>
                <h1>Experience</h1>
                <div id="experience-forms-wrapper">
                    {this.props.experiences.map(experience => {
                        return (
                        <>
                            <form class="experience-form">
                                <input name='companyInput' onChange={(e) => this.handleEdit('company', e, experience.index)} placeholder="Company" />
                                <input name='positionInput' onChange={(e) => this.handleEdit('position', e, experience.index)} placeholder="Position" />
                                <input name='fromInput' onChange={(e) => this.handleEdit('from', e, experience.index)} placeholder="From" />
                                <input name='untilInput' onChange={(e) => this.handleEdit('until', e, experience.index)} placeholder="Until" />
                            </form>
                        </>
                        );
                    })}
                <button onClick={this.props.onAddPractical}>Add</button>
                </div>
            </div>
        );
    }
}


export default PracticalInfoInput;