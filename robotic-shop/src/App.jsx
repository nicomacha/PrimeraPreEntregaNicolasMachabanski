import ItemListContainer from "./components/ItemListContainer";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <ItemListContainer
        mensaje={
          "Bienvenidos a ROBOTIC SHOP, proximamente veran muchos avances de nuestra web."
        }
      />
    </>
  );
}

export default App;
