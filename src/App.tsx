import Header from './components/Header.tsx'
import BarraBusca from './components/BarraBusca.tsx'
import PontosColeta from './data/pontos-coleta.json'
import type {PontoColeta} from './types/index.ts'
import { useState } from 'react'
import CardPontoColeta from './components/CardPontoColeta.tsx'

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

     <div className="flex items-left justify-center w-xs box-sizing-border overflow-hidden m-2 border-2">
        {list.map((ponto) => (
          <CardPontoColeta key={ponto.id} ponto={ponto} />
        ))}
     </div>
      
  
  </>
  )
}

export default App
