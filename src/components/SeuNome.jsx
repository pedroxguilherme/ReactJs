





function SeuNome({ setNome }){


    return(

        <div>
            <p>Digite o Seu Nome:0</p>
            <input type="text" name="nome" id="nome" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}

            
            />
        </div>

    )
}

export default SeuNome;