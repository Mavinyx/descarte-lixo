import type{ PontoColeta } from "../types/index.ts";
interface ICardPontoColetaProps {
  ponto: PontoColeta;
}

function CardPontoColeta({ ponto }: ICardPontoColetaProps) {
  return (
    <div className="card bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <h2 className="card-title">{ponto.nome}</h2>
        <p>{ponto.endereco}</p>
        <p>{ponto.horarioFuncionamento}</p>
      </div>
    </div>
  );
}

export default CardPontoColeta;