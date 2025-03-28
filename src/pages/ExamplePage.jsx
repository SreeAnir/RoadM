import React from "react";
import { useParams } from "react-router-dom";
import { examples } from "../data/examples";
import CounterExample from "../examples/CounterExample";
import FetchExample from "../examples/FetchExample";

const components = {
  CounterExample,
  FetchExample,
};

const ExamplePage = () => {
  const { id } = useParams();
  const example = examples.find((ex) => ex.id === parseInt(id));

  if (!example) return <h2>Example Not Found</h2>;

  const Component = components[example.component];

  return (
    <div>
      <h1>{example.title}</h1>
      <p>{example.description}</p>
      <Component />
    </div>
  );
};

export default ExamplePage;
