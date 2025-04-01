import React from "react";
import { useParams } from "react-router-dom";
import { examplestwo } from "../data/examplestwo";
import AuthButton from "../examples/part2/AuthButton";
import AdminMessage from "../examples/part2/AdminMessage";
import UserRole from "../examples/part2/UserRole";

const components = {
  AuthButton,
  AdminMessage,
  UserRole
};

const ExamplePageTwo = () => {
  const { id ,title } = useParams();
  const example = examplestwo.find((ex) => ex.id === parseInt(id));

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

export default ExamplePageTwo;
