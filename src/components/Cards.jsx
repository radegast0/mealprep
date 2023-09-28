import React from 'react'

const Cards = () => {
  return (
    <div className='w-10/12 mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center text-center gap-12 py-12'>
            <div className='relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-sm bg-white bg-clip-border text-center'>
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">                    
                </div>
                <div className='relative p-4'>
                    <h1 className='block text-5xl' >Lorem Ipsum</h1>
                    <h2 className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</h2>
                    <button className='w-full bg-white mt-56 p-6 hover:scale-105 duration-300'>Try Demo</button>
                </div>
            </div>
            <div className='relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-sm bg-white bg-clip-border text-center'>
                <div className="absolute opacity-80 inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">                    
                </div>
                <div className='relative p-4'>
                    <h1 className='block text-5xl' >Lorem Ipsum</h1>
                    <h2 className='mt-12'>sit amet consectetur adipisicing elit. Maxime mollitia</h2>
                    <button className='w-full bg-white mt-56 p-6 hover:scale-105 duration-300'>Try Demo</button>
                </div>
            </div>
            <div className='relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-sm bg-white bg-clip-border text-center'>
                <div className="absolute opacity-80 inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1586511934875-5c5411eebf79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">                    
                </div>
                <div className='relative p-4'>
                    <h1 className='block text-5xl' >Lorem Ipsum</h1>
                    <h2 className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</h2>
                    <button className='w-full bg-white mt-56 p-6 hover:scale-105 duration-300'>Try Demo</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards