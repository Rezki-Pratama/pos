import React from 'react'

function CardInfo(props) {

    return (
        <div>
            <div className="w-full h-40 rounded-2xl bg-gray-300 shadow-xl">
                <div className="shadow-inner rounded-2xl p-8">
                    <div className="font-bold text-teal-800">
                        {props.title}
                    </div>
                    <div className="flex justify-end m-2 font-bold">
                        {props.number}
                    </div>
                    <div className="bg-white w-full h-2 rounded-3xl relative">
                        <div className="bg-teal-800 h-2 rounded-3xl" style={{"width" : props.volume}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardInfo;