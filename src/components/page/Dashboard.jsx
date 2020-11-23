import React, { Fragment } from 'react'
import CardInfo from '../tamplate/CardInfo'
import LineChart from '../tamplate/LineChart'
import LineChartFull from '../tamplate/LineChartFull'

function Dashboard() {
    return(
        <Fragment>
             <div className="flex flex-col md:flex-row flex-wrap justify-between w-full p-3">
                <div className="w-full p-1 md:p-0 md:w-3/12">
                <CardInfo title="Product" number="20" volume="100%"/>
                </div>
                <div className="w-full p-1 md:p-0 md:w-4/12">
                <CardInfo title="Transaction" number="10" volume="50%"/>
                </div>
                <div className="w-full p-1 md:p-0 md:w-4/12">
                <CardInfo title="Feedback" number="15" volume="70%"/>
                </div>
                
                </div>
                <div className="p-3 flex flex-wrap flex-col md:flex-row justify-between mt-6">
                
                <div className="w-full h-full md:w-7/12">
                <LineChart/>
                </div>
                
                <div className="w-full mt-16 md:w-4/12 md:mr-5 md:mt-0">
                    <div className="bg-teal-800 w-full h-full relative rounded-3xl ">
                    <div className=" bg-gray-300 card-list ml-4 rounded-3xl  h-full p-3 info-card">
                        <div className="font-bold bg-teal-800 text-gray-300 rounded-lg px-2 py-1 inline-block mb-2">
                            Recent Transaction
                        </div>
                            <div className="w-full flex flex-row p-1">
                            <img className="w-10 h-10 rounded-full mr-2" src="https://placeimg.com/640/480/any" alt=""/>
                            <div className="flex flex-row justify-between w-full items-center">
                                <p className="text-teal-800">Anthony</p>
                                <p className="font-bold text-teal-800">$. 10.000</p>
                            </div>
                            </div>
                            <div className="w-full flex flex-row p-1">
                            <img className="w-10 h-10 rounded-full mr-2" src="https://placeimg.com/640/480/any" alt=""/>
                            <div className="flex flex-row justify-between w-full items-center">
                                <p className="text-teal-800">Josh</p>
                                <p className="font-bold text-teal-800">$. 10.000</p>
                            </div>
                            </div>
                            <div className="w-full flex flex-row p-1">
                            <img className="w-10 h-10 rounded-full mr-2" src="https://placeimg.com/640/480/any" alt=""/>
                            <div className="flex flex-row justify-between w-full items-center">
                                <p className="text-teal-800">Paul</p>
                                <p className="font-bold text-teal-800">$. 10.000</p>
                            </div>
                            </div>
                            <div className="w-full flex flex-row p-1">
                            <img className="w-10 h-10 rounded-full mr-2" src="https://placeimg.com/640/480/any" alt=""/>
                            <div className="flex flex-row justify-between w-full items-center">
                                <p className="text-teal-800">Zouma</p>
                                <p className="font-bold text-teal-800">$. 10.000</p>
                            </div>
                            </div>
                            <div className="w-full flex flex-row p-1">
                            <img className="w-10 h-10 rounded-full mr-2" src="https://placeimg.com/640/480/any" alt=""/>
                            <div className="flex flex-row justify-between w-full items-center">
                                <p className="text-teal-800">Anthony</p>
                                <p className="font-bold text-teal-800">$. 10.000</p>
                            </div>
                            </div>
                    </div>
                    </div>
                </div>
                
                </div>
                <div className="w-full h-full mt-16 p-3 mb-12 md:mb-2">
                <LineChartFull/>
                </div>
        </Fragment>
    );
}

export default Dashboard;