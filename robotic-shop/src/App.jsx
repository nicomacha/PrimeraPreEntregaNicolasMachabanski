import CarruPrinc from "./components/CarrruPrinc";
import Error404 from "./components/Error404";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <CarruPrinc />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/categoria/:category"} element={<ItemListContainer />} />
        <Route path={"/categoria/SALE/"} element={<ItemListContainer />} />
        <Route path={"/producto/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
