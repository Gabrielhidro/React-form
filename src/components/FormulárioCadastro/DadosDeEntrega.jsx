import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

export function DadosDeEntrega() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form>
      <TextField
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        id="CEP"
        label="CEP"
        type="number"
        color="secondary"
        variant="outlined"
        margin="dense"
      />

      <TextField
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        id="endereco"
        label="Endereço"
        type="text"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        id="numero"
        label="Número"
        type="number"
        color="secondary"
        variant="outlined"
        margin="dense"
      />

      <TextField
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        id="estado"
        label="Estado"
        type="text"
        color="secondary"
        variant="outlined"
        margin="dense"
      />

      <TextField
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
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
