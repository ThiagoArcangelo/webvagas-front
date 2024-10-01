//#region Comentado
// import { Search } from "lucide-react";
// import { useContext, useState } from "react";
// import { infoVagasContext } from "@/context/Context";
// import { Link } from "react-router-dom";
// import logo from "../../public/assets/logo.png"

// export function Header(){
//   const { setTitulo, retornaVagas } = useContext(infoVagasContext);
//   const [titulo, setPesquisa] = useState("");
//   const Empty = "";

//   const valorTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {    
//     setValorTitulo(e.target.value);
//   }

//   const buscarComEnter = (event: { key: string; }) => {
//     if(event.key == 'Enter'){
//         retornaPesquisa();         
//     }
//   }

//     const retornaPesquisa = () => {
//       if(setTitulo != undefined){
//         setTitulo(titulo);
//         retornaVagas(titulo);
//       }      
//     }

//     const LimpaPesquisa = () => {
//         setValorTitulo(Empty);      
//         retornaVagas(Empty);     
//     }

//   return (
//     <div className="flex items-center justify-between min-h-1  h-20 gap-4 bg-[#14192f]">
//       <div className="flex gap-4 ml-10">
//         <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded cursor-pointer ">
//           <Link to="/" onClick={LimpaPesquisa} className="font-semibold">Vagas</Link>
//         </div>
//         <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded  cursor-pointer">
//           <Link to="/Sobre" className="font-semibold">Sobre</Link>
//         </div>     
//       </div> 
//       <div className="w-52 h-10 flex justify-center items-center">
//         <Link to="/" onClick={LimpaPesquisa} ><img src={logo} alt="BuscaEmpregos-Bauru" /></Link>
//       </div>
//       <div className="w-[30%] flex mr-14">
//         <input 
//           type="text "  
//           className="w-[87%] text-gray-950  bg-[#FFF] border-solid border-2 border-white  border-r-0
//           rounded-l-[8px] px-2 outline-none  " 
//           value={titulo}
//           onChange={valorTitulo}
//           onKeyDown={buscarComEnter}
//         />  
//         <Link to="/" onClick={() => retornaPesquisa} className="bg-slate-300 w-[13%] flex justify-center items-center border-solid border-2 border-white outline-none border-l-0
//          rounded-r-[8px]   hover:bg-slate-200 px-2 opacity-60  ml-0 cursor-pointer ">
//           <Search color="black" size={17} />
//         </Link>  
//       </div>  
//     </div>
//   ) 
// }
//#endregion

//#region Comentado - Retorna Vagas
// import { Search } from "lucide-react";
// import { /*useContext,*/ useState } from "react";
// // import { infoVagasContext } from "@/context/Context";
// import { Link } from "react-router-dom";
// import logo from "../../public/assets/logo.png"

// type txtProps = {
//   texto: string;
// }

// export function Header({texto}: txtProps) {
//   // const { setTitulo, retornaVagas, setPaginaAtual, setPaginaAtualPesquisa, paginaAtual } = useContext(infoVagasContext);
//   const [titulo, setValorTitulo] = useState("");
//   const paginaPesquisa = 1;

//   const valorTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValorTitulo(e.target.value);
//   }

//   const buscarComEnter = (event: { key: string; }) => {
//     if (event.key === 'Enter') {
//       retornaPesquisa();
//     }
//   }

//   const retornaPesquisa = () => {
//     setPaginaAtualPesquisa(paginaPesquisa);  
//     setTitulo(titulo);
//     retornaVagas(titulo, paginaPesquisa);
//   }

//   const LimpaPesquisa = () => {
//     setValorTitulo("");
//     setTitulo("");
//     setPaginaAtual(paginaAtual);  // Resetar página da lista completa para 1
//     setPaginaAtualPesquisa(paginaAtual); // Resetar página da pesquisa para 1
//   }

//   return (
//     <div className="flex items-center justify-between min-h-1  h-20 gap-4 bg-[#14192f]">
//       <div className="flex gap-4 ml-10">
//         <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded cursor-pointer ">
//           <Link to="/" onClick={LimpaPesquisa} className="font-semibold">Vagas</Link>
//         </div>
//         <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded  cursor-pointer">
//           <Link to="/Sobre" className="font-semibold">Sobre</Link>
//         </div>     
//       </div> 
//       <div className="w-52 h-10 flex justify-center items-center">
//         <Link to="/" onClick={LimpaPesquisa} ><img src={logo} alt="BuscaEmpregos-Bauru" /></Link>
//       </div>
//       <div className="w-[30%] flex mr-14">
//         <input 
//           type="text"
//           className="w-[87%] text-gray-950  bg-[#FFF] border-solid border-2 border-white  border-r-0
//                      rounded-l-[8px] px-2 outline-none  " 
//           value={titulo}
//           onChange={valorTitulo}
//           onKeyDown={buscarComEnter}
//         />  
//         <Link to="/" onClick={retornaPesquisa} className="bg-slate-300 w-[13%] flex justify-center items-center border-solid border-2 border-white outline-none border-l-0
//                                                          rounded-r-[8px]   hover:bg-slate-200 px-2 opacity-60  ml-0 cursor-pointer ">
//           <Search color="black" size={17} />
//         </Link>  
//       </div>  
//     </div>
//   ) 
// }
//#endregion

import { Search } from "lucide-react";
import { useState } from "react";
import { ContextoPesquisa } from "@/context/Context";
import { Link } from "react-router-dom";
import logo from "../../public/assets/logo.png"

export function Header() {
  const {setTitulo} = ContextoPesquisa();
  const [vPesquisa, setPesquisa] = useState("");
  // const paginaPesquisa = 1;

  const valorTitulo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(e.target.value);
  }

  const buscarComEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      retornaPesquisa();
    }
  }

  const retornaPesquisa = () => {
      setTitulo(vPesquisa)
  }

  const LimpaPesquisa = () => {
    setPesquisa("");
    setTitulo(vPesquisa);
  }

  return (
    <div className="flex items-center justify-between min-h-1  h-20 gap-4 bg-[#14192f]">
      <div className="flex gap-4 ml-10">
        <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded cursor-pointer ">
          <Link to="/" onClick={LimpaPesquisa} className="font-semibold">Vagas</Link>
        </div>
        <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded  cursor-pointer">
          <Link to="/Sobre" className="font-semibold">Sobre</Link>
        </div>     
      </div> 
      <div className="w-52 h-10 flex justify-center items-center">
        <Link to="/" onClick={LimpaPesquisa} ><img src={logo} alt="BuscaEmpregos-Bauru" /></Link>
      </div>
      <div className="w-[30%] flex mr-14">
        <input           
          className="w-[87%] text-gray-950  bg-[#FFF] border-solid border-2 border-white  border-r-0 rounded-l-[8px] px-2 outline-none" 
          type="text"
          value={vPesquisa}
          onChange={valorTitulo}
          onKeyDown={buscarComEnter}
        />  
        <Link to="/" onClick={retornaPesquisa} className="bg-slate-300 w-[13%] flex justify-center items-center border-solid border-2 border-white outline-none border-l-0
                                                         rounded-r-[8px]   hover:bg-slate-200 px-2 opacity-60  ml-0 cursor-pointer ">
          <Search color="black" size={17} />
        </Link>  
      </div>  
    </div>
  ) 
}
