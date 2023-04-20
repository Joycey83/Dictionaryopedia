const Meaning = (props) => {
  console.log(props.meaning);
  return (
    <>
      <div className="meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <br />
              <em>{definition.example}</em>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Meaning;
