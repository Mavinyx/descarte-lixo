import BairroData from "../data/bairros.json"
import type { Bairro } from "../types/index.ts"
import CardColetaDom from "../components/CardColetaDom";
import { useState } from "react";
export default function ColetaDomiciliar(){
    const bairros: Bairro[] = BairroData;
    const [busca, setBusca] = useState("");
    const [sugestoes,setSugestoes] = useState(false);
    const bairrosFiltrados = bairros.filter((bairro)=>
        bairro.nome.toLowerCase().includes(busca.toLowerCase())
    )
    return (
        <div className=" flex flex-col w-[70%] items-end px-4 py-6">
            <h2>Consulte os Horários da Coleta Seletiva no seu Bairro</h2>
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
                <CardColetaDom bairro={bairro}/>
            ))
            ):(<p>nenhum encontrado</p>)}
            </div>
        </div>
    )
}
