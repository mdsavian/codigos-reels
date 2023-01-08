import React from "react";
import { useState } from "react";

import "./styles.css";

const BotaoConfirmar: React.FC = () => {
  const [estaConfirmando, setEstaConfirmando] = useState(false);
  const [foiConfirmado, setFoiConfirmado] = useState(false);

  const handleClick = () => {
    setEstaConfirmando(true);

    setTimeout(() => {
      setEstaConfirmando(false);
      setFoiConfirmado(true);

      setTimeout(() => setFoiConfirmado(false), 2500);
    }, 2000);
  };
  return (
    <button onClick={handleClick} className={estaConfirmando || foiConfirmado ? "confirmando" : ""}>
      <span className="icon material-symbols-outlined">arrow_right_alt</span>

      <span className="text">
        {estaConfirmando ? "Confirmando..." : foiConfirmado ? "Confirmado" : "Confirmar"}
      </span>
    </button>
  );
};

export default BotaoConfirmar;
