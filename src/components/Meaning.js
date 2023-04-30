import styles from "../components/Meaning.module.css";
import Synonyms from "./Synonyms";

const Meaning = (props) => {
  // console.log(props.meaning);
  if (props.meaning) {
    return (
      <>
        <div className={styles.meaning}>
          <h4>
            <strong>{props.meaning.partOfSpeech}</strong>
          </h4>

          {props.meaning.definitions.map((definition, index) => {
            return (
              <p key={index} className={styles["paragraph--definition"]}>
                {definition.definition}
                <br />
                <em className={styles["italic--definition"]}>
                  {definition.example}
                </em>
              </p>
            );
          })}

          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      </>
    );
  } else {
    return null;
  }
};
export default Meaning;
