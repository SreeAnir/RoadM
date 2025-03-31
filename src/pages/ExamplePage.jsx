import React from "react";
import { useParams } from "react-router-dom";
import { examples } from "../data/examples";
import CounterExample from "../examples/CounterExample";
import CounterExampleTwo from "../examples/CounterExampleTwo";
import FetchExample from "../examples/FetchExample";
import CounterFn from "../examples/CounterFn";
import CounterClass from "../examples/CounterClass";
import SampleFuncationalComponent from "../examples/SampleFuncationalComponent";
import PlusMinus from "../examples/PlusMinus";


const components = {
  CounterExample,
  FetchExample,
  CounterExampleTwo ,
  CounterClass,
  CounterFn,
  SampleFuncationalComponent,
  PlusMinus
};

const ExamplePage = () => {
  const { id ,title } = useParams();
  const example = examples.find((ex) => ex.id === parseInt(id));

  if (!example) return <h2>Example Not Found</h2>;

  const Component = components[example.component];

  return (
    <div>
      <h1>Passed  {title}</h1>
      <h1>{example.title}</h1>
      <p>{example.description}</p>
      <Component />
    </div>
  );
};

export default ExamplePage;
