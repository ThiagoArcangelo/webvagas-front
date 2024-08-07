import { Header } from './components/header';
import { Tabela } from "./components/tabela";
import { Footer } from "./components/footer";

function App() {

  return (
      <div className="h-100% flex flex-col h-screen justify-between">
        <Header />
          <div className=" w-[70%] h-[75vh] flex ml-[15%] border-none mt-0">
            <Tabela />
          </div>
          <div className=" h-12 w-=[7%] mt-2">
            <Footer />
          </div>
      </div>
  )
}

export default App
