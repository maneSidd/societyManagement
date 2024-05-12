import React from 'react';

export default function Header({setSidebar}) {

    const  handleSidebar =()=>{
        setSidebar(true);            
    }

    return (
        <>
            <div
                className="flex flex-wrap z-50 w-full lg:ml-[288px] md:ml-[288px] lg:max-w-[calc(100%-288px)] md:max-w-[calc(100%-288px)]  bg-gray-50"
            >
                <p
                    className='block md:hidden lg:hidden text-xl font-serif font-semibold pl-5 py-3 cursor-pointer'
                    onClick={handleSidebar}
                >
                    :::
                </p>
                <p
                    className=' text-lg md:text-xl lg:text-2xl font-serif font-semibold pl-5 py-3'
                >
                    SOCIETY MANAGEMENT PORTAL
                </p>
            </div>
        </>
    );
}