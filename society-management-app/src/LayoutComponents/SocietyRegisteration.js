import React, { useState } from "react";

export default function SocietyRegisteration({ setSocietyInfo }) {

    const [societyDetails, setSocietyDetails] = useState({
        sname: "",
        scity: "",
        staluka: "",
        sdistrict: "",
        sstate: "",
        spincode: "",
        adminId: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSocietyDetails((preData) => ({
            ...preData,
            [name]: value
        }));

        setSocietyInfo({
            ...societyDetails,
            [name]: value
        });
    }

    return (
        <>
            <div className="bg-gray-200 p-5 rounded-lg">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={3} className="font-serif text-xl uppercase">
                                Society Details
                            </th>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <div className="w-full bg-black border border-black mt-3 mb-3"></div>
                            </td>
                        </tr>
                    </thead>
                    <tr>
                        <td colSpan={2}>
                            <div className="mb-6 relative">
                                <input
                                    type="text"
                                    name="sname"
                                    id="sname"
                                    placeholder=""
                                    onChange={(e)=>handleInputChange(e)}
                                    required
                                    className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label
                                    htmlFor="sname"
                                    className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >Society Name
                                </label>
                            </div>
                        </td>

                        <td>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div className="mb-6 relative">
                                <input
                                    type="text"
                                    name="scity"
                                    id="scity"
                                    placeholder=""
                                    onChange={(e)=>{handleInputChange(e);}}
                                    required
                                    className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label
                                    htmlFor="scity"
                                    className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >City
                                </label>
                            </div>
                        </td>

                        <td>
                            <div className="mb-6 relative">
                                <input
                                    type="text"
                                    name="staluka"
                                    id="staluka"
                                    onChange={(e)=>{handleInputChange(e);}}
                                    placeholder=""
                                    required
                                    className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label
                                    htmlFor="staluka"
                                    className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >Taluka
                                </label>
                            </div>
                        </td>

                        <td>
                            <div className="mb-6 relative">
                                <input
                                    type="text"
                                    name="sdistrict"
                                    id="sdistrict"
                                    onChange={(e)=>{handleInputChange(e);}}
                                    placeholder=""
                                    required
                                    className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label
                                    htmlFor="sdistrict"
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
                                    name="sstate"
                                    id="sstate"
                                    placeholder=""
                                    onChange={(e)=>handleInputChange(e)}
                                    required
                                    className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label
                                    htmlFor="sstate"
                                    className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >state
                                </label>
                            </div>
                        </td>

                        <td>
                            <div className="mb-6 relative">
                                <input
                                    type="text"
                                    name="spincode"
                                    id="spincode"
                                    placeholder=""
                                    onChange={(e)=>{handleInputChange(e);}}
                                    required
                                    className="bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                                <label
                                    htmlFor="spincode"
                                    className="ml-1 absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
                                >Pincode
                                </label>
                            </div>
                        </td>
                    </tr>

                    <tr style={{ visibility: "hidden" }}>
                        <td colSpan={2}>
                            <div className="mb-6 relative">
                                <input
                                    className="hidden bg-white px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />

                            </div>
                        </td>

                        <td>
                            <div className="mb-6 relative">
                                <input
                                    className=" sible bg-white px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
}