import { useEffect, useState } from "react";
import listaProductos from "./json/productos.json";
import Itemlist from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  const { category } = useParams();
  const id = "";
  console.log(category);
  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          category
            ? listaProductos.filter(
                (items) =>
                  items.categoria.toLowerCase() == category.toLowerCase()
              )
            : listaProductos
        );
      }, 2000);
    });

    promesa.then((respuesta) => {
      setItems(respuesta);
    });
  }, [category]);

  return (
    <div className="container">
      <div className="row my-6">
        <Itemlist items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;
