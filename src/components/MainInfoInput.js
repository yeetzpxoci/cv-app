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
            <form>
              <input name='name' onChange={(e) => this.handleEdit(e, 'name')} placeholder="Name"/>
              <input name='email' onChange={(e) => this.handleEdit(e, 'email')} placeholder="Email" />
              <input name='phoneNo' onChange={(e) => this.handleEdit(e, 'phoneNo')} placeholder="Phone number" />
            </form>
          </div>
        );
  }
}

export default MainInfoInput;