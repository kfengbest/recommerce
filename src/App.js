import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Nav from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
