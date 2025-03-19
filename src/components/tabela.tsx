import { useContext} from "react";
import { InfoVagasContext } from "@/context/Context";
import { useNavigate } from "react-router-dom";

import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  // PaginationLink,
  // PaginationNext,
  // PaginationPrevious,
} from "@/components/ui/pagination"

// import api from "@/services/api";
import { Button } from "./ui/button";
import { Item } from "@/context/Interfaces/interfaces";

export function Tabela() {
  const {vagas: dados, setPaginaAtual, paginaAtual, contagem, titulo, setPaginaAtualPesquisa, paginaAtualPesquisa} = useContext(InfoVagasContext);
 const valorLimite = 25;
  const total = Math.ceil(contagem / valorLimite);
  const navigate = useNavigate();

  const proximaPagina = () => {
    if (titulo === "") {
      if (paginaAtual <= total) {
        setPaginaAtual(paginaAtual => paginaAtual + 1);
        window.scrollTo(0,0);
      }
      
    } else {
      if (paginaAtualPesquisa < total) {
        setPaginaAtualPesquisa(paginaAtualPesquisa => paginaAtualPesquisa + 1);
        window.scrollTo(-5,0);
      }
    }
  };

  const paginaAnterior = () => {
      if(titulo == ""){
        setPaginaAtual(pagAnterior => pagAnterior - 1);
      }
      else{
        setPaginaAtualPesquisa(pagAnterior => pagAnterior - 1);
      }   
  };

  if (!dados || dados.length === 0) { navigate("/Excecao"); }

  return (
    <div >
      <div className="border-none flex flex-col justify-between "> 
        <Table className="border-none flex-1">
          <TableHeader className="boder-none  ">
            <TableRow className=" border-none ">
              <TableHead className="border-none w-[440px]"></TableHead>
              <TableHead className=" ml-14 border-none w-[180px]  "></TableHead>
              <TableHead className="border-none w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="boder-none">
            {dados.map((item: Item) => ( 
              <TableRow className="border-none h-10" key={item._id}>

                <TableCell className= "text-left font-medium color-[#1f2328] border-b-[1px] border-solid border-[#dadada] px-2">
                  {item.Vaga ? (item.Vaga.length >= 50 ? item.Vaga?.slice(0, 45) : item.Vaga) : "N/A"}
                </TableCell>

                <TableCell className="text-left text-[#6e7781] hover:text-[2222ff#] border-b-[1px] border-solid
                 border-[#dadada] px-0 text-xs mr-10">{item.Local || "N/A"}
                 </TableCell>

                <TableCell className="text-right  font-medium text-[#2222ff]  cursor-pointer transition ease-in-out delay-100 hover:scale-95 
                 duration-300 border-b-[1px] border-solid border-[#dadada]">
                  <a href={item.Url} target="blank">
                    Saiba Mais
                  </a>
                </TableCell>

              </TableRow>
            ))}     
          </TableBody>
        </Table>
      </div> 
      {/* Paginação*/}       
      <div className=" h-[10vh] w-[100%] mt-1 flex justify-end">      
      <Pagination className="flex justify-end">
          <PaginationContent>
            <PaginationItem>
              <Button onClick={paginaAnterior} disabled={titulo == "" ? (paginaAtual <= 1) : (paginaAtualPesquisa <= 1)}  className="hover:bg-gray-200 px-2 py-2 hover:rounded w-24
               cursor-pointer text-[12px]" 
             >
              Anterior
            </Button> 
            </PaginationItem>      
            <div className="px-4 py-2 text-[12px]">{`Página ${titulo == "" ? paginaAtual : paginaAtualPesquisa} de ${total}`}</div>   
            <PaginationItem>
              <Button  onClick={proximaPagina}  disabled={(paginaAtual === total) || (titulo !== "" && paginaAtualPesquisa === total)} className="hover:bg-gray-200 px-4 py-2
               hover:rounded w-24 cursor-pointer text-[12px]" 
              >
                Próxima
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>        
      </div>
    </div>  
  )
}