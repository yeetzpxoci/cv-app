import React from "react";
import "/home/yyigin/odin/cv-project/src/styles/MainInfoInput.css"

class MainInfoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleEdit = (e, name) => {
        this.props.onEditMain(name, e.target.value);
    }

    render() {
        return (
          <div>
            <h1>Main Information</h1>
            <div>
              <form id="main-form">
                <input name='name' onChange={(e) => this.handleEdit(e, 'name')} placeholder="Name" value={this.props.name} />
                <input name='email' onChange={(e) => this.handleEdit(e, 'email')} placeholder="Email" value={this.props.email} />
                <input name='phoneNo' onChange={(e) => this.handleEdit(e, 'phoneNo')} placeholder="Phone number" value={this.props.phoneNo} />
              </form>
            </div>
          </div>
        );
  }
}

export default MainInfoInput;