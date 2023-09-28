import React from 'react'


const Login = () => {
  return (
    <div className='w-full flex flex-col justify-center mx-auto mt-36'>
        <div className='w-10/12 mx-auto'>
            <div className='w-96 h-[550px] mx-auto items-center border-blue-950 border rounded-lg'>
                <div className='flex flex-col items-center gap-6'>
                    <div className='mt-32'>
                        <input className='px-12 border-b-2 ring-0 focus:ring-0' type="email" defaultValue={"Email"} name="" id="" />
                    </div>
                    <div>
                        <input className='px-12 border-b-2' defaultValue={"Password"} type="password" />
                    </div>
                    <div>
                        <button className='py-4 px-32 mt-24 bg-blue-900 text-white'>Login</button>
                    </div>
                    <div>
                        <a href="">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login