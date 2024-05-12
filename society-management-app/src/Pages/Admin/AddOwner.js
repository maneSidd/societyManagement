import React from "react";
import "../../index.css";
export default function AddOwner() {

    return (
        <>
            <div className="flex items-center justify-center w-[95%] mx-[2.5%] md:mx-0 lg:mx-0 md:w-full lg:w-full h-full p-3  mt-5 ">
                <div className="bg-blue-100 p-5 rounded-lg">
                    <form>
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={3} className="font-serif text-xl">
                                        Add Owner
                                    </th>
                                </tr>
                                <tr>
                                    <td colSpan={3}>
                                        <div className="w-full bg-black border border-black mt-3 mb-3"></div>
                                    </td>
                                </tr>
                            </thead>
                            <tr>
                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="flatno"
                                            id="flatno"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="flatno"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Flat No
                                        </label>
                                    </div>
                                </td>

                                <td colSpan={2}>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="fname"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >First Name
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="mname"
                                            id="mname"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="mname"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Middle Name
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="lname"
                                            id="lname"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="lname"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Last Name
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="city"
                                            id="city"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="city"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >City
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="taluka"
                                            id="taluka"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="taluka"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Taluka
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="district"
                                            id="district"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="district"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >District
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="state"
                                            id="state"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="state"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >state
                                        </label>
                                    </div>
                                </td>

                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="text"
                                            name="country"
                                            id="country"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="country"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Country
                                        </label>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="mb-6 relative">
                                        <input
                                            type="mobile"
                                            name="mobile"
                                            id="mobile"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="mobile"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Mobile
                                        </label>
                                    </div>
                                </td>

                                <td colSpan={2}>
                                    <div className="mb-6 relative">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder=""
                                            required
                                            className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        />
                                        <label
                                            htmlFor="email"
                                            className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                        >Email
                                        </label>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td colSpan={3} align="center">
                                    <button
                                        type="submit"
                                        className="hover:bg-cyan-700 bg-blue-400 py-3 px-5 font-serif rounded-lg"
                                    >
                                        ADD OWNER
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