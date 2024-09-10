export interface Item {
  _id: number;
  Vaga?: string;
  Local?: string;
  Url?: string;
}

export interface InfoContextProps {
  vagas: Item[];
  paginaAtual: number;
  contagem: number;
  titulo?: string;
  // setTitulo: React.Dispatch<React.SetStateAction<string>>;
  setTitulo?: (titulo: string) => void;
   setPaginaAtual: React.Dispatch<React.SetStateAction<number>>; //(pagina: number) => void;
   retornaVagas: (titulo: string) => void;
}