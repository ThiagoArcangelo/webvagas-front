export interface Item {
  _id: number;
  Vaga?: string;
  Local?: string;
  Url?: string;
}

export interface InfoContextProps {
  vagas: Item[];
  totalPaginas: number;
  paginaAtual: number;
  paginaFiltro: number;
  contagem: number;
  setPaginaAtual: React.Dispatch<React.SetStateAction<number>>;//(pagina: number) => void;
  setPaginaFiltro: React.Dispatch<React.SetStateAction<number>>;//(paginaFiltro: number) =>  void;
  buscaVaga: (valor: string) => Promise<void>;
}