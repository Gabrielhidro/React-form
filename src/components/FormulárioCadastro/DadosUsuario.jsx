import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

export function DadosUsuario({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ email, senha });
      }}
    >
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="email"
        type="email"
        color="secondary"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        id="senha"
        label="senha"
        type="password"
        color="secondary"
        variant="outlined"
        margin="dense"
        required
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
