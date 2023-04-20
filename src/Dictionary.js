import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");

  const inputHandle = (event) => {
    setKeyword(event.target.value);
  };

  const handleResponse = (response) => {
    console.log(response.data[0]);
  };

  const search = (event) => {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  };
  return (
    <>
      <div className="dictionary">
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={inputHandle} />
        </form>
        <Results />
      </div>
    </>
  );
};
export default Dictionary;
