import React from 'react'


const Login = () => {
  return (
    <div>
        <div className="bg-cover bg-fixed relative h-screen"
            style={{
            backgroundPosition: 'center',
            backgroundImage: `url("https://images.unsplash.com/photo-1591189863345-9db058f9f8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80")`,
        }}>
            <div className='w-full flex flex-col justify-center mx-auto'>
                <div className='w-10/12 mx-auto'>
                    <div className='w-96 h-[550px] mx-auto items-center border-blue-950 border rounded-lg bg-black/50 mt-32'>
                        <div className='flex flex-col items-center gap-6'>
                            <div className='mt-32'>
                                <input className='px-12 py-3 bg-black/70 text-white' type="email" defaultValue={"Email"} name="" id="" />
                            </div>
                            <div>
                                <input className='px-12 py-3 bg-black/70 text-white' defaultValue={"Password"} type="password" />
                            </div>
                            <div>
                                <button className='py-4 px-32 mt-24 bg-[var(--primary-light)] text-white'>Login</button>
                            </div>
                            <div>
                                <a className='text-white' href="">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Login