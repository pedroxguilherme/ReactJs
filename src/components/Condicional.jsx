import { useState } from "react";




function Condicional(){

const[email, setEmail] = useState();
const[userEmail, setUserEmail] = useState();



    function enviarEmail(e){
        setUserEmail(email);
        e.preventDefault();
        console.log("Testando");
    }
    function limparEmail(){
        setUserEmail("");
      

    }



return(
   <div>
        <h2>Cadastre o seu Usuario</h2>
        <form>
            <input type="email" placeholder="Digite o seu Email" onChange={(e) => setEmail(e.target.value)}/>
            <button type="submit" onClick={enviarEmail}>Enviar</button>
           {userEmail && (
            <div>
                <p>O email do usuario é {userEmail}</p>
            <button onClick={limparEmail}>Limpar Email</button>
            </div>
           )
           
           }
        </form>

 



   </div>



)


}

export default Condicional;