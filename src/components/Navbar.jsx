import React, {useState} from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <nav className="top-0 sticky z-20">
      <div className="w-full py-8 mx-auto bg-gray-100">
        <div className='flex flex-row w-10/12 mx-auto justify-between'>
            <div className="w-full mx-auto">
              <div className="flex flex-row">
                <div>
                  <a href="http://localhost:3000/"><img className='h-20' src="https://www.startupcommons.org/uploads/2/1/0/9/21090978/sc-logo_orig.png" alt="" /></a>
                </div>
                <div className="mx-auto lg:inline-flex flex-row hidden items-center gap-20 font-bold text-[var(--primary-light)]">
                  <a href="http://localhost:3000/">Home Page</a>
                  <Link to = "planmeal" >Plan Meal</Link>
                  <Link to = "login" >Login</Link>
                </div>
              </div>
            </div>
            <div>
                {/* Hamburger menu */}
                <div onClick={handleNav} className="flex flex-col gap-2 cursor-pointer mt-8 items-end">
                    <div className="w-9 border-blue-950 border-b-2"></div>
                    <div className="w-4 border-blue-950 border-b-2"></div>
                </div>
            </div>
        </div>
      </div>
              {/* Mobile menu */}
        <div className={nav ? 'absolute ease-in-out duration-500 h-screen w-full p-4 top-22 left-0 bg-[#577d8a]/80 -z-10 ' : '-z-10 -translate-x-full absolute h-screen left-[-100%]'}>
            <div className='flex flex-col items-center text-center w-full text-white font-bold gap-12 pt-12'>
                <a href="http://localhost:3000/">Home Page</a>
                <a href="http://localhost:3000/">Plan Meal</a>
                <Link to = "login" >Login</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar