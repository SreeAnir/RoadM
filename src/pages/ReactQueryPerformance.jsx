import React from "react";
import { useParams } from "react-router-dom";
import { reactquerdata } from "../data/reactquerdata";

import RQExample from "../examples/reactquery/RQExample";
 

const components = {
  RQExample,
};

const ReactQueryPerformance = () => {
  const { id ,title } = useParams();
  const example = reactquerdata.find((ex) => ex.id === parseInt(id));

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

export default ReactQueryPerformance;
