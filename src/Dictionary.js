import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

const Dictionary = () => {
  const [keyword, setKeyword] = useState("");

  const inputHandle = (event) => {
    setKeyword(event.target.value);
  };

  const handleResponse = (response) => {
    console.log(response);
  };

  const search = (event) => {
    event.preventDefault();
    alert(`Searching... ${keyword}`);

    let apiUrl = "  https://api.dictionaryapi.dev/api/v2/entries/en/sunset";
    axios.get(apiUrl).then(handleResponse);
  };
  return (
    <>
      <div className="dictionary">
        <form onSubmit={search}>
          <input type="search" autoFocus={true} onChange={inputHandle} />
        </form>
      </div>
    </>
  );
};
export default Dictionary;
