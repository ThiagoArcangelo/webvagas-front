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
    <div className="w-[80%] h-[80%]" >
      <div className="border-none "> 
        <Table className="border-none w-[100%]">
          <TableHeader className="boder-none">
            <TableRow className="w-[50%] border-none gap-2">
              <TableHead className="border-none"></TableHead>
              <TableHead className="w-[400px] ml-14 border-none"></TableHead>
              <TableHead className="w-[90px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="boder-none">
            {dados.map((item) => ( 
              <TableRow className="border-none" key={item._id}>
                <TableCell className="font-medium color-[#1f2328] border-b-[1px] border-solid border-[#dadada] px-2">{item.Vaga}</TableCell>
                <TableCell className="text-left text  text-[#6e7781] hover:text-[2222ff#] border-b-[1px] border-solid
                 border-[#dadada] px-2 text-xs">{item.Local
                }</TableCell>
                <TableCell className="font-medium text-[#2222ff]  cursor-pointer transition ease-in-out delay-100 hover:scale-95 
                 duration-300 border-b-[1px] border-solid border-[#dadada]px-2 ">
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
      <div className=" h-[10%] w-[100%] mt-5 flex justify-end">      
      <Pagination className="flex justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={paginaAnterior} aria-disabled={paginaAtual < 1} href="#"  className="hover:bg-gray-200 px-2 py-2 hover:rounded w-24 cursor-pointer"  />
            </PaginationItem>         
            <PaginationItem>
              <PaginationNext onClick={proximaPagina} aria-disabled={paginaAtual === totalPaginas} href="#"  className="hover:bg-gray-200 px-2 py-2 hover:rounded w-24 cursor-pointer"  />
            </PaginationItem>
          </PaginationContent>
        </Pagination>        
      </div>
    </div>  
  )
}