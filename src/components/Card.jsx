import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../contexts/MyContext";

const Card = ({ objeto }) => {
  const navigate = useNavigate();
  const { agregarPizza } = useContext(MyContext);

  const verMas = () => {
    navigate(`/pizza/${objeto.id}`);
  };

  return (
    <div key={objeto.id}>
      <div className="cards">
        <img src={objeto.img} alt="imagen-pizza"></img>
        <h3 className="namepizza">{objeto.name}</h3>
        <h4> Ingredientes:</h4>
        <ul className="lista">
          {objeto.ingredients.map((ingrediente) => (
            <li>🍕 {ingrediente}</li>
          ))}
        </ul>
        <p>
          <strong>${objeto.price}</strong>
        </p>
        <div className="buttons">
          <button className="buttonVer" onClick={() => verMas()}>
            Ver Mas 👀
          </button>
          <button
            className="buttonAgregar"
            onClick={() => agregarPizza(objeto)}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
