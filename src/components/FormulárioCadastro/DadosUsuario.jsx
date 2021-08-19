import { Button, TextField } from "@material-ui/core";
import { useContext } from "react";
import { useState } from "react";
import { validationsForm } from "../../contexts/validationsForm";

export function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState({ senha: { valido: true, texto: "" } });


  const validations = useContext(validationsForm)
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
      onSubmit={(event) => {
        event.preventDefault();

        if(possoEnviar()){
          onSubmit({ email, senha });
        }
        
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="email"
        type="email"
        name="email"
        color="secondary"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />
      <TextField
        onBlur={validarCampos}
        error={!error.senha.valido}
        helperText={error.senha.texto}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        id="senha"
        label="senha"
        name="senha"
        type="password"
        color="secondary"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}
