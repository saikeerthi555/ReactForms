import React, { useState } from "react";

function App() {
  //destructuring useState
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleClick() {
    setHeading(name);
    //console.log(name);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="What's your name?"
          value={name}
        />
      </form>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
