function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista dos Crias:</h3>
            {
                itens.length > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    )
                    )
                ) : (
                    <p>Nao tem itens no array parsa</p>
                )
            }
        </>
    )
}

export default OutraLista