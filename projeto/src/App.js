import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Comapny'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'


import Container from './components/layout/Container'

function App() {
  return (
    
  <Router>
    <ul>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/company">Empresa</Link>
      <Link to="/newproject">Novo produto</Link>
    </ul>
    <Routes>
       <Container customClass="min_height"> {/*O erro ta aqui, pesquisar e descobrir, olhar F12 */}
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/company' element={<Company/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/newproject' element={<NewProject/>}></Route>
      </Container>
    </Routes>
  </Router>
  )
}

export default App;
