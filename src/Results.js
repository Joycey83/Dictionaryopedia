const Results = (props) => {
  console.log(props.definition);
  if (props.definition) {
    return (
      <>
        <div className="results">
          <h2>{props.definition.word}</h2>
          {props.definition.meanings.map((meaning, index) => {
            return meaning.definitions[0].definition;
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
