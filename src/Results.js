import React from "react";
const Results = (props) => {
  if (props.results) {
    return (
      <>
        <div className="results">
          <h2>{props.results.word}</h2>
          {props.results.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default Results;

//
