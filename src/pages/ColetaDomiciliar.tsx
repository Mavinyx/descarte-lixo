import BairroData from "../data/bairros.json"
import type { Bairro } from "../types/index.ts"
import CardColetaDom from "../components/CardColetaDom";
export default function ColetaDomiciliar(){
    const bairros: Bairro[] = BairroData;
    return (
        <div className="flex w-full justify-center  px-4 py-6">
            <h2>Consulte os Horários da Coleta Seletiva no seu Bairro</h2>
            <div className="grid sm:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {bairros.map((bairro)=>(
                <CardColetaDom bairro={bairro}/>
            ))}
            </div>
        </div>
    )
}
