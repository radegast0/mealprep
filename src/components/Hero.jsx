import React from 'react'

export const Hero = () => {
  return (
    <div
    className="bg-cover bg-fixed relative h-[550px] lg:h-[822px]"
     style={{
       backgroundPosition: 'center',
       backgroundImage: `url("https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80")`,
     }}
>
     <div className="w-10/12 mx-auto">
       <div className="flex flex-col items-center p-12 gap-12">
        <div className="text-center hidden lg:flex mt-12">
          <h1 className="font-extrabold leading-loose tracking widest text-5xl">
             Lorem ipsum dolor  <br/> sit amet consectetur adipisicing elit. Maxime mollitia
          </h1>
         </div>
         <button className="px-12 py-4 z-10 mt-36 rounded-sm hover:scale-125 transition-all duration-300 bg-[#213547] lg:bg-white text-white lg:text-[#213547]">
           Try For Free
        </button>
        </div>
     </div>
    </div>

  )
}
