import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import qs from 'querystring'
import { AuthContext } from '../../../App';

const apiUrl = 'http://127.0.0.1:3001/';

function Product(props) {

    const {state, dispatch} = useContext(AuthContext)

    const [product, setProduct] = useState({
        barang: [],
        display: 'none',
        message: '',
        bgColor: '#9b2c2c'
    })

    const [pagination, setPagination] = useState(0)

    const configHeaders = {
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': 'Bearer '+ state.token
            }
    }

    const getData = () => {
        console.log(pagination)
        axios.get(apiUrl + 'barang',{
            params: {
                 pagination: pagination
               } 
        }).then(res => {
            setProduct({
                barang: res.data.data
            }) 
        }).catch(e => {
            console.log(e)
        })
    }

    useEffect(() => {

        getData();
        console.log("jalan"+ getData()); 
    },[pagination])

    const nextPage = () => {
        if(Array.isArray(product.barang ) && product.barang.length) {
            setPagination(pagination + 5)
        }
    } 

    const prevPage = () => {
        if(pagination >= 5) {
            setPagination(pagination - 5)
            dispatch({
                ...state,
                token : localStorage.getItem("token")
            })
        }
    }

    const deleteProduct = (id) => {
        const {barang} = product
        const data = qs.stringify({
            id: id
        })

        axios.delete(apiUrl + 'barang',
            {
                data: data,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json => {
            try {
                if(json.data.status === 200) {
                    setProduct({
                        message: json.data.message,
                        barang: barang.filter(barang => barang.id !== id),
                        display: 'block',
                        bgColor: '#285e61'
                    })
                    console.log(json.data)
                    this.props.history.push('/product')
                } else {
                    setProduct({
                        message: json.data.message,
                        display: 'block',
                        bgColor: '#9b2c2c'
                    }) 
                }
            } catch (err) {
                console.log(err)
            }
        })
    }

    return (
        <div>
            <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">Users</h2>
                </div>
                <div className="my-2 flex sm:flex-row flex-col">
                    <div className="flex flex-row mb-1 sm:mb-0">
                        <div className="relative">
                            <Link to="/dashboard/add_product">
                                <button className="h-full text-sm bg-teal-800 hover:bg-teal-900 text-gray-300 px-3 font-semibold rounded-l focus:outline-none">
                                    Tambah
                                </button>
                            </Link>
                        </div>
                        <div className="relative">
                            <select
                                className="appearance-none h-full cursor-pointer rounded-l border block w-full bg-gray-300 border-gray-400 text-teal-800 font-bold py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                <option>5</option>
                                <option>10</option>
                                <option>20</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-teal-800">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative">
                            <select
                                className="appearance-none h-full cursor-pointer rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-gray-300 border-gray-400 text-teal-800 font-bold py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                <option>All</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-teal-800">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="block relative">
                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-teal-800">
                                <path
                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                </path>
                            </svg>
                        </span>
                        <input placeholder="Search"
                            className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-gray-300 text-sm placeholder-teal-800 text-gray-700 focus:bg-gray-100 focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                    </div>
                </div>

                <div className="flex flex-row items-center rounded-xl text-white text-sm font-bold px-4 py-3" role="alert" style={{"display" : product.display,"backgroundColor": product.bgColor}}>
                    <div className="flex">
                    <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                    <p>{product.message}</p>
                    </div>
                </div>

                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto bg-re">
                    <div className="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead className="bg-teal-800 text-gray-300 text-left tracking-wider border-b-2 text-xs font-semibold uppercase">
                                <tr>
                                    <th
                                        className="px-5 py-3">
                                        {product.pagination}
                                    </th>
                                    <th
                                        className="px-5 py-3">
                                        Deskripsi
                                    </th>
                                    <th
                                        className="px-5 py-3">
                                        Harga
                                    </th>
                                    <th
                                        className="px-5 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-300 text-sm text-teal-800">

                                {product.barang.map(barang => 

                                    <tr key={barang.id}>
                                        <td className="px-5 py-5 border-b border-gray-200">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img className="w-full h-full rounded-full"
                                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                        alt="" />
                                                </div>
                                                <div className="ml-3">
                                                    <p className=" whitespace-no-wrap">
                                                        {barang.nama}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200">
                                            <p className=" whitespace-no-wrap">{barang.deskripsi}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200">
                                            <p className=" whitespace-no-wrap">
                                                {barang.harga}
                                            </p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200">
                                        <div className="inline-flex mt-2 xs:mt-0">
                                            <Link to={
                                                {
                                                    pathname: '/dashboard/edit_product',
                                                    state: {
                                                        id: barang.id,
                                                        nama: barang.nama,
                                                        deskripsi: barang.deskripsi,
                                                        harga: barang.harga
                                                    }
                                                }
                                            }>
                                                <button
                                                    className="text-sm bg-teal-800 hover:bg-teal-900 text-gray-300 font-semibold py-2 px-4 rounded-l focus:outline-none">
                                                    Edit
                                                </button>
                                            </Link>
                                            <button
                                                onClick={e =>
                                                    window.confirm("Are you sure you wish to delete this item?") &&
                                                    deleteProduct(barang.id)
                                                }
                                                className="text-sm bg-red-800 hover:bg-red-900 text-gray-300 font-semibold py-2 px-4 rounded-r focus:outline-none">
                                                Delete
                                            </button>
                                        </div>
                                        </td>
                                    </tr>

                                )}

                                
                            </tbody>
                        </table>
                        <div
                            className="px-5 py-5 bg-gray-300 border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <div className="inline-flex mt-2 xs:mt-0">
                                <button
                                    onClick={() => prevPage()}
                                    className="text-sm bg-teal-800 hover:bg-teal-900 text-gray-300 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                <button
                                    onClick={() => nextPage()}
                                    className="text-sm bg-teal-800 hover:bg-teal-900 text-gray-300 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    );
}

export default Product;