import { useState } from "react"

function Condicionais() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(email)
    }

    function limparEmail(e) {
        setUserEmail('')
    }


    return (
        <div>
            <h2>Cadastre seu email:</h2>
            <form action="#">

                <input type="email" placeholder="Digite o seu email"
                    onChange={(e) => setEmail(e.target.value)} />

                <button type="submite" onClick={enviarEmail}>Enviar-email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuario eh: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                        </div>
                )}
                    </form>
        </div>
    )
}
export default Condicionais 