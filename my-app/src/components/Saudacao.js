function Saudacao ({nome}) {

    function gerarSaudacao(algumNome) {
        return  `oh oh, salve ${algumNome}, é o joaozinho na visao e nois manda de coraçao, ce ta ligado ne bigode `
    }

    return (
        <>
            {nome &&<p>{gerarSaudacao(nome)}</p>}
        </>
    )
}

export default Saudacao