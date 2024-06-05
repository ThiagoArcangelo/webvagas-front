import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '@/services/api';
import { Item } from '@/components/tabela';

interface InfoContextProps {
  vagas: Item[];
  totalPaginas: number;
  paginaAtual: number;
  setPaginaAtual: (pagina: number) => void;
  titulo: string;
  setTitulo: (titulo: string) => void;
}

export const infoVagasContext = createContext<InfoContextProps>({} as InfoContextProps);

export const InfoVagasProvider = ({ children }: { children: React.ReactNode }) => {
  const [dados, setDados] = useState<Item[]>([]);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);

  const [titulo, setTitulo] = useState("");

  const retornaVagas = useCallback(async () => {
    try {
      const retorno = await api.get(`/lista?page=${paginaAtual}`);
      setDados(retorno.data.item);   
      setTotalPaginas(retorno.data.totalPaginas);         
    } catch (error) {
      console.log("Ocorreu algum erro.", error);
    }
  }, [paginaAtual]);

  useEffect(() => {
    retornaVagas();
  }, [retornaVagas]);

  const buscaVaga = useCallback( async () => {
    const retorno = await api.get("/lista/busca");
    setTitulo(retorno.data.titulo);
  },[titulo]);

  return (
    <infoVagasContext.Provider value={{vagas: dados, totalPaginas, paginaAtual, setPaginaAtual, titulo, setTitulo }}>
      {children}
    </infoVagasContext.Provider>
  );
};