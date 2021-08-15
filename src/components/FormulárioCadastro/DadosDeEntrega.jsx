import React from "react";
import { Button, TextField } from "@material-ui/core";

export function DadosDeEntrega() {
  return (
    <form>
      <TextField
        id="CEP"
        label="CEP"
        type="number"
        color="secondary"
        variant="outlined"
        margin="dense"
      />

      <TextField
        id="Endereço"
        label="Endereço"
        type="text"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        id="numero"
        label="Número"
        type="number"
        color="secondary"
        variant="outlined"
        margin="dense"
      />

      <TextField
        id="estado"
        label="Estado"
        type="text"
        color="secondary"
        variant="outlined"
        margin="dense"
      />

      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Finalizar Cadrasto
      </Button>
    </form>
  );
}
