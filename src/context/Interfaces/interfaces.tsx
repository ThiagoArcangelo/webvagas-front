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
  setPaginaAtual: (pagina: number) => void;
  buscaVaga: (valor: string) => void;
}