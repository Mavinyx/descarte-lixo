import BairroData from "../data/bairros.json";
import type Bairro  from "../types/index.ts";
function BuscarBairro() {
    const bairros: Bairro[] = BairroData as Bairro[];
return (
    <select>
        {bairros.map((bairro) => (
            <option key={bairro.id} value={bairro.id}>
                {bairro.nome}
            </option>
        ))}
    </select>
)
}

export default BuscarBairro;