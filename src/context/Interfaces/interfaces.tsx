export interface Item {
  _id: number;
  Vaga?: string;
  Local?: string;
  Url?: string;
}

export interface InfoContextProps {
  vagas: Item[];
  paginaAtual: number;
  // totalPaginas: number;
  contagem: number;
  paginaAtualFiltro: number;
  // totalPaginasFiltro: number;
  contagemFiltro: number;
  setPaginaAtual: React.Dispatch<React.SetStateAction<number>>; //(pagina: number) => void;
  setPaginaAtualFiltro: React.Dispatch<React.SetStateAction<number>>; //(paginaFiltro: number) =>  void;
  buscaVaga: (valor: string) => Promise<void>;
}