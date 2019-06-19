import React from 'react';
import './FinalPoem.css';


const createHtmlLines = (lines) => {
  return lines.map((line, index) => {
    return <p key={index}>{line}</p>
  });
};

const FinalPoem = (props) => {

  return (
    <div className="FinalPoem">
      <section className={props.myClass}>
        <h3>Final Poem</h3>
        {createHtmlLines(props.lines)}
      </section>

      <div className={props.buttonClass}>
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.changeFinalVisibilityCallback} />
      </div>
    </div>
  );
}

export default FinalPoem;
