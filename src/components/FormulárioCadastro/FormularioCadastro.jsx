import React, { useState } from "react";
import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";

export function FormularioCadastro({ onSubmit, validations }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState();
  const [promo, setPromo] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [error, setError] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        onSubmit({
          nome,
          sobrenome,
          cpf,
          novidades,
          promo,
        });
      }}
    >
      <TextField
        onChange={(e) => setNome(e.target.value)}
        value={nome}
        label="Nome"
        id="nome"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        onChange={(e) => setSobrenome(e.target.value)}
        value={sobrenome}
        label="Sobrenome"
        id="sobrenome"
        color="secondary"
        variant="outlined"
        margin="dense"
        fullWidth
      />

      <TextField
        onChange={(e) => setCpf(e.target.value)}
        onBlur={(e) => {
          const isValid = validations(e.target.value);
          setError({ cpf: isValid });
        }}
        value={cpf}
        error={!error.cpf.valido}
        helperText={error.cpf.texto}
        label="CPF"
        id="cpf"
        color="secondary"
        variant="outlined"
        margin="dense"
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
        Cadastrar
      </Button>
    </form>
  );
}
