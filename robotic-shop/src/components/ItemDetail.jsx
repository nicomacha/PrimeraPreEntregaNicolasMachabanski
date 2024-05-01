import ItemCount from "./ItemCount";

const ItemDetail = ({ prod }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={prod.imagen}
            width={333}
            height={333}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="col-md-4">
          <h1>{prod.nombre}</h1>
          <p>${prod.precio}</p>
          <p>{prod.descripcion}</p>
          <ItemCount maximo={prod.stock} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
