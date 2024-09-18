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

/////////////////////////////////////////////

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
  paginaAtual: number; // Página atual para listagem completa
  setPaginaAtual: Dispatch<SetStateAction<number>>;
  paginaAtualPesquisa: number; // Página atual para pesquisa
  setPaginaAtualPesquisa: Dispatch<SetStateAction<number>>;
  contagem: number; // Total de itens ou vagas (dependendo da implementação)
  titulo: string; // Título da pesquisa
  setTitulo: Dispatch<SetStateAction<string>>;
  retornaVagas: (valor: string, pagina: number) => void; // Função para buscar vagas
  setLimite: (valor: number) => void;
}