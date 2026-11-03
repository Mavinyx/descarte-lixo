import Header from './components/Header.tsx'
import BarraBusca from './components/BarraBusca.tsx'
import PontosColeta from './data/pontos-coleta.json'
import type {PontoColeta} from './types/index.ts'
import { useState } from 'react'

function App() {
  const pontosColeta: PontoColeta[] = PontosColeta.map((ponto) => ({
    ...ponto,
    horarioFuncionamento: ponto.horario,
  }));
  const [list, setList] = useState<PontoColeta[]>([...pontosColeta]);
  
  //handlers
  const handleSelectBairro = (bairroId: string) => {
    setList(pontosColeta.filter((ponto) => ponto.bairrosProximos.includes(bairroId)));
  }
  const handleSelectMaterial = (materialId: string) => {
    setList(pontosColeta.filter((ponto) => ponto.materiaisAceitos.includes(materialId)));
  }
  
  return (
    <>
    <Header />
    <BarraBusca 
      onSelectBairro={(bairroId) => {
        handleSelectBairro(bairroId);
      }}
      onSelectMaterial={(materialId) => {
        handleSelectMaterial(materialId);
      }}
    />
    
    <div className="flex flex-col items-center justify-center w-full">
        {list.map((ponto) => (
          <div key={ponto.id} className="card bg-base-100 shadow-xl m-2">
            <div className="card-body">
              <h2 className="card-title">{ponto.nome}</h2>
              <p>{ponto.endereco}</p>
              <p>{ponto.horarioFuncionamento}</p>
            </div>
          </div>
        ))}
      </div>
  
  </>
  )
}

export default App
