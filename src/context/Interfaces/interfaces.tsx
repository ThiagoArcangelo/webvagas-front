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
  contagem: number;
  setPaginaAtual: React.Dispatch<React.SetStateAction<number>>;//(pagina: number) => void;
  buscaVaga: (valor: string) => Promise<void>;
}