import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Pokemons from './pages/Pokemons';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
