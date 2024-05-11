import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

    const [menuVisible,setMenuVisible] = useState(null);

    const setSidebar = (status)=>{
        setMenuVisible(status);
    }

    return (
        <>
            <Header setSidebar={setSidebar}></Header>
            <NavigationBar></NavigationBar>
            <Sidebar sidebarState={menuVisible} updateState={setSidebar}></Sidebar>
            <div className="ml-0 lg:ml-[288px] md:ml-[288px]">
                <Outlet/>
            </div>
        </>
    );
}