import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { DadosDeEntrega } from "./DadosDeEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";

export function FormularioCadastro({ onSubmit, validations }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [ datas, setDatas ] = useState({})
  useEffect(() => {
    console.log(datas);
  })

  const forms = [
    <DadosUsuario onSubmit={getDatasfunc} />,
    <DadosPessoais onSubmit={getDatasfunc} validations={validations} />,
    <DadosDeEntrega onSubmit={getDatasfunc} />,
  ];

  function getDatasfunc(datas){
    setDatas({...datas, ...datas})
    next();
  }

  function next() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>{forms[etapaAtual]}</>;
}
