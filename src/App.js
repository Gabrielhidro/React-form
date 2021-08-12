import { Container, Typography } from '@material-ui/core';
import './App.css';
import { FormularioCadastro } from './components/FormulárioCadastro/FormularioCadastro';
import 'fontsource-roboto'

function handleSubmitForm(dados){
  console.log(dados);
}

function App() {
  return (
    <div className="App">
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1" >
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro onSubmit={handleSubmitForm} />
      </Container>
    </div>
  );
}

export default App;
