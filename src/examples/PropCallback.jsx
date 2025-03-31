import React, { useState } from "react";

const PropCallback = () => {
  const [message, setMessage] = useState("No message yet");
  const [messageTwo, setMessageTwo] = useState("Second Message");

  return (
    <div>
      <h2>Message: {message}</h2>
      <Child updateMessage={setMessage} />

      <h2>Message Two: {messageTwo}</h2>
      <ChildTwo setParentMessage={setMessageTwo} />
    </div>
  );
};

const Child = ({ updateMessage }) => {
  const handleChange = (e) => {
    updateMessage(e.target.value); // Pass input value to parent
  };

  return (
    <div>
      <input type="text" placeholder="Type here..." onChange={handleChange} />
    </div>
  );
};

const ChildTwo = ({ setParentMessage }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setParentMessage(inputValue)}>Send Message</button>
    </div>
  );
};

export default PropCallback;
