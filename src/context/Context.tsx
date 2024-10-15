import React, { createContext, useCallback, useEffect, useState } from 'react';
import api from '@/services/api';
import { InfoContextProps, Item, VagasResponse } from './Interfaces/interfaces';

export const InfoVagasContext = createContext<InfoContextProps>({} as InfoContextProps);

export const InfoVagasProvider = ({ children }: { children: React.ReactNode }) => {
  const Empty = "";

  const [dados, setDados] = useState<Item[]>([]);
  const [paginaAtual, setPaginaAtual] = useState<number>(1); // Para listagem completa
  const [paginaAtualPesquisa, setPaginaAtualPesquisa] = useState<number>(1); // Para pesquisa
  const [contagem, setContagem] = useState<number>(0);
  const [titulo, setTitulo] = useState(Empty);
  const [limite, setLimite] = useState<number>(25);

  const retornaVagas = useCallback(async (valor: string = "", pagina: number) => {
    try {
      let retorno: VagasResponse;

      const url = valor === Empty 
        ? `/lista?page=${pagina}&limite=${limite}` 
        : `/lista/busca?page=${pagina}&titulo=${valor}&limite=${limite}`;

      const response = await api.get(url);
      retorno = response.data; 
            
      setDados(retorno.item);
      setContagem(retorno.contagem); 
      
      // console.log(retorno.Limit);
      console.log(retorno.contagem);
      
      setTitulo(valor);
      
      if(valor !== Empty)
        setPaginaAtualPesquisa(retorno.page)
      else
      setPaginaAtual(retorno.page);      
    
    if (valor === Empty) 
      setPaginaAtual(pagina);
    else 
    setPaginaAtualPesquisa(pagina);
      
    } catch (error) {
      console.log("Ocorreu algum erro.", error);
    }
  }, []); 

  useEffect(() => {
    retornaVagas(titulo, titulo === Empty ? paginaAtual : paginaAtualPesquisa);
  }, [retornaVagas, titulo, paginaAtual, paginaAtualPesquisa]);

  return (
    <InfoVagasContext.Provider value={{
      vagas: dados,
      paginaAtual,
      setPaginaAtual,
      paginaAtualPesquisa,
      setPaginaAtualPesquisa,
      contagem,
      titulo,
      setTitulo,
      // retornaVagas,
      setLimite,
      limite
    }}>
      {children}
    </InfoVagasContext.Provider>
  );
};

// export const ContextoPesquisa = ()  => {
//   return React.useContext(InfoVagasContext)
// }
