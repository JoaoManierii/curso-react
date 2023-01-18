import {useState} from 'react'

function Form() {

function cadastrarUsuario(e) {
    e.preventDefault()
   console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
}

    const [name, setName] = useState()
    const [password, setPassword] = useState()


    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" id="name" name="name">Nome:</label>
                    <input type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password" id="password" name="password">Senha:</label>
                    <input type="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form