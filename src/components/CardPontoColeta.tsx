import type{ PontoColeta } from "../types/index.ts";

const imagens = import.meta.glob<string>("../assets/ecopontos/*", {
  eager: true,
  query: "?url",
  import: "default",
});

interface ICardPontoColetaProps {
  ponto: PontoColeta;
}

function CardPontoColeta({ ponto }: ICardPontoColetaProps) {
  return (
    <div className="card bg-base-100 shadow-xl m-2">
      <div className="card-body">
        <img src={imagens[ponto.urlImg]} alt={`Foto de ${ponto.nome}`} className="w-full h-48 object-cover" />
        <h2 className="card-title">{ponto.nome}</h2>
        <p>{ponto.endereco}</p>
        <p>{ponto.horarioFuncionamento}</p>
      </div>
    </div>
  );
}

export default CardPontoColeta;