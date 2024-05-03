import { useEffect, useState } from "react";
import listaProductos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        const product = listaProductos.find((item) => item.id == id);
        resolve(product);
      }, 2000);
    });
    promesa.then((respuesta) => {
      setItem(respuesta);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row my-6">
        <ItemDetail prod={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
