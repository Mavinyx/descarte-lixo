export interface Bairro{
    id: string;
    nome: string;
    regiao: string;
}
export interface Material{
    id: string;
    titulo: string;
    keywords: string[];
    origem: string;
    composicao: string;
    corLixeira: string;
    corHex: string;
    orientacao: string;
}
export interface PontoColeta{
    id: string;
    nome: string;
    endereco: string;
    bairro: string;
    bairrosProximos: string[];
    materiaisAceitos: string[];
    horarioFuncionamento: string;
    latitude: number;
    longitude: number;
}