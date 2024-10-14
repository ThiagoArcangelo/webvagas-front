//#region Comentado
// import React, { createContext, useCallback, useEffect, useState } from 'react';
// import api from '@/services/api';
// import { InfoContextProps, Item } from './Interfaces/interfaces';

// export const InfoVagasContext = createContext<InfoContextProps>({} as InfoContextProps);

// export const InfoVagasProvider = ({ children }: { children: React.ReactNode }) => {

//   const Empty = "";

//   const [dados, setDados] = useState<Item[]>([]);
//   const [paginaAtual, setPaginaAtual] = useState<number>(1);
//   const [contagem, setContagem] = useState<number>(0);
//   const [titulo, setTitulo] = useState(Empty);

//   const retornaVagas = useCallback(async (titulo: string) => {
//     try {
//       let retorno;

//       if(titulo === Empty){
//         retorno = await api.get(`/lista?page=${paginaAtual}`);    
//         setPaginaAtual(retorno.data.page);
//       }
//       else {
//         retorno = await api.get(`/lista/busca?page=${paginaAtual}&titulo=${titulo}`);
//         setPaginaAtual(retorno.data.page);
//       }

//       setDados(retorno.data.item);
//       setContagem(retorno.data.contagem);
//       // setPaginaAtual(retorno.data.page);

//       if(setTitulo)
//         setTitulo(titulo);
      
//     } catch (error) {
//       console.log("Ocorreu algum erro.", error);
//     }
//   }, [paginaAtual, titulo]);

//   // const buscaVaga = useCallback(async (titulo: string) => {
//   //   try {
//   //     const retorno = await api.get(`/lista/busca?page=${paginaAtualFiltro}&titulo=${titulo}`);
//   //     setDadosFiltro(retorno.data.resultado);
//   //     setContagemFiltro(retorno.data.contagemPesquisa);
//   //     setPaginaAtualFiltro(retorno.data.page);
//   //     setTitulo(titulo);
//   //   } catch (error) {
//   //     console.log("Ocorreu algum erro na busca.", error);
//   //   }
//   // }, [paginaAtualFiltro]);

//   useEffect(() => {
//       retornaVagas(titulo);
//   }, [retornaVagas, titulo]);
//   // }, [retornaVagas, buscaVaga, titulo]);

//   return (
//     <InfoVagasContext.Provider value={{
//       vagas: dados,
//       paginaAtual,
//       setPaginaAtual,
//       contagem,
//       titulo,
//       setTitulo,
//       retornaVagas
//     }}>
//       {children}
//     </InfoVagasContext.Provider>
//   );
// };


// /*
// export const InfoVagasProvider = ({ children }: { children: React.ReactNode }) => {

//   const [dados, setDados] = useState<Item[]>([]);
//   // const [totalPaginas, setTotalPaginas] = useState<number>(1);
//   const [paginaAtual, setPaginaAtual] = useState<number>(1);
//   // const [totalPaginasFiltro, setTotalPaginasFiltro] = useState<number>(1);
//   const [contagem, setContagem ] = useState<number>(0);
//   const [paginaAtualFiltro, setPaginaAtualFiltro] = useState<number>(1);
//   const [contagemFiltro, setContagemFiltro] = useState<number>(0);

//   const [titulo, setTitulo] = useState("");

//   const retornaVagas = useCallback(async () => {
//     try {      
//       const retorno = await api.get(`/lista?page=${paginaAtualFiltro}`);
//       setDados(retorno.data.item);   
//       // setTotalPaginas(retorno.data.totalPaginas);    
//       setContagem(retorno.data.contagem);
//     } catch (error) {
//       console.log("Ocorreu algum erro.", error);
//     }
//   }, [paginaAtual]);

//   const buscaVaga = useCallback( async (titulo: string) => {   
//     const retorno = await api.get(`/lista/busca?page=${paginaAtualFiltro}&titulo=${titulo}`); 
//     setDados(retorno.data.resultado);
//     // console.log(retorno.data);
//     setContagemFiltro(retorno.data.contagemPesquisa)
//     setPaginaAtualFiltro(retorno.data.page);
//     setTitulo(titulo);
//   },[paginaAtualFiltro, titulo]);

//   useEffect(() => {
//     if(titulo != "")
//       buscaVaga(titulo);
//     else
//     retornaVagas();
//   }, [retornaVagas, buscaVaga]);


//   return (
//     <InfoVagasContext.Provider value={{
//       vagas: dados, 
//       paginaAtual, 
//       setPaginaAtual,
//       contagem,  
//       buscaVaga, 
//       setPaginaAtualFiltro, 
//       contagemFiltro, 
//       paginaAtualFiltro}}>
//       {children}
//     </InfoVagasContext.Provider>
//   );
// };*/
//#endregion


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
  const [limite, setLimite] = useState<number>(0);

  const retornaVagas = useCallback(async (titulo: string, pagina: number) => {
    try {
      let retorno: VagasResponse;

      const url = titulo === Empty 
        ? `/lista?page=${paginaAtual}&${limite}` 
        : `/lista/busca?page=${paginaAtualPesquisa}&titulo=${titulo}&${limite}`;

      const response = await api.get(url);
      retorno = response.data; 

      setDados(retorno.item);
      
      if(titulo !== Empty)
        setPaginaAtualPesquisa(retorno.page)
      else
        setPaginaAtual(retorno.page);
      
      setContagem(retorno.contagem); 
      
      if (titulo === Empty) {
        setPaginaAtual(pagina);
      } else {
        setPaginaAtualPesquisa(pagina);
        // setTitulo(valor);
      }
    } catch (error) {
      console.log("Ocorreu algum erro.", error);
    }
  }, [paginaAtual, titulo]); 

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
      setLimite
    }}>
      {children}
    </InfoVagasContext.Provider>
  );
};

// export const ContextoPesquisa = ()  => {
//   return React.useContext(InfoVagasContext)
// }
