import React from 'react'
import illustration from '../images/pos_illustration.svg';

class Login extends React.Component {
    render() {
        return <div>
            <div className="flex container mx-auto h-screen  justify-between items-center">
                <div className="w-5/12">
                    <img src={illustration} alt=""/>
                </div>

                <div className="w-5/12 mt-16 md:w-4/12 md:mr-5 md:mt-0 ">
                    <div className="bg-teal-800 w-full h-full relative rounded-3xl">
                    <div className=" bg-gray-300 card-list ml-4 rounded-3xl h-full p-3 info-card">
                        <div className="font-bold bg-teal-800 text-gray-300 rounded-lg px-2 py-1 inline-block mb-2">
                            Point of Sale
                        </div>

                        <label className="block mt-4">
                            <span className="text-teal-800 font-bold">Email</span>
                            <input name="email" className="mt-1 text-teal-800 font-semibold block w-full rounded-2xl shadow-md p-2 outline-none focus:border-teal-800 border-solid border-2  bg-gray-300 focus:bg-gray-100" placeholder="Email"/>
                        </label>

                        <label className="block mt-4">
                            <span className="text-teal-800 font-bold">Password</span>
                            <input type="password" name="password" className="mt-1 text-teal-800 font-semibold block w-full rounded-2xl shadow-md p-2 outline-none focus:border-teal-800 border-solid border-2  bg-gray-300 focus:bg-gray-100" placeholder="Password"/>
                        </label>

                        <button type="button" onClick={this.addProduct} className="mt-4 bg-teal-800 hover:bg-teal-900 rounded-xl shadow-md text-white font-bold px-4 py-1 focus:outline-none">
                            LOGIN
                        </button>
                    
                    </div>
                    </div>
                </div>

            </div>
        </div>
        
    }
}

export default Login;