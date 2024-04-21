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
    <div className="min-w-40" >
      <div > 
        <Table className="table-auto">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[100px]">#</TableHead> */}
              <TableHead className="w-auto ">Vagas</TableHead>
              <TableHead>Cidade</TableHead>
              <TableHead>Saiba Mais</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dados.map((item) => ( 
              <TableRow key={item._id}>
                {/* <TableCell className="font-medium">{item._id}</TableCell> */}
                <TableCell className="font-medium">{item.Vaga}</TableCell>
                <TableCell>{item.Local}</TableCell>
                <TableCell><a href={item.Url} target="blank">Saiba Mais</a></TableCell>
              </TableRow>
            ))}     
          </TableBody>
        </Table>
      </div> 
    < Paginacao />
  </div>  
  )
}