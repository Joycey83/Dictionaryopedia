import styles from "./App.module.css";
import dictionaryLogo from "./images/dictionary-book.png";
import Dictionaryopedia from "./components/Dictionaryopedia";
import Footer from "./components/Footer";

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
        <h1 className={styles["main--heading"]}>Dictionaryopedia</h1>
        <Dictionaryopedia />
        <Footer />
      </div>
    </>
  );
}

export default App;
