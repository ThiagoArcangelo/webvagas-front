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
import { Paginacao } from "./paginacao"
import api from "@/services/api";

interface Item {
  _id: number;
  Vaga?: string;
  Local?: string;
  Url?: string;
}

export function Tabela() {
  const [dados, setDados ] = useState<Array<Item>>([]);

  function retornaDados()  {
    api.get("/lista")
      .then((response) => {console.log(response.data); setDados(response.data.item)})
      .catch((err) => console.log("Ocorreu algum erro.", err));
  }

  useEffect(() => {
    retornaDados();
  }, []) 

  if(!dados) return null;

  return (
    <div className="min-w-96" >
      <div className="border-none"> 
        <Table className="table-fixed border-none">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader className="boder-none">
            <TableRow className="border-none gap-2">
              {/* <TableHead className="w-[100px]">#</TableHead> */}
              <TableHead className="border-none">Vagas</TableHead>
              <TableHead className="border-none">Cidade</TableHead>
              <TableHead>Saiba Mais</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="boder-none">
            {dados.map((item) => ( 
              <TableRow className="border-none" key={item._id}>
                {/* <TableCell className="font-medium">{item._id}</TableCell> */}
                <TableCell className="font-medium color-[#1f2328] border-b-[1px] border-solid border-[#dadada]">{item.Vaga}</TableCell>
                <TableCell className="text-[#6e7781] hover:text-[2222ff#] border-b-[1px] border-solid border-[#dadada]">{item.Local}</TableCell>
                <TableCell className=" w-10 font-medium text-[#2222ff]  cursor-pointer transition ease-in-out delay-100 hover:scale-95  duration-300 border-b-[1px] border-solid border-[#dadada]">
                  <a href={item.Url} target="blank">
                    Saiba Mais
                  </a>
                </TableCell>
              </TableRow>
            ))}     
          </TableBody>
        </Table>
      </div> 
      <div className="w-auto m-8 flex justify-start border-b-2 border-solid border-[#ddd]">
        < Paginacao />
      </div>
  </div>  
  )
}