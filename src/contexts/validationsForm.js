import React from "react";

export const validationsForm = React.createContext(
    { cpf: semValidacao, senha: semValidacao }  
);

function semValidacao(dados){
    console.log(dados);
    return{valido:true, texto:""}
}