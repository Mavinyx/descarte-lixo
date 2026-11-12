import { Route, Routes, Link } from "react-router-dom"
import Home from "./pages/Home"
import Guias from "./pages/Guias"
import ColetaDomiciliar from "./pages/ColetaDomiciliar"
function App() {
  return (
    <>
      <header>
          <nav className="text-custom-primary text-lg flex h-[100%] w-[100%] justify-center flex-col gap-12">
            <Link to="/" className="flex flex-col justify-center items-center"><i className="fa-solid fa-house"></i>Home</Link>
            <Link to="/guias" className="flex flex-col justify-center items-center"><i className="fa-solid fa-book-open"></i>Guias</Link>
            <Link to="/coleta-domicialiar" className="flex flex-col text-center justify-center items-center"><i className="fa-solid fa-clock "></i>Coleta Domiciliar</Link>
          </nav>
      </header>
      <div id="cabeçalho" className="bg-custom-primary w-full h-[8%]">Better Canoas</div>
      
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/guias" element={<Guias/>} />
        <Route path="/coleta-domicialiar" element={<ColetaDomiciliar/>} />
      </Routes>
    </>
  )
}

export default App
