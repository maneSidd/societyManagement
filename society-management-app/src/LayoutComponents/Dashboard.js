import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Dashboard() {

    const [menuVisible,setMenuVisible] = useState(null);

    const setSidebar = (status)=>{
        setMenuVisible(status);
    }

    return (
        <>
            <Header setSidebar={setSidebar}></Header>
            <Sidebar sidebarState={menuVisible} updateState={setSidebar}></Sidebar>
        </>
    );
}