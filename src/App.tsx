import { Header } from './components/header';
import { Tabela } from "./components/tabela";
import { Footer } from "./components/footer";

function App() {

  return (
      <div className=" flex w-[100%] flex-col h-screen min-h-[100%] justify-between">
        <div className="h-20">
          <Header />
        </div>
        <div className=" w-[70%]  flex ml-[15%] border-none mt-1">
          <Tabela />
        </div>
        <div className=" min-h-12 w-[100%] mt-auto">
          <Footer />
        </div>
      </div>
  )
}

export default App
