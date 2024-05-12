import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

    const [menuVisible,setMenuVisible] = useState(null);

    const setSidebar = (status)=>{
        setMenuVisible(status);
    }


    useEffect(() => {
        function handleResize() {
          const threshold = window.screen.width * 0.4; // 40% of the full screen width
          if (window.innerWidth > threshold) {
            setMenuVisible(false);
          }
        }
        handleResize();
    
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
      }, [window.innerWidth]);

    return (
        <>
            <div className="sticky top-0">
                <Header setSidebar={setSidebar}></Header>
                <NavigationBar></NavigationBar>
            </div>
            <Sidebar sidebarState={menuVisible} updateState={setSidebar}></Sidebar>
            <div className="ml-0 lg:ml-[288px] md:ml-[288px]">
                <Outlet/>
            </div>
        </>
    );
}