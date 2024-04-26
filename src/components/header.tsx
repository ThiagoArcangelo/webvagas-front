

export function Header(){
  return (
    <div className="flex items-center justify-between min-h-1  h-20 gap-4 bg-[#14192f]">
      <div className="flex gap-4 ml-10">
        <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded  cursor-pointer"><a className="" href="">Sobre</a></div>
        <div className="px-2 py-2 rounded-sm text-[#fff] hover:bg-gray-700 hover:rounded cursor-pointer "><a className="" href="">Vagas</a></div>
      </div> 
      <input type="text " className="w-[30%] text-gray-950 bg-[#14192f] border-solid border-2 border-white  rounded mr-14 focus:bg-white px-2 outline-none opacity-60 focus:opacity-100 " />     
    </div>
  ) 
}