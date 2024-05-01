import { useEffect, useState } from "react";
import listaProductos from "./json/productos.json";
import Itemlist from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id ? listaProductos.filter(items.categoria == id) : listaProductos
        );
      }, 2000);
    });

    promesa.then((respuesta) => {
      setItems(respuesta);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row my-6">
        <Itemlist items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
