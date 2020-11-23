import React, {Fragment, useContext, useState } from 'react'
import illustration from '../../images/pos_illustration.svg';
import axios from 'axios'
import qs from 'querystring'
import { AuthContext } from '../../App';


const apiUrl = 'http://127.0.0.1:3001/';

function LoginComp(props) {

    const { dispatch } = useContext(AuthContext)

    const initalState = {
        email: '',
        password: '',
        isSubmit: false,
        message: '',
        display: 'block'
    }

    const [data, setData] = useState(initalState)

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmit: true,
            message: null
        })

        const reqBody = {
            email: data.email,
            password: data.password
        }

        const configHeaders = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }


        axios.post(apiUrl+'auth/v1/login', qs.stringify(reqBody),configHeaders).then(res => {
                if(res.data.success === true) {
                    dispatch({
                       type: "LOGIN",
                       payload: res.data
                    }) 

                    props.history.push('/dashboard')

                } else {
                    setData({
                        ...data,
                        isSubmit: false,
                        message: res.data.message
                    })
                }

                throw res
            }).catch(e => {
                console.log(e);
            })
    }

    return (
        <Fragment>
            <div className="flex container mx-auto h-screen  justify-between items-center">
                <div className="w-5/12">
                    <img src={illustration} alt=""/>
                </div>
                <div className="w-5/12 mt-16 md:w-4/12 md:mr-5 md:mt-0 ">
                    <div className="bg-teal-800 w-full h-full relative rounded-3xl">
                        <form onSubmit={handleSubmit}>
                            <div className=" bg-gray-300 card-list ml-4 rounded-3xl h-full p-3 info-card">
                                <div className="font-bold bg-teal-800 text-gray-300 rounded-lg px-2 py-1 inline-block mb-2">
                                    Point of Sale
                                </div>
                                
                                <div className="flex flex-row items-center rounded-xl bg-teal-800 text-white text-sm font-bold px-4 py-3" role="alert">
                                    <div className="flex">
                                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                                    <p>{data.message}</p>
                                    </div>
                                </div>

                                <label className="block mt-4">
                                    <span className="text-teal-800 font-bold">Email</span>
                                    <input name="email" onChange={handleInputChange} value={data.email} className="mt-1 text-teal-800 font-semibold block w-full rounded-2xl shadow-md p-2 outline-none focus:border-teal-800 border-solid border-2  bg-gray-300" placeholder="Email"/>
                                </label>
                                <label className="block mt-4">
                                    <span className="text-teal-800 font-bold">Password</span>
                                    <input type="password" onChange={handleInputChange} value={data.password} name="password" className="mt-1 text-teal-800 font-semibold block w-full rounded-2xl shadow-md p-2 outline-none focus:border-teal-800 border-solid border-2  bg-gray-300" placeholder="Password"/>
                                </label>
                                <button type="submit" disabled={data.isSubmit} className="mt-4 bg-teal-800 hover:bg-teal-900 rounded-xl shadow-md text-white font-bold px-4 py-1 focus:outline-none">
                                    {data.isSubmit ? 'LOADING' : 'LOGIN'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LoginComp;