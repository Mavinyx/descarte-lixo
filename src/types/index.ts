export interface Bairro{
    id: string;
    nome: string;
    regiao: string;
}
export default interface Material{
    id: string;
    titulo: string;
    keywords: string[];
    origem: string;
    composicao: string;
    corLixeira: string;
    corHex: string;
    orientacao: string;
}