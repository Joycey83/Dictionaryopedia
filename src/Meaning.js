import Synonyms from "./Synonyms";
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
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <Synonyms Synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Meaning;
