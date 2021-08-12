import React from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

export function FormularioCadastro() {
  return (
    <form>
      <TextField
        label="Nome"
        id="nome"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        label="Sobrenome"
        id="sobrenome"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        label="CPF"
        id="cpf"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="Promoções" defaultChecked={true} />}
        fullWidth
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="Novidades" defaultChecked={true} />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
