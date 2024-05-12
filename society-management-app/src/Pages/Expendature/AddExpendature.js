import React from "react";

export default function AddExpendature() {


    return (
        <>
            <div className="flex items-center justify-center w-[95%] mx-[2.5%] md:mx-0 lg:mx-0 md:w-full lg:w-full h-full p-3  mt-8 ">
                <div className="bg-blue-100 p-5 rounded-lg ">
                    <form>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={3} className="font-serif text-xl">
                                        ADD EXPENDATURE
                                    </th>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        <div className="w-full bg-black border border-black mt-3 mb-3"></div>
                                    </td>
                                </tr>
                            </thead>
                            <tr>
                                <td colSpan={3}>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="title"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Expendature TItle
                                        </label>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={3}>
                                    <div className="mb-6 relative">
                                        <textarea
                                            type="text"
                                            name="description"
                                            id="description"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="description"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Expendature Description
                                        </label>
                                    </div>
                                </td>
                            </tr>

                            <tr className="hidden md:block">
                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="shopName"
                                            id="shopName"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="shopName"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Shop Name
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="amount"
                                            id="amount"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="amount"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Expendature Amount
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="file"
                                            name="invoice"
                                            id="invoice"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="invoice"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        > Invoice
                                        </label>
                                    </div>
                                </td>
                            </tr>

                            <tr className="block md:hidden lg:hidden">
                                <td colSpan={2}>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="shopName"
                                            id="shopName"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="shopName"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Shop Name
                                        </label>
                                    </div>
                                </td>
                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="amount"
                                            id="amount"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="amount"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Expendature Amount
                                        </label>
                                    </div>
                                </td>
                                </tr>

                                <tr className="block md:hidden lg:hidden">
                                <td colSpan={3}>
                                    <div className="mb-6 relative w-full">
                                        <input
                                            type="file"
                                            name="invoice"
                                            id="invoice"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="invoice"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        > Invoice
                                        </label>
                                    </div>
                                </td>
                            </tr>                                

                            <tr>
                                <td colSpan={3} align="center">
                                    <button
                                    type="submit"
                                        className="bg-cyan-500 hover:bg-cyan-700 p-3 font-serif rounded-lg"
                                    >
                                        ADD EXPENDATURE
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
            </div>

        </>
    );
}