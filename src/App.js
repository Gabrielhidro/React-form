import { Container, Typography } from '@material-ui/core';
import './App.css';
import { FormularioCadastro } from './components/FormulárioCadastro/FormularioCadastro';
import 'fontsource-roboto'

function handleSubmitForm(dados){
  console.log(dados);
}

function validationCpf(cpf){
  if(cpf.length !== 11){
    return{valido: false, texto: "CPF deve ter 11 dígitos"}
  }
  else {
    return{valido: true, texto: ""}
  }
}

function App() {
  return (
    <div className="App">
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1" >
          Formulário de Cadastro
        </Typography>
        <FormularioCadastro onSubmit={handleSubmitForm} validations={validationCpf} />
      </Container>
    </div>
  );
}

export default App;
