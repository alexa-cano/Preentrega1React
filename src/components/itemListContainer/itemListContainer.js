import React, { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../itemList/itemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      {/* Puedes usar los datos de products aquí */}
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          {/* Renderiza otros detalles del producto según tus necesidades */}
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
