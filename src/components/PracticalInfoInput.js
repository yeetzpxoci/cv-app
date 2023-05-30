import React from "react";

class PracticalInfoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e, index) => {
        this.props.onSubmitPractical(e, index);
    }

    render() {
        return (
            <div>
                <h1>Experience</h1>
                {this.props.experiences.map(experience => {
                    if (experience.editPractical) {
                        return (
                            <form onSubmit={(e) => this.handleSubmit(e, experience.index)}>
                                <input name='companyInput' placeholder="Company" />
                                <input name='positionInput' placeholder="Position" />
                                <input name='fromInput' placeholder="From" />
                                <input name='untilInput' placeholder="Until" />
                                <button type="Submit">Submit</button>
                            </form>
                        );
                    } else {
                        return (
                            <>
                                <p>{experience.company}</p>
                                <p>{experience.position}</p>
                                <p>{experience.from}</p>
                                <p>{experience.until}</p>
                                <button onClick={() => this.props.onEditPractical(experience.index)}>Edit</button>
                            </>
                        );
                    }
                })}
                <button onClick={this.props.onAddPractical}>Add</button>
            </div>
        );
    }
}


export default PracticalInfoInput;