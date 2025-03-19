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
  const [progresso , setProgresso] = useState<number>(0);
  
  const retornaVagas = useCallback(async (valor: string = "", pagina: number) => {
    try {
      let retorno: VagasResponse;

      setProgresso(0);

      const url = valor === Empty 
        ? `/lista?page=${pagina}&limite=${limite}` 
        : `/lista/busca?page=${pagina}&titulo=${valor}&limite=${limite}`;

      const response = await api.get(url, {
        onDownloadProgress: (evento) => {
          console.log(evento);
          if(evento.bytes > 1)
            setProgresso(Math.round(evento.event.timeStamp / 100 * 4));
        }
      });

      retorno = response.data; 
            
      setDados(retorno.item);
      setContagem(retorno.contagem); 

      // #region PROGRESS BAR NO CARREGAMENTO DA PAGINAÇÃO
    const aguarde: boolean = pagina != paginaAtual || paginaAtualPesquisa  ? true : false;

    aguarde == true 
    ? setProgresso(100)
    : setProgresso(0);
    // #endregion
      
      setTitulo(valor);
      
      if(valor !== Empty)
        setPaginaAtualPesquisa(retorno.page)
      else
      setPaginaAtual(retorno.page);      
    
    if (valor === Empty) 
      setPaginaAtual(pagina);
    else 
    setPaginaAtualPesquisa(pagina);  

    setProgresso(0);
      
    } catch (error) {
      console.log("Ocorreu algum erro.", error);
      setProgresso(0);
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
      limite,
      progresso
    }}>
      {children}
    </InfoVagasContext.Provider>
  );
};
