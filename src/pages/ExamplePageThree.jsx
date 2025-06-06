import React from "react";
import { useParams } from "react-router-dom";
import { examplesthree } from "../data/examplesthree" ;
import UsersList from "../examples/part3/UsersList";
import ProductList from "../examples/part3/ProductList";
import SimpleForm from "../examples/part3/SimpleForm";
import FormValidation from "../examples/part3/FormValidation";
import UserListFilter from "../examples/part3/UserListFilter";
import UserListWithToggle from "../examples/part3/UserListWithToggle";


const components = {
  UsersList,
  ProductList,
  SimpleForm,
  FormValidation,
  UserListFilter,
  UserListWithToggle,
 
};

const ExamplePageThree = () => {
  const { id ,title } = useParams();
  const example = examplesthree.find((ex) => ex.id === parseInt(id));

  if (!example) return <h2>Example Not Found</h2>;

  const Component = components[example.component];

  return (
    <div>
       <label className="example_title">{example.title}</label>
      <p>{example.description}</p>
      <Component />
    </div>
  );
};

export default ExamplePageThree;
