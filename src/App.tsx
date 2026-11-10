import BarraBusca from './components/BarraBusca.tsx'
import PontosColeta from './data/pontos-coleta.json'
import type {PontoColeta} from './types/index.ts'
import { useState } from 'react'
import CardPontoColeta from './components/CardPontoColeta.tsx'
import Map from './components/Map.tsx'

function App() {
  // CORREÇÃO AQUI: Adicionado o [] para mapear corretamente o Array de Pontos de Coleta
  const pontosColeta: PontoColeta[] = PontosColeta.map((ponto) => ({
    ...ponto,
    horarioFuncionamento: ponto.horario,
  }));
  
  const [bairroSelecionado, setBairroSelecionado] = useState('');
  const [materialSelecionado, setMaterialSelecionado] = useState('');
  
  // O filtro agora volta a funcionar perfeitamente sobre a lista de ecopontos
  const list = pontosColeta.filter((ponto) =>
    (!bairroSelecionado || ponto.bairrosProximos.includes(bairroSelecionado)) &&
    (!materialSelecionado || ponto.materiaisAceitos.includes(materialSelecionado))
  );
  
  // Handlers para os cliques nos filtros
  const handleSelectBairro = (bairroId: string) => {
    setBairroSelecionado(bairroId);
  }
  const handleSelectMaterial = (materialId: string) => {
    setMaterialSelecionado(materialId);
  }
  
  return (
    <div className="flex min-h-screen bg-brand-bg font-sans overflow-x-hidden">
      
      {/* 1. BARRA LATERAL ESQUERDA */}
      <aside className="w-24 bg-brand-light flex flex-col items-center py-8 gap-10 shadow-md shrink-0 z-10">
        {/* Botão de Início */}
        <button className="flex flex-col items-center gap-1 text-brand-dark hover:text-brand-primary transition-colors">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-extrabold tracking-wider">INÍCIO</span>
        </button>

        {/* Botão de Guias */}
        <button className="flex flex-col items-center gap-1 text-brand-primary hover:text-brand-dark transition-colors">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-[10px] font-extrabold tracking-wider">GUIAS</span>
        </button>
      </aside>

      {/* 2. ÁREA DE CONTEÚDO DIREITA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Barra Superior */}
        <header className="bg-brand-primary text-white py-4 px-8 shadow-sm flex items-center gap-3 w-full shrink-0 z-10">
          <span className="text-2xl">❄</span> 
          <h1 className="text-2xl font-semibold tracking-wide">BetterCanoas</h1>
        </header>

        {/* CONTAINER LIMITADO PARA MONITOR */}
        <div className="w-full max-w-6xl mx-auto p-6 md:p-8 flex-1">
          
          {/* Grid de duas colunas */}
          <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start w-full">
            
            {/* COLUNA DA ESQUERDA: Busca e Carrossel */}
            <div className="flex flex-col gap-6 w-full min-w-0">
              
              {/* Bloco de Busca */}
              <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full">
                <h2 className="text-xl font-medium text-brand-dark mb-4 flex items-center gap-2">
                  <span className="text-gray-400">🔍</span> Encontre um local
                </h2>
                <BarraBusca 
                  bairroSelecionado={bairroSelecionado}
                  materialSelecionado={materialSelecionado}
                  onSelectBairro={(bairroId) => handleSelectBairro(bairroId)}
                  onSelectMaterial={(materialId) => handleSelectMaterial(materialId)}
                />
              </section>

              {/* Carrossel mostrando 2 cards por vez */}
              <section className="w-full min-w-0">
                {list.length === 0 ? (
                  <div className="text-center py-8 bg-white rounded-2xl border border-dashed border-gray-200">
                    <p className="text-gray-400 italic">Nenhum ponto encontrado.</p>
                  </div>
                ) : (
                  <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 w-full custom-scrollbar">
                    {list.map((ponto) => (
                      <div key={ponto.id} className="snap-center shrink-0 w-[calc(50%-8px)] bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                        <CardPontoColeta ponto={ponto} />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>

            {/* COLUNA DA DIREITA: Mapa Proporcional */}
            <section className="w-full h-[450px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 lg:sticky lg:top-6 z-0">
              <Map pontosColeta={list} />
            </section>

          </main>
        </div>
      </div>
    </div>
  )
}

export default App
