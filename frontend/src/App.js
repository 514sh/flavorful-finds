import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const baseUrl = BACKEND_URL;
  const [view, setView] = useState(true);
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios.get(`${baseUrl}/hello`).then((response) => {
      console.log(response.data);
      setMessage(response.data.message);
    });
  }, [view]);

  console.log("this is me", baseUrl);
  const handleClick = async (e) => {
    e.preventDefault();
    const obj = { message: inputValue };
    const response = await axios.post(`${baseUrl}/hello`, obj);
    console.log(response.data);
    setInputValue("");
    setView(!view);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <h1>hello world</h1>
      <input onChange={handleInputChange} value={inputValue}></input>
      <button onClick={handleClick}>send</button>
      <ul>{message ? message.map((mes) => <li key={mes}>{mes}</li>) : ""}</ul>
      <h3>
        from: button {view === "" ? "no view" : "message sent successfully"}
      </h3>
    </>
  );
};

export default App;
