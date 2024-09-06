import { Header } from './components/header';
import { Tabela } from "./components/tabela";
import { Footer } from "./components/footer";
import { TabelaFiltro } from "./components/tabelaFiltro";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Sobre } from './pages/Sobre';

function App() {

  return (
    <Router>
      <div className=" flex w-[100%] flex-col h-screen min-h-[100%] justify-between">
        <div className="h-20">
          <Header />
        </div>       
        <div className=" w-[70%]  flex ml-[15%] border-none mt-1">
          <Routes>
            <Route path="/"  element={<Tabela />}/>
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Pesquisa" element={<TabelaFiltro />} />d
          </Routes>
        </div>
        <div className=" min-h-12 w-[100%] mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
