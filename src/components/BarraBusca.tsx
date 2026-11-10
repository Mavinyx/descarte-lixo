import BairroData from "../data/bairros.json";
import type {Bairro}  from "../types/index.ts";
import MateriaisData from '../data/materiais.json'
import type {Material} from '../types/index'

interface IBarraBuscaProps {
    bairroSelecionado: string;
    materialSelecionado: string;
    onSelectBairro: (bairroId: string) => void;
    onSelectMaterial: (materialId: string) => void;
}

function BarraBusca({
    bairroSelecionado,
    materialSelecionado,
    onSelectBairro,
    onSelectMaterial,
}: IBarraBuscaProps) {
    const bairros: Bairro[] = BairroData as Bairro[];
    const materiaisData: Material[] = MateriaisData as Material[];

    const handleBairroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedBairroId = event.target.value;
        onSelectBairro(selectedBairroId);
    }
    const handleMaterialChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMaterialId = event.target.value;
        onSelectMaterial(selectedMaterialId);
    }
    
    return ( 
    /* 
      Ajustado para ocupar 100% da largura, dispor os seletores lado a lado 
      no computador (md:flex-row) e empilhados no celular (flex-col).
    */
    <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
        
       {/* Seletor de Bairros */}
       <select 
         className="select select-bordered bg-white text-brand-dark border-gray-200 w-full" 
         value={bairroSelecionado} 
         onChange={handleBairroChange}
       >
        <option value="">Todos os bairros</option>
        {bairros.map((bairro) => (
            <option key={bairro.id} value={bairro.id}>
                {bairro.nome}
            </option>
        ))}
        </select>

        {/* Seletor de Materiais (Corrigido de w-l para w-full) */}
        <select 
          className="select select-bordered bg-white text-brand-dark border-gray-200 w-full" 
          value={materialSelecionado} 
          onChange={handleMaterialChange}
        >
            <option value="">Todos os materiais</option>
            {materiaisData.map((material) => (
                <option key={material.id} value={material.id}>
                    {material.titulo}
                </option>
            ))}
        </select>
    </div>
    )
}
export default BarraBusca;
