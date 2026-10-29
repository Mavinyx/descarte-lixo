import Header from './components/Header.tsx'
import BuscarBairro from './components/BuscarBairro.tsx'
import BuscarResiduo from './components/BuscarResiduo.tsx'
function App() {
  return (
    <>
    <Header />
    <div className="container">
      <BuscarBairro />
      <BuscarResiduo />
    </div>
    </>
  )
}

export default App
