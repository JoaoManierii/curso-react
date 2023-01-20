import logo from './logo.jpg';
import rainbow_line from './rainbow_line.gif'
import './App.css';
import { useState } from 'react';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicionais from './components/Condicionais';
import OutraLista from './components/OutraLista';
import Listagem from './components/Listagem';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Contato';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  const name = 'Joaozinho Da Vt'
  const newName = name.toUpperCase()

  
  function sum (a,b) {
    return a+b
  }
  
  const url = "https://via.placeholder.com/150"
  
  const meusItens = ['React', 'Vue', 'Angular']
  
  const[nome, setNome] = useState()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Teste dos crias</h1>
        <p>Primeiro codigo funcionando nessa fita</p>
        <p>Ola, {newName}</p>
        <p>Soma {sum(3, 5)} parceria</p>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={rainbow_line} className="separador" alt="gif" />             {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro */}
        <h6>To distante de perreco faz tempo</h6>
        <img src={url} alt="minha imagem" />
        <Frase/>
        <HelloWorld/>
        <img src={rainbow_line} className="separador" alt="gif" />             {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro */}
        <SayMyName nome="Matheuzinho"/>
        <SayMyName nome="Joaozin"/>
        <SayMyName nome={name}/>
        <img src={rainbow_line} className="separador" alt="gif" />             {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro */}
        <Pessoa nome="Ismael" idade="30" profissao="Agronomo" foto="https:via.placeholder.com/50" />
        <img src={rainbow_line} className="separador" alt="gif" />             {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro */}
        <List/>
        <img src={rainbow_line} className="separador" alt="gif" />             {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro */}
        <Evento numero="1"/>
        <Evento numero="2"/>
        <Form/>
        <img src={rainbow_line} className="separador" alt="gif" />             {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro */}
        <Condicionais/>
        <OutraLista itens={meusItens}/>
        <OutraLista itens={[]}/>
        <img src={rainbow_line} className="separador" alt="gif" />               {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro */}
        <Listagem/>
         <img src={rainbow_line} className="separador" alt="gif" />             {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro */}
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
        <img src={rainbow_line} className="separador" alt="gif" />             {/* Separador pra nao bugar a cabeça, geralemne usado entre um ex e outro -- A partir daqui nois comecou a usar router, foca ai parceria*/}
        <Router>
          <NavBar/>
              <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/empresa" element={<Empresa/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
              </Routes>
              <Footer/>
        </Router>
      </header>
    </div>
  );
}

export default App;
