import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { DadosDeEntrega } from "./DadosDeEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";

export function FormularioCadastro({ onSubmit, validations }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario />;
    }
    switch (etapa) {
      case 1:
        return <DadosPessoais onSubmit={onSubmit} validations={validations} />;
    }
    switch (etapa) {
      case 2:
        return <DadosDeEntrega />;
      default:
        return <Typography>Erro</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual)}</>;
}

{
  /* <DadosPessoais onSubmit={onSubmit} validations={validations} />
<DadosUsuario />
<DadosDeEntrega /> */
}
