export function validationCpf(cpf){
    if(cpf.length !== 11){
      return{valido: false, texto: "CPF deve ter 11 dígitos"}
    }
    else {
      return{valido: true, texto: ""}
    }
  }

  export function validationPass(senha){
    if(senha.length !== 5){
      return{valido: false, texto: "Senha deve ter no mínimo 5 dígitos"}
    }
    else {
      return{valido: true, texto: ""}
    }
  }