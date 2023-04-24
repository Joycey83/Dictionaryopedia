import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
const Results = (props) => {
  if (props.results) {
    return (
      <>
        <div className="results">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
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
