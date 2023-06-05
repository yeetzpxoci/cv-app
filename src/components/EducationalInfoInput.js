import React from "react";

class EducationalInfoInput extends React.Component {
    constructor(props) { 
        super(props);
    }

    handleEdit = (name, e, index) => {
        this.props.onEditEducational(name, e.target.value, index);
    }

    render() {
        return (
            <div>
                <h1>Education</h1>
                <div id="education-forms-wrapper">
                {this.props.educations.map(education => {
                    return (
                        <>
                            <form class="education-form">
                                <input name='title' onChange={(e) => this.handleEdit('title', e, education.index)} placeholder="Title" />
                                <input name='school' onChange={(e) => this.handleEdit('school', e, education.index)} placeholder="School" />
                                <input name='from' onChange={(e) => this.handleEdit('from', e, education.index)} placeholder="From" />
                                <input name='until' onChange={(e) => this.handleEdit('until', e, education.index)} placeholder="Until" />
                            </form>
                        </>
                    )
                })}
                <button onClick={this.props.onAddEducational}>Add</button>
                </div>
            </div>
        );
    }
}

export default EducationalInfoInput;