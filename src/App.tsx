import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import { Analytics } from "@vercel/analytics/react";
import { Header } from './components/header';
import { Tabela } from "./components/tabela";
import { Footer } from "./components/footer";
import { Sobre } from './pages/Sobre';
import { InfoVagasProvider } from './context/Context';
import { Excecao } from './components/excecao';
import { useContext } from 'react';
 import { InfoVagasContext } from './context/Context';
// import { Progress } from '@radix-ui/react-progress';

function App() {
  const { progresso } = useContext(InfoVagasContext);

  return (
    <div  className=" flex w-[100%] flex-col h-screen items-center">
      <div className="fixed w-[100%] h-[6px] bg-transparent ">
        <div className="h-[100%] bg-[yellow]"
        style={{ width: `${progresso}%` }}
        >          
        </div>
      </div>
      <Router>
        {/* <Analytics /> */}
        <InfoVagasProvider> 
          <div className="w-[100%] h-20">
            <Header />
          </div>                                
          <div className=" w-[100%]  flex justify-center  border-none mt-1">
            <div className="w-[68%] justify-center">
              <Routes>
                <Route path="/"  element={<Tabela />}/>
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Excecao" element={<Excecao />} />
              </Routes>
            </div>            
          </div>
        </InfoVagasProvider>
        <div className=" min-h-12 w-[100%] mt-auto">
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
