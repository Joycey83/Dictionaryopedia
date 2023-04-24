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

  const handleResponse = (response) => {
    // console.log(response.data[0]);
    setResults(response.data[0]);
  };

  const search = (event) => {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "3mKvq5bRmQ0bHmalLRaCyQS46sygZN7efHK9CXLEFFK6NL4IDi8iknrg";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios.get(pexelsApiUrl).then(handlePexelsResponse);
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
