import React, { Fragment, useState } from 'react'
import axios from 'axios'

const apiUrl = 'http://127.0.0.1:3001/';

function AddProduct(props) {

const [product, setProduct] = useState({
        nama: '',
        deskripsi: '',
        harga: '',
        message: '',
        display: 'none',
        bgColor: '#9b2c2c'
    })

const handleInputChange = event => {
        setProduct({
            ...product,
            [event.target.name] : event.target.value
        })
    }

const handleReset = () => { 
        document.getElementById("form-input").reset();
    }

const Capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

const addProduct = () => {
        axios.post(apiUrl + 'barang', {
            nama: Capitalize(product.nama),
            deskripsi: product.deskripsi,
            harga: product.harga
        }).then(json => {
            try {
                if (json.data.status === 200) {
                    console.log(json.data.message);
                    setProduct({
                        message: json.data.message,
                        display: 'block',
                        bgColor: '#285e61'
                    });
                    handleReset()
                    props.history.push({
                        pathname: '/dashboard/product',
                        state: { detail: json.data.message }
                        })
                } else {
                    setProduct({
                        message: json.data.message,
                        display: 'block',
                        bgColor: '#9b2c2c'
                    })
                }
            } catch (error) {
                console.log(error)
            }
        })
    }

    return(
        <Fragment>
             <div className="form mt-16 w-7/12">
                    <div className="flex flex-row items-center rounded-xl text-gray-300 text-sm font-bold px-4 py-3" role="alert" style={{"display" : product.display,"backgroundColor": product.bgColor}}>
                        <div className="flex">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
                        <p>{product.message}</p>
                        </div>
                    </div>
                    <form id="form-input">
                        <label className="block mt-4">
                            <span className="text-teal-800 font-bold">Nama</span>
                            <input name="nama" onChange={handleInputChange} value={product.nama} className="mt-1 text-teal-800 font-semibold block w-full rounded-2xl shadow-md p-2 outline-none focus:border-teal-800 border-solid border-2  bg-gray-300 focus:bg-gray-100" placeholder="Nama"/>
                        </label>
                        <label className="block mt-4">
                            <span className="text-teal-800 font-bold">Deskripsi</span>
                            <textarea name="deskripsi" onChange={handleInputChange} className="mt-1 text-teal-800 font-semibold block w-full rounded-2xl shadow-md p-2 outline-none focus:border-teal-800 border-solid border-2  bg-gray-300 focus:bg-gray-100" placeholder="Deskripsi"/>
                        </label>
                        <label className="block mt-4">
                            <span className="text-teal-800 font-bold">Harga</span>
                            <input name="harga" onChange={handleInputChange} value={product.harga} className="mt-1 text-teal-800 font-semibold block w-full rounded-2xl shadow-md p-2 outline-none focus:border-teal-800 border-solid border-2  bg-gray-300 focus:bg-gray-100" placeholder="Harga"/>
                        </label>
                        <div className="flex justify-end">
                            <button type="button" onClick={()=> addProduct()} className="mt-4 bg-teal-800 hover:bg-teal-900 rounded-xl shadow-md text-white font-bold px-3 py-1 focus:outline-none">
                                TAMBAH
                            </button>
                        </div>
                    </form>
                </div>
        </Fragment>
    );
}

export default AddProduct;