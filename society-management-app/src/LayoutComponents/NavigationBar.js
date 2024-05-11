import React from "react";

export default function NavigationBar() {

    return (
        <>
            <div
                className=" flex flex-wrap w-full lg:ml-[288px] md:ml-[288px] lg:max-w-[calc(100%-288px)] md:max-w-[calc(100%-288px)]  bg-gray-300"
            >
                <p
                    className='font-serif font-semibold pl-5 py-3'
                >
                    DASHBOARD
                </p>
            </div>
        </>
    );
}