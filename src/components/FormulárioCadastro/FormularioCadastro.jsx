import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { DadosDeEntrega } from "./DadosDeEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";

export function FormularioCadastro({ onSubmit, validations }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function next() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario onSubmit={next} />;

      case 1:
        return <DadosPessoais onSubmit={next} validations={validations} />;

      case 2:
        return <DadosDeEntrega onSubmit={onSubmit} />;

      default:
        return <Typography>Erro</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}
