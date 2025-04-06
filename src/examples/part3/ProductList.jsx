import React from "react";
const Product = ({ name, price }) => (
  <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
    <h3>{name}</h3>
    <p>Price: ${price}</p>
  </div>
);

const ProductList = () => {
  const products = [
    { id: 101, name: "Laptop", price: 1200 },
    { id: 102, name: "Phone", price: 800 },
    { id: 103, name: "Tablet", price: 500 }
  ];

  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
