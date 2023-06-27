import React, { Component } from 'react';
import MainInfoInput from "./components/MainInfoInput";
import EducationalInfoInput from "./components/EducationalInfoInput";
import PracticalInfoInput from "./components/PracticalInfoInput";
import CV from "./components/CV";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNo: '',
      
      education: {
        title: '',
        school: '',
        from: '',
        until: '',
        index: 0
      },
      educations: [],

      experience: {
        company: '',
        position: '',
        from: '',
        until: '',
        index: 0
      },
      experiences: [],

      infoInputToggled: true
    }

    this.onEditMain = this.onEditMain.bind(this);
    this.onEditEducational = this.onEditEducational.bind(this);
    this.onEditPractical = this.onEditPractical.bind(this);
    this.resetCV = this.resetCV.bind(this);
    this.printCV = this.printCV.bind(this);
    this.toggleInfoInput = this.toggleInfoInput.bind(this);
  }

  componentDidMount() {
    this.setState({
      educations: [...this.state.educations, this.state.education],
      experiences: [...this.state.experiences, this.state.experience]
    });
  }

  onEditMain(name, value) {
    this.setState({ [name]: value });
  };

  onEditEducational(name, value, index) {
    let education = this.state.educations.find(education => education.index === index);
    education[name] = value;
    let newEducations = this.state.educations;
    newEducations[index] = education;
    this.setState({educations: newEducations});
  }

  onAddEducational = (e) => {
    e.preventDefault();

    const currentIndex = this.state.education.index;

    if (currentIndex < 7) {
      const newEducation = {
        title: '-',
        school: '-',
        from: '',
        until: '',
        index: currentIndex + 1
      }

      this.setState({
        education: newEducation,
        educations: [...this.state.educations, newEducation]
      });
    }
  }

  onEditPractical(name, value, index) {
    let experience = this.state.experiences.find(experience => experience.index === index);
    experience[name] = value;
    let newExperiences = this.state.experiences;
    newExperiences[index] = experience;
    this.setState({ experiences: newExperiences });
  }

  onAddPractical = (e) => {
    e.preventDefault();

    const currentIndex = this.state.experience.index;

    if (currentIndex < 7) {
      const newExperience = {
        company: '-',
        position: '-',
        from: '',
        until: '',
        index: currentIndex + 1
      };

      this.setState({
        experience: newExperience,
        experiences: [...this.state.experiences, newExperience]
      });
    } 
  }

  resetCV() {
    this.setState({
      name: '',
      email: '',
      phoneNo: '',
      educations: [{
        title: '',
        school: '',
        from: '',
        until: '',
        index: 0
      }],
      experiences: [{
        company: '',
        position: '',
        from: '',
        until: '',
        index: 0
      }]
    })
  }

  printCV() {
    let printContents = document.getElementById('cv-container').outerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents; 
  }

  toggleInfoInput() {
    if (this.state.infoInputToggled) {
      this.setState({
        infoInputToggled: false
      });
    } else {
      this.setState({
        infoInputToggled: true
      });
    }
  }

  render() {
    return (
      <div id="content">
        <div id={this.state.infoInputToggled ? "info-input-on" : "info-input-off"}>
          <h2>CVMK</h2>
          <MainInfoInput name={this.state.name} email={this.state.email} phoneNo={this.state.phoneNo} onEditMain={this.onEditMain} />

          <EducationalInfoInput educations={this.state.educations} onEditEducational={this.onEditEducational} onAddEducational={this.onAddEducational} />

          <PracticalInfoInput experiences={this.state.experiences} onEditPractical={this.onEditPractical} onAddPractical={this.onAddPractical} />
          <button onClick={this.toggleInfoInput} id="info-input-toggle-button">{this.state.infoInputToggled ? "Hide" : "Show"}</button>
        </div>

        <CV 
        name={this.state.name} 
        email={this.state.email} 
        phoneNo={this.state.phoneNo} 
        educations={this.state.educations}
        experiences={this.state.experiences} 
        resetCV={this.resetCV}
        printCV={this.printCV}
        />
        
      </div>
    );
  }
}

export default App;