import React, { useState } from "react";

const DisplayDouble = ({ number }) => {
  const doubled = number * 2;
  return <h2>Double: {doubled}</h2>;
};

export default () => <DisplayDouble number={5} />;
