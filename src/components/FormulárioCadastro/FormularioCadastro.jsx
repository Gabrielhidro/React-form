import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { DadosDeEntrega } from "./DadosDeEntrega";
import { DadosPessoais } from "./DadosPessoais";
import { DadosUsuario } from "./DadosUsuario";

export function FormularioCadastro({ onSubmit, validations }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [ datas, setDatas ] = useState({})

  useEffect(() => {
    if(etapaAtual === forms.length-1){
      onSubmit(datas)
    }
  })

  const forms = [
    <DadosUsuario onSubmit={getDatasfunc} validations={validations} />,
    <DadosPessoais onSubmit={getDatasfunc} validations={validations} />,
    <DadosDeEntrega onSubmit={getDatasfunc} validations={validations} />,
    <Typography variant="h5">Obrigado pelo Cadastro</Typography>
  ];

  function getDatasfunc(data){
    setDatas({...datas, ...data})
    next();
  }

  function next() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <>
  <Stepper activeStep={etapaAtual}>
    <Step><StepLabel>Login</StepLabel></Step>
    <Step><StepLabel>Pessoal</StepLabel></Step>
    <Step><StepLabel>Entrega</StepLabel></Step>
    <Step><StepLabel>Finalização</StepLabel></Step>
  </Stepper>
  {forms[etapaAtual]}
  </>;

}
