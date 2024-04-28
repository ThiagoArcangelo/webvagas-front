import { Header } from './components/header';
import { Tabela } from "./components/tabela";
import { Footer } from "./components/footer";

function App() {

  return (
      <div className="h-100%">
        <Header />
          <div className=" w-[70%] h-[75vh] flex ml-[15%] mr-30 border-none mt-0">
            <Tabela />
          </div>
          <div className="mt-8 w-=[10%]">
            <Footer />
          </div>
      </div>
  )
}

export default App
