import React, { useState } from "react";

const PropsExample = () => {
  return <Child name="John" id="10"/>;
};

const Child = ({ name , id }) => {
  return <h2>Hello, {name} ,{id}!</h2>;
};

export default PropsExample;