import React from 'react';
import './FinalPoem.css';


const createHtmlLines = (lines, index) => {
  return lines.map((line) => {
    return <p key={index}>{line}</p>
  });
};

const FinalPoem = (props) => {

  console.log(props.lines);
  return (
    <div className="FinalPoem">
      <section className="FinalPoem__poem">
        <h3>Final Poem</h3>
        {createHtmlLines(props.lines)}
      </section>

      <div className="FinalPoem__reveal-btn-container">
        <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" />
      </div>
    </div>
  );
}

export default FinalPoem;
