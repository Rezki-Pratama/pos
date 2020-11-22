import React from'react'
import {Link } from "react-router-dom";
import {BiMenu} from 'react-icons/bi'

function Navbar() {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return(
        <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-teal-800 md:bg-none md:bg-opacity-0 z-10 md:fixed">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between md:shadow-lg bg-gray-300 rounded-3xl">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-teal-800"
                    href="#pablo"
                    >
                    Tailwind
                    </a>
                    <button
                    className="text-teal-800 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    <BiMenu/>    
                    </button>
                </div>
                <div
                    className={
                    "lg:flex flex-grow items-center" +
                    (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="nav-item">
                        <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-teal-800 hover:opacity-75"
                        to="/"
                        >
                        <i className="fab fa-facebook-square text-lg leading-lg text-teal-800 opacity-75"></i><span className="ml-2">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-teal-800 hover:opacity-75"
                        to="/about"
                        >
                        <i className="fab fa-twitter text-lg leading-lg text-teal-800 opacity-75"></i><span className="ml-2">About</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-teal-800 hover:opacity-75"
                        to="/home"
                        >
                        <i className="fab fa-pinterest text-lg leading-lg text-teal-800 opacity-75"></i><span className="ml-2">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item ml-2">
                        <img className="w-8 h-8 rounded-full border-solid border-teal-800 border-2" src="https://placeimg.com/640/480/any" alt=""/>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;