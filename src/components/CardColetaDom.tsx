import type { Bairro } from "../types";
interface ICardeColetaDom{
    bairro :Bairro;
}
function CardColetaDom({bairro}: ICardeColetaDom){
    return(
        <div className="card">
            <div className="card-body border bg-custom-quaternary/80 rounded-box shadow-lg">
            <h2 className="text-xl font-semibold">{bairro.nome}</h2>
            <p>Turno:{bairro.turno}</p>
            </div>
        </div>
    )
}
export default CardColetaDom;