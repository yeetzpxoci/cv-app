import React, { Component } from 'react';
import MainInfoInput from "./components/MainInfoInput";
import EducationalInfoInput from "./components/EducationalInfoInput";
import PracticalInfoInput from "./components/PracticalInfoInput";
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNo: '',
      
      education: {
        school: 'School',
        title: 'Title',
        studyDate: 'Date of study',
        index: 0
      },
      educations: [],

      experience: {
        company: 'Company',
        position: 'Position',
        from: 'From',
        until: 'Until',
        editPractical: false,
        index: 0
      },
      experiences: [],
    }

    this.onEditMain = this.onEditMain.bind(this);
    this.onEditEducational = this.onEditEducational.bind(this);
    this.onEditPractical = this.onEditPractical.bind(this);
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

    const newEducation = {
      school: 'School',
      title: 'Title',
      studyDate: 'Date of study',
      editEducational: false,
      index: currentIndex + 1
    }

    this.setState({
      education: newEducation,
      educations: [...this.state.educations, newEducation]
    });
  }

  onEditPractical(index) {
    const experience = this.state.experiences.find(experience => experience.index === index);
    experience.editPractical = true;
    let newExperiences = this.state.experiences;
    newExperiences[index] = experience;
    this.setState({ educations: newExperiences });
  }

  onSubmitPractical = (e, index) => {
    e.preventDefault();

    const newExperience = {
      company: e.target.companyInput.value,
      position: e.target.positionInput.value,
      from: e.target.fromInput.value,
      until: e.target.untilInput.value,
      editPractical: false,
      index: index
    };

    let newEducations = this.state.educations;
    
    newEducations[newExperience.index] = newExperience; 

    this.setState({
      educations: newEducations
    });
  }

  onAddPractical = (e) => {
    e.preventDefault();

    const currentIndex = this.state.experience.index;

    const newExperience = {
      company: 'Company',
      position: 'Position',
      from: 'From',
      until: 'Until',
      editPractical: false,
      index: currentIndex + 1
    };

    this.setState({
      experience: newExperience,
      experiences: [...this.state.experiences, newExperience]
    });
  }

  render() {
    const educations = this.state.educations.map(education => {
      return (<span>{education.school}</span>);
    });
    return (
      <div id="content">
        <div id="info-input">
          <h1>Personal Information</h1>
          <MainInfoInput onEditMain={this.onEditMain} />

          <EducationalInfoInput educations={this.state.educations} onEditEducational={this.onEditEducational} onAddEducational={this.onAddEducational} />

          <PracticalInfoInput experiences={this.state.experiences} onSubmitPractical={this.onSubmitPractical}
            editPractical={this.state.editPractical} onEditPractical={this.onEditPractical} onAddPractical={this.onAddPractical} />
        </div>

        <div id="info">
          <span>{this.state.name}</span>
          <span>{this.state.email}</span>
          <span>{this.state.phoneNo}</span>

          <span>{educations[0]}</span>
          <span>{educations[1]}</span>
          <span>{educations[2]}</span>
        </div>
      </div>
    );
  }
}

export default App;