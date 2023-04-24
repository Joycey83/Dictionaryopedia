import React from "react";

const Meaning = (props) => {
  console.log(props.meaning);
  return (
    <>
      <div className="meaning">
        <h4>
          <strong>{props.meaning.partOfSpeech}</strong>
        </h4>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              {definition.definition}
              <br />

              <strong>Example:</strong>
              <em>{definition.example}</em>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Meaning;
