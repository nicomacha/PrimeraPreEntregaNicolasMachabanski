import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="col-md-4 text-center ">
      <Link to={"/item/" + producto.id}></Link>
      <div className="card my-5">
        <img
          src={producto.imagen}
          width={333}
          height={333}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{producto.nombre}</h5>
          <p className="card-text">{producto.descripcion}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">${producto.precio}</li>
          <li className="list-group-item">{producto.cuotas}</li>
        </ul>
      </div>
    </div>
  );
};

export default Item;
