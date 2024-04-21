import { Header } from './components/header';
import { Tabela } from "./components/tabela";

function App() {

  return (
    <>
      <div className="max-4xl mx-auto ">
        <Header />
        <div className="border flex justify-center">
          <Tabela />
        </div>
      </div>
    </>
  )
}

export default App
