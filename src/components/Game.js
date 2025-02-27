import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lines: [],
      finalPoemClass: "FinalPoem__poem hidden",
      recentSubmissionClass: "hidden",
      submissionFormClass: "",
      finalButtonClass: "FinalPoem__reveal-btn-container"
    };
  }

  onLineSubmitted = (allLineElements) => {

    const line = FIELDS.map((field) => {
      if (field.key) {
        return allLineElements[field.key];
      } else {
        return field;
      }
    }).join(" ");

    const allLines = this.state.lines;
    allLines.push(line);

    this.setState({
      lines: allLines,
    });
  };

  changeRecentVisibility = () => { 
    this.setState ({
      recentSubmissionClass: "",
    })
  };

  changeFinalVisibility = () => { 
    this.setState ({
      finalPoemClass: "FinalPoem__Poem",
      finalButtonClass: "hidden",
      submissionFormClass: "hidden",
      recentSubmissionClass: "hidden",
    })
  };

  changeFormVisibility = () => { 
    this.setState ({
      submissionFormClass: "hidden",
    })
  }

  render() {

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    const lastLine = this.state.lines[this.state.lines.length - 1];

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <div className={this.state.recentSubmissionClass}>
        <RecentSubmission line={lastLine} />
        </div>
        
        <PlayerSubmissionForm fields={FIELDS} onLineSubmittedCallback={this.onLineSubmitted} changeRecentVisibilityCallback={this.changeRecentVisibility} 
        myClass={this.state.submissionFormClass} />

        <FinalPoem lines={this.state.lines} changeFinalVisibilityCallback={this.changeFinalVisibility}
        myClass={this.state.finalPoemClass} 
        buttonClass={this.state.finalButtonClass} />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
