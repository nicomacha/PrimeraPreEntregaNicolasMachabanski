import cart from "../assets/images/cart.svg";

const CartWidget = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-black text-bg-light position-relative"
      >
        <img src={cart} alt="Logo carrito" width={20} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
          1
        </span>
      </button>
    </>
  );
};

export default CartWidget;
