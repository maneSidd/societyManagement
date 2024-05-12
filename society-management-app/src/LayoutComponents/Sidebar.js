import React, { useState } from "react";
import logo from "../Icons/logo.jpg";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ sidebarState, updateState }) {
    const navigate = useNavigate();
    const [isActive, setActive] = useState("initial");
    const [preActive, setPreActive] = useState("initial");

    const handleMenu = (item) => {
        if (preActive == "initial" && isActive == "initial") {
            setActive(item);
            setPreActive(item);
        }
        else {
            if (preActive == isActive) {
                setActive("initial");
                setPreActive("initial");
            }
            else {
                setPreActive(isActive);
                setActive(item);
            }
        }
    }

    return (
        <>
            <div className="fixed left-0 top-0 hidden md:block lg:block w-72 h-[100%] bg-cyan-400">

                <div className="  z-50 w-full h-[25%]">
                    <div className="w-full h-full  bg-cyan-500">
                        <div className="w-full h-[70%] pt-0.5 px-0.5">
                            <img className="w-full h-full border border-cyan-400" src={logo} ></img>
                        </div>
                        <div className=" w-full -mt-2 h-[25%] px-1">
                            <input
                                type="text"
                                placeholder="SEARCH "
                                className="w-full h-full text-center rounded-xl mt-3 italic"
                            />
                        </div>
                    </div>
                </div>

                {/* Sidebar Menus */}
                <div className="w-full h-[100%] bg-blue-300 overflow-y-auto  sidebar" style={{ WebkitScrollbarThumb: { backgroundColor: 'red' } }}>
                    <ul>
                        <li className="w-full font-serif font-semibold bg-cyan-700 text-white">
                            <button
                                className="text-left w-full h-[40px] pl-2 border-b-2 border-b-white border-t-2 border-t-white"
                                onClick={(e) => { handleMenu("item1") }}
                            >
                                ALL
                            </button>
                            {
                                isActive == "item1" && (
                                    <ul>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ALL OWNERS
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ALL RENTERS
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ALL FLATS
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ALL SHOPS
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ALL SHOPKEEPERS
                                            </button>
                                        </li>
                                    </ul>
                                )
                            }

                        </li>

                        <li className="w-full font-serif font-semibold bg-cyan-700 text-white">
                            <button
                                className="text-left w-full h-[40px] pl-2 border-b-2 border-b-white"
                                onClick={(e) => { handleMenu("item2") }}
                            >
                                ADD
                            </button>
                            {
                                isActive == "item2" && (
                                    <ul>
                                        <li>
                                            <button
                                                onClick={() => { navigate("/admin/add-owner") }}
                                                className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400"
                                            >
                                                ADD OWNER
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ADD RENTER
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ADD FLATS
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ALL SHOPS
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                ALL SHOPKEEPERS
                                            </button>
                                        </li>
                                    </ul>
                                )
                            }

                        </li>

                        <li className="w-full  font-serif font-semibold  bg-cyan-700 text-white">
                            <button
                                className="text-left w-full h-[40px] pl-2 border-b-2 border-b-white"
                                onClick={(e) => { handleMenu("item3") }}
                            >
                                MAINTAINANCE
                            </button>
                            {
                                isActive == "item3" && (
                                    <ul>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                MAINTAINANCE
                                            </button>
                                        </li>
                                    </ul>
                                )
                            }
                        </li>

                        <li className="w-full  font-serif font-semibold  bg-cyan-700 text-white">
                            <button
                                className="text-left w-full h-[40px] pl-2 border-b-2 border-b-white"
                                onClick={(e) => { handleMenu("item4") }}
                            >
                                EXPENDATURE
                            </button>
                            {
                                isActive == "item4" && (
                                    <ul>
                                        <li>
                                            <button
                                                className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400"
                                                onClick={() => { navigate("/admin/calender") }}
                                            >
                                                ADD
                                            </button>
                                        </li>
                                        <li>
                                            <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                VIEW
                                            </button>
                                        </li>
                                    </ul>
                                )
                            }
                        </li>
                    </ul>
                </div>

            </div>

            {/* Mobile Views */}

            {
                sidebarState == true &&
                <>
                    <div className="fixed z-50 left-0 top-0 block md:hidden lg:hidden  w-72 h-screen bg-cyan-400">

                        <div className="  z-50 w-full h-[25%]">
                            <div className="w-full h-full  bg-cyan-500">
                                <div className="w-full h-[70%] pt-0.5 px-0.5">
                                    <img className="w-full h-full border border-cyan-400" src={logo} ></img>
                                </div>
                                <div className=" w-full -mt-2 h-[25%] px-1">
                                    <input
                                        type="text"
                                        placeholder="SEARCH "
                                        className="w-full h-full text-center rounded-xl mt-3 italic"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Menus */}
                        <div className="w-full h-[100%] bg-cyan-500 overflow-y-auto  sidebar" style={{ WebkitScrollbarThumb: { backgroundColor: 'red' } }}>
                            <ul>
                                <li className="w-full font-serif font-semibold bg-cyan-700">
                                    <button
                                        className="text-left w-full h-[40px] pl-2 border-b-2 border-b-white border-t-2 border-t-white"
                                        onClick={(e) => { handleMenu("item1") }}
                                    >
                                        ALL
                                    </button>
                                    {
                                        isActive == "item1" && (
                                            <ul>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ALL OWNERS
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ALL RENTERS
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ALL FLATS
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ALL SHOPS
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ALL SHOPKEEPERS
                                                    </button>
                                                </li>
                                            </ul>
                                        )
                                    }

                                </li>

                                <li className="w-full font-serif font-semibold bg-cyan-700">
                                    <button
                                        className="text-left w-full h-[40px] pl-2 border-b-2 border-b-white"
                                        onClick={(e) => { handleMenu("item2") }}
                                    >
                                        ADD
                                    </button>
                                    {
                                        isActive == "item2" && (
                                            <ul>
                                                <li>
                                                    <button
                                                        onClick={() => { navigate("/admin/add-owner") }}
                                                        className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400"
                                                    >
                                                        ADD OWNER
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ADD RENTER
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ADD FLATS
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ALL SHOPS
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        ALL SHOPKEEPERS
                                                    </button>
                                                </li>
                                            </ul>
                                        )
                                    }

                                </li>

                                <li className="w-full  font-serif font-semibold  bg-cyan-700">
                                    <button
                                        className="text-left w-full h-[40px] pl-2 border-b-2 border-b-white"
                                        onClick={(e) => { handleMenu("item3") }}
                                    >
                                        MAINTAINANCE
                                    </button>
                                    {
                                        isActive == "item3" && (
                                            <ul>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        MAINTAINANCE
                                                    </button>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </li>

                                <li className="w-full  font-serif font-semibold  bg-cyan-700">
                                    <button
                                        className="text-left w-full h-[40px] pl-2 border-b-2 border-b-white"
                                        onClick={(e) => { handleMenu("item4") }}
                                    >
                                        EXPENDATURE
                                    </button>
                                    {
                                        isActive == "item4" && (
                                            <ul>
                                                <li>
                                                    <button
                                                        className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400"
                                                        onClick={() => { navigate("/admin/calender") }}
                                                    >
                                                        ADD
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="text-left w-full h-[40px] pl-4 border-b-2 border-b-white bg-cyan-400">
                                                        VIEW
                                                    </button>
                                                </li>
                                            </ul>
                                        )
                                    }
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="fixed top-0 left-0 z-30 w-full h-[100%] bg-black opacity-50 "
                        onClick={() => updateState(false)}
                    >
                    </div>
                </>
            }

        </>
    );
}