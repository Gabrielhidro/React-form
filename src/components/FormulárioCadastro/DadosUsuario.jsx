import { Button, TextField } from "@material-ui/core";

export function DadosUsuario() {
  return (
    <form>
      <TextField
        id="email"
        label="email"
        type="email"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}
