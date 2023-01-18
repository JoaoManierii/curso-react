function Evento({numero}) {

function meuEvento() {
    console.log(`Ce me ativou parceria ! ${numero}`)
}

    return(
        <div>
            <p>Clica ai pra acontecer um evento paezao</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento