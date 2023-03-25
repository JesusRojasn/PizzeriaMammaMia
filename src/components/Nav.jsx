import { NavLink } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../contexts/MyContext";

const Nav = () => {
  const { totalPedido } = useContext(MyContext);

  return (
    <div className="nav-container">
      <div className="nav">
        <NavLink to="/">🍕 ¡Pizzería Mamma Mia!</NavLink>
        <NavLink to="/carrito">🛒 Carrito: ${totalPedido} </NavLink>
      </div>
      <div className="navbg">
        <div className="title">
          <h1>¡Las mejores pizzas de la ciudad!</h1>
          <h2>
            Delivery <span className="Free"> GRATIS</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Nav;
