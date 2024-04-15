const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="text-white">{mensaje}</h1>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
