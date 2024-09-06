import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '@/services/api';
import { InfoContextProps, Item } from './Interfaces/interfaces';

export const infoVagasContext = createContext<InfoContextProps>({} as InfoContextProps);

export const InfoVagasProvider = ({ children }: { children: React.ReactNode }) => {

  const [dados, setDados] = useState<Item[]>([]);
  // const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);
  // const [totalPaginasFiltro, setTotalPaginasFiltro] = useState<number>(1);
  const [contagem, setContagem ] = useState<number>(0);
  const [paginaAtualFiltro, setPaginaAtualFiltro] = useState<number>(1);
  const [contagemFiltro, setContagemFiltro] = useState<number>(0);

  const [titulo, setTitulo] = useState("");

  const retornaVagas = useCallback(async () => {
    try {      
      const retorno = await api.get(`/lista?page=${paginaAtualFiltro}`);
      setDados(retorno.data.item);   
      // setTotalPaginas(retorno.data.totalPaginas);    
      setContagem(retorno.data.contagem);
    } catch (error) {
      console.log("Ocorreu algum erro.", error);
    }
  }, [paginaAtual]);

  const buscaVaga = useCallback( async (titulo: string) => {   
    const retorno = await api.get(`/lista/busca?page=${paginaAtualFiltro}&titulo=${titulo}`); 
    setDados(retorno.data.resultado);
    // console.log(retorno.data);
    setContagemFiltro(retorno.data.contagem)
    setPaginaAtualFiltro(retorno.data.page);
    setTitulo(titulo);
  },[titulo]);

  useEffect(() => {
    retornaVagas();
  }, [retornaVagas]);

  return (
    <infoVagasContext.Provider value={{vagas: dados, paginaAtual, setPaginaAtual,
                                       contagem,  buscaVaga, setPaginaAtualFiltro, 
                                       contagemFiltro, paginaAtualFiltro}}>
      {children}
    </infoVagasContext.Provider>
  );
};