import { Container, Typography } from '@material-ui/core';
import './App.css';
import { FormularioCadastro } from './components/FormulárioCadastro/FormularioCadastro';
import 'fontsource-roboto'

function App() {
  return (
    <div className="App">
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro />
      </Container>
    </div>
  );
}

export default App;
