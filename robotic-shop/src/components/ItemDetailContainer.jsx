import { useEffect, useState } from "react";
import listaProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        const product = listaProductos.find((item) => item.id == 1);
        resolve(product);
      }, 2000);
    });
    promesa.then((respuesta) => {
      setItem(respuesta);
    });
  }, []);

  return (
    <div className="container">
      <div className="row my-6">
        <ItemDetail prod={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
