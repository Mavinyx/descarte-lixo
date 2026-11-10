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
    <div className="fieldset">
        <label htmlFor="select-bairro">Selecione um bairro: </label>
        <select id="select-bairro" className="select bg-custom-default w-[60%]" value={bairroSelecionado} onChange={handleBairroChange}>
        <option value="">Todos os bairros</option>
            {bairros.map((bairro) => (
                <option key={bairro.id} value={bairro.id}>
                    {bairro.nome}
                </option>
            ))}
        </select>
        <label htmlFor="select-material">Selecione um tipo de material:</label>
         <select id="select-material" className="select bg-custom-default w-[60%]" value={materialSelecionado} onChange={handleMaterialChange}>
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