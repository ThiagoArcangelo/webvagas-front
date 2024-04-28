import { useEffect, useState } from "react";
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
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"



import api from "@/services/api";
import { Button } from "./ui/button";

interface Item {
  _id: number;
  Vaga?: string;
  Local?: string;
  Url?: string;
}

export function Tabela() {
  const [dados, setDados ] = useState<Array<Item>>([]);
  const [totalPaginas, setTotalPaginas] = useState<number>(1);
  const [paginaAtual, setPaginaAtual] = useState<number>(1);

  function retornaDados()  {
    api.get(`/lista?page=${paginaAtual}`)
      .then((response) => {console.log(response.data);
        setDados(response.data.item);                  
      
         const paginasTotais = Math.ceil(response.data.contagem/ 10);  
        
        setTotalPaginas(paginasTotais);
    
      })
      .catch((err) => console.log("Ocorreu algum erro.", err));
  }

  useEffect(() => {
    retornaDados();
  },[paginaAtual])  

  const proximaPagina = () => {
    setPaginaAtual(proxPagina => proxPagina + 1);
  };

  const paginaAnterior = () => {
    setPaginaAtual(pagAnterior => pagAnterior - 1);
  };


  if(!dados) return null;

  return (
    <div className="w-[80%]" >
      <div className="border-none flex justify-between "> 
        <Table className="border-none h-[65vh] ">
          <TableHeader className="boder-none">
            <TableRow className=" border-none gap-2">
              <TableHead className="border-none mr-0 "></TableHead>
              <TableHead className=" ml-14 border-none mr-0"></TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="boder-none">
            {dados.map((item) => ( 
              <TableRow className="border-none " key={item._id}>

                <TableCell className= "text-left w-[440px] font-medium color-[#1f2328] border-b-[1px] border-solid border-[#dadada] px-2">{item.Vaga}</TableCell>

                <TableCell className="text-left  text-[#6e7781] hover:text-[2222ff#] border-b-[1px] border-solid
                 border-[#dadada] px-0 text-xs mr-10">{item.Local
                }</TableCell>

                <TableCell className="text-right font-medium text-[#2222ff]  cursor-pointer transition ease-in-out delay-100 hover:scale-95 
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
              <Button onClick={paginaAnterior} disabled={paginaAtual <= 1}  className="hover:bg-gray-200 px-2 py-2 hover:rounded w-24
               cursor-pointer" 
             >
              Anterior
            </Button> 
            </PaginationItem>         
            <PaginationItem>
              <Button  onClick={proximaPagina} disabled={paginaAtual === totalPaginas}  className="hover:bg-gray-200 px-2 py-2
               hover:rounded w-24 cursor-pointer" 
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