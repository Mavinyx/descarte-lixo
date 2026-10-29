import MateriaisData from '../data/materiais.json'
import type Materiais from '../types/index'
function BuscarResiduo(){
    const materiaisData: Materiais[] = MateriaisData as Materiais[];
    return(
        <>{materiaisData.map((material) => material.titulo).join(', ')}</>
    )
}
export default BuscarResiduo;   