import React from "react";
import { useParams } from "react-router-dom";
import { experformance } from "../data/experformance";

import MemoExample from "../examples/part3/MemoExample";
import MemoizedListExample from "../examples/part3/MemoizedListExample";
import UseCallStackParent from "../examples/part3/UseCallStackParent";
import WithoutUseMemo from "../examples/performance/WithoutUseMemo";
import WithUseMemo from "../examples/performance/WithUseMemo";
import ExUseCallback from "../examples/performance/ExUseCallback";
import ExNoUseCallback from "../examples/performance/ExNoUseCallback";


const components = {
    MemoExample,
    MemoizedListExample,
    UseCallStackParent ,
    WithoutUseMemo ,
    WithUseMemo,
    ExUseCallback,
    ExNoUseCallback
};

const ExPagePerformance = () => {
  const { id ,title } = useParams();
  const example = experformance.find((ex) => ex.id === parseInt(id));

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

export default ExPagePerformance;
