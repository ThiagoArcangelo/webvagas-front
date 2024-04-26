import { Header } from './components/header';
import { Tabela } from "./components/tabela";
import { Footer } from "./components/footer";

function App() {

  return (
    <>
      <div className="">
        <Header />
          <div className="borde w-[70%] flex ml-[15%] mr-30 border-none">
            <Tabela />
          </div>
          <div className="mt-8 w-=[10%]">
            <Footer />
          </div>
      </div>
    </>
  )
}

export default App
