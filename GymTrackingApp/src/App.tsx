import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar'
import './App.css'
import Contact from './Contact';
import Home from './home';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<App />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
