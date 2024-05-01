import { useEffect, useState } from "react";

const ItemCount = ({ maximo }) => {
  const [contador, setContador] = useState(1);
  const [prod, setItemProd] = useState(maximo);

  const sumarProd = () => {
    if (contador < prod) {
      setContador(contador + 1);
    }
  };

  const restarProd = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  useEffect(() => {
    setItemProd(maximo);
  }, [maximo]);

  const onAdd = () => {
    if (contador < prod) {
      setItemProd(prod - contador);
      setContador(1);
      console.log("Agregaste " + contador + " Productos al carrito");
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={restarProd}
          >
            -
          </button>
          <button type="button" className="btn btn-light">
            {contador}
          </button>
          <button type="button" className="btn btn-primary" onClick={sumarProd}>
            +
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-dark" onClick={onAdd}>
            AGREGAR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
