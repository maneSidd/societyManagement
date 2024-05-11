import React from "react";

export default function AdminDash(){
    return(
        <>
            <div className="mt-8 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                <div 
                    className="bg-slate-500 border border-slate-500 rounded-lg cursor-pointer"
                    onClick={()=>{alert("a")}}
                >
                    <p className="w-full text-white text-center text-lg font-serif py-3">
                        Total Owners
                    </p>
                    <p className=" w-full text-white text-center text-lg font-serif pb-3">
                        101
                    </p>
                </div>

                <div 
                    className="bg-slate-500 border border-slate-500 rounded-lg cursor-pointer"
                    onClick={()=>{alert("a")}}
                >
                    <p className="w-full text-white text-center text-lg font-serif py-3">
                        Total Renters
                    </p>
                    <p className=" w-full text-white text-center text-lg font-serif pb-3">
                        101
                    </p>
                </div>

                <div 
                    className="bg-slate-500 border border-slate-500 rounded-lg cursor-pointer"
                    onClick={()=>{alert("a")}}
                >
                    <p className="w-full text-white text-center text-lg font-serif py-3">
                        Total Flats
                    </p>
                    <p className=" w-full text-white text-center text-lg font-serif pb-3">
                        101
                    </p>
                </div>

                <div 
                    className="bg-slate-500 border border-slate-500 rounded-lg cursor-pointer"
                    onClick={()=>{alert("a")}}
                >
                    <p className="w-full text-white text-center text-lg font-serif py-3">
                        Total Shops
                    </p>
                    <p className=" w-full text-white text-center text-lg font-serif pb-3">
                        101
                    </p>
                </div>

                <div 
                    className="bg-slate-500 border border-slate-500 rounded-lg cursor-pointer"
                    onClick={()=>{alert("a")}}
                >
                    <p className="w-full text-white text-center text-lg font-serif py-3">
                        Total Owners
                    </p>
                    <p className=" w-full text-white text-center text-lg font-serif pb-3">
                        101
                    </p>
                </div>

            </div>
        </>
    );
}