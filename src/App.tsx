import Header from './components/Header.tsx'
import BuscarBairro from './components/BuscarBairro.tsx'
import BuscarResiduo from './components/BuscarResiduo.tsx'
function App() {
  return (
    <>
    <Header />
    <div className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
      <BuscarBairro />
      <BuscarResiduo />
    </div>
    </>
  )
}

export default App
