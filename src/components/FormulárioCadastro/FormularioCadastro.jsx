import React, { useState } from "react";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DdosUsuario";

export function FormularioCadastro({ onSubmit, validations }) {
  return (
    <>
      <DadosPessoais onSubmit={onSubmit} validations={validations} />
      <DadosUsuario />
    </>
  );
}
