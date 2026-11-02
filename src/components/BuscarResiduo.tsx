import MateriaisData from '../data/materiais.json'
import type Materiais from '../types/index'
function BuscarResiduo(){
    const materiaisData: Materiais[] = MateriaisData as Materiais[];
    return(
        <select className="select bg-custom-default w-full max-w-xs">
            {materiaisData.map((material) => (
                <option key={material.id} value={material.id}>
                    {material.titulo}
                </option>
            ))}
        </select>
    )
}
export default BuscarResiduo;   