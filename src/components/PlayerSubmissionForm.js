import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: 1,
      lineElements: this.setInitialLineElements(),
    }
  }

  setInitialLineElements = () => {
    const allKeys = this.props.fields.map((field) => {
      if (field.key) {
        return field.key
      }
    });

    const lineElementsInitialState = {};
    allKeys.forEach((key) => {
      lineElementsInitialState[key] = "";
    });

    return lineElementsInitialState;
  }

  handleSubmitClicked = (event) => {
    event.preventDefault();
    this.setState({
      currentPlayer: this.state.currentPlayer + 1,
      lineElements: this.setInitialLineElements(),
    });

    const allLineElements = this.state.lineElements;

    this.props.onLineSubmittedCallback(allLineElements);
  };

  handleChangeField = (event) => {
    if (event.target.value !== "") {
      event.target.className = "";
    } else {
      event.target.className = "PlayerSubmissionForm__input--invalid";
    }

    const newWordObj = this.state.lineElements;
    newWordObj[event.target.name] = event.target.value;
    this.setState({
      lineElements: newWordObj,
    })
  }

  renderForm = () => {
    const { fields } = this.props;

    return (
      fields.map((field, index) => {
        if (field.key) {
          console.log(this.state.lineElements[field.key]);
          return (
            <input key={index}
              name={field.key}
              placeholder={field.placeholder}
              onChange={this.handleChangeField}
              className="PlayerSubmissionForm__input--invalid"
              value={this.state.lineElements[field.key]}
            />
          );
        } else {
          return (
            <span key={index}>{field}</span>
          );
        }
      })

    );
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.state.currentPlayer}</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            {this.renderForm()}

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit"
              value="Submit Line"
              className="PlayerSubmissionForm__submit-btn"
              onClick={this.handleSubmitClicked} />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
