import styles from "./App.module.css";
import dictionaryLogo from "./images/dictionary-book.png";
import Dictionaryopedia from "./components/Dictionaryopedia";

function App() {
  return (
    <>
      <div className={styles["app--container"]}>
        <div>
          <img
            src={dictionaryLogo}
            alt="Dictionary A-Z"
            className={styles["dictionary--logo"]}
          />
        </div>
        <Dictionaryopedia />
      </div>
    </>
  );
}

export default App;
