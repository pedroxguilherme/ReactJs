function Pessoa({nome, idade, profissao, foto}){
    return(
       
    <div>
        <img src={foto} alt={nome}/>
        <p>Nome:{nome}</p>   
        <p>idade:{idade}</p>   
        <p>profissao:{profissao}</p>   
    </div>    
   

    )


}


export default Pessoa;