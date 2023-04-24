import React from "react";
import Synonyms from "./Synonyms";

const Meaning = (props) => {
  console.log(props.meaning);
  return (
    <>
      <div className="meaning">
        <h4>
          <strong>{props.meaning.partOfSpeech}</strong>
        </h4>
        <div>
          <p>
            <strong>Definition: </strong>
            {props.meaning.definition}
            <br />
            <em>{props.meaning.example}</em>
            <br />
          </p>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </div>
    </>
  );
};
export default Meaning;
