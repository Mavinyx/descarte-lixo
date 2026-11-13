export type DiaSemana = "Seg" | "Ter" | "Qua" | "Qui" | "Sex" | "Sáb";
export type TipoColeta = "seletiva" | "organica";
export interface Bairro {
    id: string;
    nome: string;
    regiao: string;

    diasSeletiva: DiaSemana[];
    diasOrganica: DiaSemana[];

    turnoSeletiva: {
        Seg?: string[];
        Ter?: string[];
        Qua?: string[];
        Qui?: string[];
        Sex?: string[];
        Sáb?: string[];
    };

    turnoOrganica: {
        Seg?: string[];
        Ter?: string[];
        Qua?: string[];
        Qui?: string[];
        Sex?: string[];
        Sáb?: string[];
    };
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
    urlImg: string;
}