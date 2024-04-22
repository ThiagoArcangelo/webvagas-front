

export function Header(){
  return (
    <div className="flex items-center justify-start min-h-1 w-full h-20 gap-4 bg-[#14192f]">
      <div className="flex gap-4 ml-10">
        <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-600  cursor-pointer"><a className="" href="">Sobre</a></div>
        <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-600 hover: cursor-pointer "><a className="" href="">Vagas</a></div>
      </div>      
    </div>
  ) 
}