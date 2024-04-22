import { Header } from './components/header';
import { Tabela } from "./components/tabela";

function App() {

  return (
    <>
      <div className="max-4xl mx-auto">
        <Header />
        <div className='flex justify-center'>
          <div className="border flex justify-start w-3/4 border-none">
            <Tabela />
          </div>
        </div>       
      </div>
    </>
  )
}

export default App
