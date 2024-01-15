import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home'
import Menu from './components/Menu'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element = { <Home /> } />
        {/* exact ile bunun ilk açılış sayfam olacağını belirtiyorum. */}
        <Route path='/menu' exact element = { <Menu /> } />
        <Route path='/about' exact element = { <About /> } />
        <Route path='/contact' exact element = { <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
