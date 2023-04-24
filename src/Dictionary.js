import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  const inputHandle = (event) => {
    setKeyword(event.target.value);
  };

  const handleDictionaryResponse = (response) => {
    // console.log(response.data[0]);
    setResults(response.data[0]);
  };

  const showPhotos = (response) => {
    console.log(response.data);
  };

  const search = (event) => {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let photoApiKey = "a3a5bbeff1t6546488o90285fa5b0853";
    let photoApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoApiKey}`;
    axios.get(photoApiUrl).then(showPhotos);
  };
  return (
    <>
      <div className="dictionary">
        <section>
          <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={inputHandle} />
          </form>
        </section>

        <Results results={results} />
      </div>
    </>
  );
};
export default Dictionary;
