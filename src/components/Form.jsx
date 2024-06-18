import { useState } from "react";

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault();
        console.log(`Usuario ${name} foi cadastrado com a senha ${password}`)
        console.log("Cadastrou o usuario.")




    }
   const [name, setName] = useState();
   const[password, setPassword] = useState();
return(
<div>
    <h1>Meu cadastro</h1>
    <form onSubmit={cadastrarUsuario}>
    <div>
        <label htmlFor="name"></label>
        <input type="text" id="name" name="name" 
        placeholder="Digite o Seu nome"
        onChange={(e) => setName(e.target.value)}/>
    
    </div>
    
    <div>
        <label htmlFor="password"></label>
        <input type="password" id="password" name="password" 
        placeholder="Digite a sua senha"
        onChange={(e) => setPassword(e.target.value)} />
        
    </div>
    <div>
        <input type="submit" value="Enviar" />
    </div>
    </form>


</div>

)



}

export default Form
