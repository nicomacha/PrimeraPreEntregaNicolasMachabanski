import Item from "./Item";

const Itemlist = ({ items }) => {
  return (
    <>
      {items.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </>
  );
};

export default Itemlist;
