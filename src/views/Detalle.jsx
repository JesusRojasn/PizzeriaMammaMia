import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../contexts/MyContext";

const Detalle = () => {
  const { id } = useParams();

  const { data, agregarPizza } = useContext(MyContext);

  const objetoPizza = data.find((objeto) => objeto.id === id);

  return (
    <div>
      <div className="detail-container">
        <div className="detail">
          <img src={objetoPizza.img} alt="imagen-pizza"></img>
          <h3 className="namepizza">{objetoPizza.name}</h3>
          <p>{objetoPizza.desc}</p>
          <h4> Ingredientes:</h4>
          <ul className="lista">
            {objetoPizza.ingredients.map((ingrediente) => (
              <li>🍕 {ingrediente}</li>
            ))}
          </ul>
          <p>
            <strong>${objetoPizza.price}</strong>
          </p>
          <div className="buttons">
            <button
              className="buttonAgregar"
              onClick={() => agregarPizza(objetoPizza)}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalle;
