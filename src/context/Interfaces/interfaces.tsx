//#region Interface Comentada

// export interface Item {
//   _id: number;
//   Vaga?: string;
//   Local?: string;
//   Url?: string;
// }

// export interface InfoContextProps {
//   vagas: Item[];
//   paginaAtual: number;
//   contagem: number;
//   titulo?: string;
//   // setTitulo: React.Dispatch<React.SetStateAction<string>>;
//   setTitulo?: (titulo: string) => void;
//    setPaginaAtual: React.Dispatch<React.SetStateAction<number>>; //(pagina: number) => void;
//    retornaVagas: (titulo: string) => void;
// }

//#endregion

import { Dispatch, SetStateAction } from 'react';

export interface Item {
  _id: string;
  Vaga?: string;
  Local?: string;
  Url?: string;
  // Adicione outros campos conforme necessário
}

export interface VagasResponse {
  item: Item[];
  page: number; 
  contagem: number;
}

export interface InfoContextProps {
  vagas: Item[];
  paginaAtual: number; // Número atual da página em uso
  setPaginaAtual: Dispatch<SetStateAction<number>>; // Função Setter para paginação do conteúdo completo
  paginaAtualPesquisa: number; // Pagina atual da pesquisa
  setPaginaAtualPesquisa: Dispatch<SetStateAction<number>>; // Função Setter para paginação do conteúdo pesquisado
  contagem: number; // Total de vagas
  titulo: string; // Título da pesquisa
  setTitulo: Dispatch<SetStateAction<string>>;
  // retornaVagas: (valor: string, pagina: number) => void; // Função para buscar vagas
  setLimite: (valor: number) => void; // Define o valor de limit no skip da url
}