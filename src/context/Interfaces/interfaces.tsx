
import { Dispatch, ReactNode, SetStateAction } from 'react';

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
  limite: number;
}

export interface InfoContextProps {
  vagas: Item[];
  paginaAtual: number; // Número atual da página em uso
  paginaAtualPesquisa: number; // Pagina atual da pesquisa
  setPaginaAtual: Dispatch<SetStateAction<number>>; // Função Setter para paginação do conteúdo completo
  setPaginaAtualPesquisa: Dispatch<SetStateAction<number>>; // Função Setter para paginação do conteúdo pesquisado
  contagem: number; // Total de vagas
  titulo: string; // Título da pesquisa
  setTitulo: Dispatch<SetStateAction<string>>;
  // retornaVagas: (valor: string, pagina: number) => void; // Função para buscar vagas
  setLimite: Dispatch<SetStateAction<number>>; // Define o valor de limit no skip da url
  limite: number;
  progresso: number;
  // loading: boolean;
}

export interface LoaderContext {
  children: ReactNode;
}