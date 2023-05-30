import React from "react";

class EducationalInfoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEdit = (e, name, index) => {
        this.props.onEditEducational(name, e.target.value, index);
    }

    render() {
        return (
            <div>
                <h1>Education</h1>
                {this.props.educations.map(education => {
                    return (
                        <form>
                            <input name='school' onChange={(e) => this.handleEdit(e, 'school', education.index)} placeholder="School" />
                            <input name='title' onChange={(e) => this.handleEdit(e, 'title', education.index)} placeholder="Title" />
                            <input name='studyDate' onChange={(e) => this.handleEdit(e, 'studyDate', education.index)} placeholder="Study date" />
                        </form>
                    )
                })}
                <button onClick={this.props.onAddEducational}>Add</button>
            </div>
        );
    }
}

export default EducationalInfoInput;