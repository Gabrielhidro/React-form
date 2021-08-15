import React, { useState } from "react";
import { DadosDeEntrega } from "./DadosDeEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";

export function FormularioCadastro({ onSubmit, validations }) {
  return (
    <>
      <DadosPessoais onSubmit={onSubmit} validations={validations} />
      <DadosUsuario />
      <DadosDeEntrega />
    </>
  );
}
