import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import Guias from "./pages/Guias"
function App() {
  return (
    <>
      <header>
          <nav>
            <Link to="/" className="btn-menu">Home</Link><Link to="/guias" className="btn-menu">Guias</Link>
          </nav>
      </header>
      <div id="cabeçalho" className="bg-custom-primary w-full h-[8%]">Better Canoas</div>
      
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/guias" element={<Guias/>} />
      </Routes>
    </>
  )
}

export default App
