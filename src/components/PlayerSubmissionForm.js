import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: 1,
    }
  }

  handleSubmitClicked = (event) => {
    event.preventDefault();
    this.setState({
      currentPlayer: this.state.currentPlayer === 1 ? 2 : 1,
    })
  }

  render() {
    
    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.state.currentPlayer }</h3>

        <form className="PlayerSubmissionForm__form" >

          <div className="PlayerSubmissionForm__poem-inputs">
            <label name="adj1"></label>
    

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
