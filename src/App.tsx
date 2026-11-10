import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import Guias from "./pages/Guias"
function App() {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link><Link to="/guias">Guias</Link>
        </nav>
      </header>
      
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/guias" element={<Guias/>} />
      </Routes>
    </>
  )
}

export default App
