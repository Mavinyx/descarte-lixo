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
    <div className="fieldset bg-base-100 border-base-300 rounded-box w-xs border p-4">
       <select className="select bg-custom-default w-full max-w-xs" value={bairroSelecionado} onChange={handleBairroChange}>
        <option value="">Todos os bairros</option>
        {bairros.map((bairro) => (
            <option key={bairro.id} value={bairro.id}>
                {bairro.nome}
            </option>
        ))}
        </select>
          <select className="select bg-custom-default w-l max-w-xs" value={materialSelecionado} onChange={handleMaterialChange}>
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