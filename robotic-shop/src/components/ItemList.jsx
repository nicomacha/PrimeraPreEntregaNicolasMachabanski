import Item from "./Item";

const Itemlist = ({ items }) => {
  return (
    <>
      {items.map((producto, i) => (
        <Item key={i} producto={producto} />
      ))}
    </>
  );
};

export default Itemlist;
