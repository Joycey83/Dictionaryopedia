import playIcon from "./images/play-icon.png";

const Audio = ({ word, phonetic, audio }) => {
  const playAudio = (e) => {
    const audio = new Audio();
    audio.src = e.target.getAttribute(`url`);
    audio.play();
  };

  return (
    <div className="flex justify-between items-center p-2">
      <div>
        <h1 className="text-4xl">{word}</h1>
        <p className="text-blue-600 text-md">{phonetic}</p>
      </div>

      <div>
        {audio && (
          <img
            src={playIcon}
            alt="play-icon"
            url={audio}
            onClick={playAudio}
            className="h-10 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};
export default Audio;
