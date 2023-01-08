import React from "react";
import { useState } from "react";

import "./styles.css";

const BotaoPagamento: React.FC = () => {
  const [estaPagando, setEstaPagando] = useState<boolean>(false);
  const [foiPago, setFoiPago] = useState<boolean>(false);

  const handleClick = () => {
    setEstaPagando(true);

    setTimeout(() => {
      setEstaPagando(false);
      setFoiPago(true);
      setTimeout(() => {
        setFoiPago(false);
      }, 2000);
    }, 2000);
  };

  return (
    <button disabled={estaPagando || foiPago} onClick={handleClick}>
      <span className="linha"></span>
      <span className="icone"></span>
      <span className="text">
        {estaPagando ? "Processando..." : foiPago ? "Pago" : "Compre agora"}
      </span>
    </button>
  );
};

export default BotaoPagamento;
