import React from "react";

const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <p className="syn-explanation">Synonyms:</p>
        <ul className="Synonyms-list">
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};
export default Synonyms;
