import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import { Header } from './components/header';
import { Tabela } from "./components/tabela";
import { Footer } from "./components/footer";
import { Sobre } from './pages/Sobre';
import { InfoVagasProvider } from './context/Context';
import { Excecao } from './components/excecao';

function App() {

  return (
    <Router>
      <div className=" flex w-[100%] flex-col h-screen min-h-[100%] justify-between">
        <Analytics />
        <InfoVagasProvider> 
          <div className="h-20">
            <Header />
          </div>                                
          <div className=" w-[70%]  flex ml-[15%] border-none mt-1">
            <Routes>
              <Route path="/"  element={<Tabela />}/>
              <Route path="/Sobre" element={<Sobre />} />
              <Route path="/Excecao" element={<Excecao />} />
            </Routes>
          </div>
        </InfoVagasProvider>
        <div className=" min-h-12 w-[100%] mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
