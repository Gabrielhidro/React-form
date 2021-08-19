import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

export function DadosPessoais({ onSubmit, validations }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState();
  const [promo, setPromo] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [error, setError] = useState({ cpf: { valido: true, texto: "" } });

  function validarCampos(event){
    const {name, value} = event.target;
    const novoEstado = {...error}
    novoEstado[name] = validations[name](value);
    setError(novoEstado);
  }

  function possoEnviar(){
    for(let campo in error){
      if(!error[campo].valido){
        return false
      }
    }
    return true
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(possoEnviar()){
          onSubmit({
            nome,
            sobrenome,
            cpf,
            novidades,
            promo,
          });
        }
      }}
    >
      <TextField
        onChange={(e) => setNome(e.target.value)}
        value={nome}
        label="Nome"
        id="nome"
        name="nome"
        color="secondary"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />

      <TextField
        onChange={(e) => setSobrenome(e.target.value)}
        value={sobrenome}
        label="Sobrenome"
        id="sobrenome"
        name="sobrenome"
        color="secondary"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />

      <TextField
        onChange={(e) => setCpf(e.target.value)}
        onBlur={validarCampos}
        value={cpf}
        error={!error.cpf.valido}
        helperText={error.cpf.texto}
        label="CPF"
        id="cpf"
        name="cpf"
        color="secondary"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />

      <FormControlLabel
        onChange={(e) => setPromo(e.target.checked)}
        label="Promoções"
        control={<Switch name="Promoções" checked={promo} />}
        fullWidth
      />

      <FormControlLabel
        onChange={(e) => setNovidades(e.target.checked)}
        label="Novidades"
        control={<Switch name="Novidades" checked={novidades} />}
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}
