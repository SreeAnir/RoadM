import React from "react";
import { useParams } from "react-router-dom";
import { examplesthree } from "../data/examplesthree" ;
import UsersList from "../examples/part3/UsersList";
import ProductList from "../examples/part3/ProductList";
import SimpleForm from "../examples/part3/SimpleForm";
import FormValidation from "../examples/part3/FormValidation";
import UserListFilter from "../examples/part3/UserListFilter";
import UserListWithToggle from "../examples/part3/UserListWithToggle";
import MemoExample from "../examples/part3/MemoExample";
import MemoizedListExample from "../examples/part3/MemoizedListExample";
import UseCallStackParent from "../examples/part3/UseCallStackParent";
import WithUseMemo from "../examples/part3/WithUseMemo";

const components = {
  UsersList,
  ProductList,
  SimpleForm,
  FormValidation,
  UserListFilter,
  UserListWithToggle,
  MemoExample,
  MemoizedListExample,
  UseCallStackParent ,
  WithUseMemo 
};

const ExamplePageThree = () => {
  const { id ,title } = useParams();
  const example = examplesthree.find((ex) => ex.id === parseInt(id));

  if (!example) return <h2>Example Not Found</h2>;

  const Component = components[example.component];

  return (
    <div>
      <h1>📌{example.title}</h1>
      <p>{example.description}</p>
      <Component />
    </div>
  );
};

export default ExamplePageThree;
