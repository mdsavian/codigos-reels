import React from "react";
import { useState } from "react";

import "./styles.css";

const BotaoAdicionar: React.FC = () => {
  const [estaAdicionando, setEstaAdicionando] = useState(false);
  const [foiAdicionado, setFoiAdicionado] = useState(false);

  const handleClick = () => {
    setEstaAdicionando(true);

    setTimeout(() => {
      setEstaAdicionando(false);
      setFoiAdicionado(true);

      setTimeout(() => setFoiAdicionado(false), 2000);
    }, 2000);
  };
  return (
    <button onClick={handleClick} className={estaAdicionando || foiAdicionado ? "adicionando" : ""}>
      <span className="icon material-symbols-outlined">{foiAdicionado ? "check" : "add"}</span>
    </button>
  );
};

export default BotaoAdicionar;
