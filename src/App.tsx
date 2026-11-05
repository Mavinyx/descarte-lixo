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

      <div className="w-full max-w-4xl mx-auto px-4 my-6">
        <h2 className="text-lg font-bold mb-3 text-custom-primary">Pontos de Coleta Encontrados</h2>
        
        {list.length === 0 ? (
          <p className="text-gray-500 italic">Nenhum ponto encontrado para os filtros selecionados.</p>
        ) : (
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar scrollbar-thumb-custom-quaternary">
            {list.map((ponto) => (
              <div key={ponto.id} className="snap-center shrink-0 w-80">
                <CardPontoColeta ponto={ponto} />
              </div>
            ))}
          </div>
        )}
      </div>
  
  </>
  )
}

export default App
