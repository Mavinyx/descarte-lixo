import BairroData from "../data/bairros.json"
import type { Bairro, TipoColeta } from "../types/index.ts"
import CardColetaDom from "../components/CardColetaDom";
import { useState } from "react";
export default function ColetaDomiciliar(){
    const bairros: Bairro[] = BairroData as Bairro[];
    const [busca, setBusca] = useState("");
    const [sugestoes,setSugestoes] = useState(false);

    const [tipoColeta, setTipoColeta] = useState<TipoColeta>("seletiva");
    const bairrosFiltrados = bairros.filter((bairro)=>
        bairro.nome.toLowerCase().includes(busca.toLowerCase())
    )
    return (
        <div className=" flex flex-col w-[70%] items-end px-4 py-6">
            <h2>Coleta {tipoColeta === "seletiva" ? "Seletiva" : "Orgânica"}</h2>
            <label htmlFor="tipo-coleta">Tipo de coleta</label>
            <select
                id="tipo-coleta"
                value={tipoColeta}
                onChange={(event) => setTipoColeta(
                    event.target.value === "organica" ? "organica" : "seletiva"
                )}
                className="select select-bordered bg-base-100"
            >
                <option value="seletiva">Coleta seletiva</option>
                <option value="organica">Lixo orgânico</option>
            </select>
            <input 
                type="text" 
                placeholder="Digite o nome do seu Bairro"
                value={busca}
                onChange={(e)=>{
                    setBusca(e.target.value)}}
                onFocus={()=> setSugestoes(true)}
                className="input input-bordered  bg-base-100 border-custom-quaternary focus:outline-none focus:border-custom-primary"
            ></input>

            {sugestoes && busca.trim() !== "" && (
                <ul className="absolute z-10 overflow-y-auto bg-base-100/80">
                    {bairrosFiltrados.map((bairro)=>(
                        <li
                        key={bairro.id}
                        onClick={() =>{
                            setBusca(bairro.nome)
                            setSugestoes(false)
                        }}
                        >{bairro.nome}</li>
                    ))}
                </ul>
            )}
            <div className="grid sm:grid-cols-3 xl:grid-cols-3 gap-4 ">
            {bairrosFiltrados.length >0 ? (bairrosFiltrados.map((bairro)=>(
                <CardColetaDom key={bairro.id} bairro={bairro} tipoColeta={tipoColeta}/>
            ))
            ):(<p>nenhum encontrado</p>)}
            </div>
        </div>
    )
}
