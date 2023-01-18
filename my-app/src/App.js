import logo from './logo.jpg';
import rainbow_line from './rainbow_line.gif'
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Joaozinho Da Vt'
  const newName = name.toUpperCase()

  function sum (a,b) {
    return a+b
  }

  const url = "https://via.placeholder.com/150"

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
      <img src={rainbow_line} className="separador" alt="gif" />
        <h6>To distante de perreco faz tempo</h6>
        <img src={url} alt="minha imagem" />
        <HelloWorld/>
        <img src={rainbow_line} className="separador" alt="gif" />
        <SayMyName nome="Matheuzinho"/>
        <SayMyName nome="Joaozin"/>
        <SayMyName nome={name}/>
        <img src={rainbow_line} className="separador" alt="gif" />
        <Pessoa nome="Ismael" idade="30" profissao="Agronomo" foto="https:via.placeholder.com/50" />
      </header>
    </div>
  );
}

export default App;
