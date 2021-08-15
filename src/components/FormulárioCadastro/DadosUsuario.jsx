import { Button, TextField } from "@material-ui/core";

export function DadosUsuario({ onSubmit }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <TextField
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
