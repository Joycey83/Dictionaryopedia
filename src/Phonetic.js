import ReactAudioPlayer from "react-audio-player";
const Phonetic = (props) => {
  return (
    <div className="Phonetic">
      <h2 className="phonetic-text"> {props.phonetic.text}</h2>
      <div className="audio-player">
        <ReactAudioPlayer src={props.phonetic.audio} autoPlay controls />{" "}
      </div>
    </div>
  );
};
export default Phonetic;
