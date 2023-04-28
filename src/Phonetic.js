const Phonetic = (props) => {
  return (
    <div className="phonetic">
      <a
        href={props.phonetic.audio}
        rel="noopener"
        target="_blank"
        className="images"
      >
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
};
export default Phonetic;
