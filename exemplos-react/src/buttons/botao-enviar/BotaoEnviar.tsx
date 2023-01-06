import React from "react";
import { useState } from "react";

import "./styles.css";

const BotaoEnviar: React.FC = () => {
  const [estaEnviando, setEstaEnviando] = useState(false);
  const [foiEnviado, setFoiEnviado] = useState(false);

  const handleClick = () => {
    setEstaEnviando(true);

    setTimeout(() => {
      setEstaEnviando(false);
      setFoiEnviado(true);

      setTimeout(() => setFoiEnviado(false), 2500);
    }, 2000);
  };

  return (
    <button onClick={handleClick} className={estaEnviando || foiEnviado ? "enviando" : ""}>
      <span className="icon material-symbols-outlined">{foiEnviado ? "check" : "send"}</span>
      <span className="text">
        {estaEnviando ? "Enviando..." : foiEnviado ? "Enviado" : "Enviar"}
      </span>
    </button>
  );
};

export default BotaoEnviar;
