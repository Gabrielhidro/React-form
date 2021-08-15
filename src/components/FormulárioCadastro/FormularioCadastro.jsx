import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { DadosDeEntrega } from "./DadosDeEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";

export function FormularioCadastro({ onSubmit, validations }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const forms = [
    <DadosUsuario onSubmit={next} />,
    <DadosPessoais onSubmit={next} validations={validations} />,
    <DadosDeEntrega onSubmit={onSubmit} />,
  ];

  function next() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{forms[etapaAtual]}</>;
}
