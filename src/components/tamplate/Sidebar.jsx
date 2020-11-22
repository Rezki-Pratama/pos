import React from 'react'
import { Link } from 'react-router-dom';
import {AiFillHome} from 'react-icons/ai'
import {CgFeed} from 'react-icons/cg'
import {BsFillArchiveFill,BsFillBagFill,BsClockHistory} from 'react-icons/bs'

function Sidebar() {
    return(
        <div className="w-full md:w-56  bg-gray-600 md:bg-none md:bg-opacity-0 px-2 pb-3 text-center fixed bottom-0 md:pt-20 md:top-0 md:left-0 h-16 md:h-screen mr-2">
        <div className="md:relative mx-auto lg:px-6 md:py-3 bg-gray-300 md:rounded-3xl md:shadow-2xl md:h-full lg:pl-5">
           <ul className="list-reset flex flex-row md:flex-col text-center md:text-left">
           <li className="mr-3 flex-1 font-bold volume-content">
                 <Link to="/" className="block py-1 md:py-3 pl-1 align-middle text-teal-800 no-underline">
                 <div className="flex justify-center md:justify-start md:align-middle md:items-center">
                    <AiFillHome/>
                    <span className="pl-2 pb-1 md:pb-0 text-xs md:text-base block md:inline-block">Dashboard</span>
                 </div>
                 <div className="h-1 bg-teal-800 rounded-lg volume"></div>
                 </Link>
              </li>
              <li className="mr-3 flex-1 font-bold volume-content">
                 <Link to="/product" className="block py-1 md:py-3 pl-1 align-middle text-teal-800 no-underline">
                 <div className="flex justify-center md:justify-start md:align-middle md:items-center">
                    <BsFillArchiveFill/>
                    <span className="pl-2 pb-1 md:pb-0 text-xs md:text-base block md:inline-block">Product</span>
                 </div>
                 <div className="h-1 bg-teal-800 rounded-lg volume"></div>
                 </Link>
              </li>
              <li className="mr-3 flex-1 font-bold volume-content">
                 <Link to="/" className="block py-1 md:py-3 pl-1 align-middle text-teal-800 no-underline">
                 <div className="flex justify-center md:justify-start md:align-middle md:items-center">
                    <BsFillBagFill/>
                    <span className="pl-2 pb-1 md:pb-0 text-xs md:text-base block md:inline-block">Transaction</span>
                 </div>
                 <div className="h-1 bg-teal-800 rounded-lg volume"></div>
                 </Link>
              </li>
              <li className="mr-3 flex-1 font-bold volume-content">
                 <Link to="/" className="block py-1 md:py-3 pl-1 align-middle text-teal-800 no-underline">
                 <div className="flex justify-center md:justify-start md:align-middle md:items-center">
                    <BsClockHistory/>
                    <span className="pl-2 pb-1 md:pb-0 text-xs md:text-base block md:inline-block">History</span>
                 </div>
                 <div className="h-1 bg-teal-800 rounded-lg volume"></div>
                 </Link>
              </li>
              <li className="mr-3 flex-1 font-bold volume-content">
                 <Link to="/" className="block py-1 md:py-3 pl-1 align-middle text-teal-800 no-underline">
                 <div className="flex justify-center md:justify-start md:align-middle md:items-center">
                    <CgFeed/>
                    <span className="pl-2 pb-1 md:pb-0 text-xs md:text-base block md:inline-block">Feedback</span>
                 </div>
                 <div className="h-1 bg-teal-800 rounded-lg volume"></div>
                 </Link>
              </li>
           </ul>
        </div>
     </div>  
    );
}

export default Sidebar;