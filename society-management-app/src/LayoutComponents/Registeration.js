import React, { useState } from "react";
import AdminRegisteration from "./AdminRegisteration";
import SocietyRegisteration from "./SocietyRegisteration";
import { Link } from "react-router-dom";

export default function Registeration() {

    const [societyDetails, setSocietyDetails] = useState({
        sname: "",
        scity: "",
        staluka: "",
        sdistrict: "",
        sstate: "",
        spincode: "",
        adminId: ""
    });

    const [adminDetails,setAdminDetails] = useState({
        fname:"",
        mname:"",
        lname:"",
        city:"",
        taluka:"",
        district:"",
        state:"",
        pincode:"",
        mobile:"",
        email:""
    });

    const getSocietyInfo = (data)=>{
        setSocietyDetails(data);
    }

    const getAdminInfo = (data)=>{
        setAdminDetails(data);
    }

    const handleSubmit = ()=>{

        if(societyDetails.sname === ""){ alert ("Enter society name !!"); return; }
        else if(societyDetails.scity === ""){ alert ("Enter society city !!"); return; }
        else if(societyDetails.staluka === ""){ alert ("Enter society taluka !!"); return; }
        else if(societyDetails.sdistrict === ""){ alert ("Enter society district !!"); return; }
        else if(societyDetails.sstate === ""){ alert ("Enter society state !!"); return; }
        else if(societyDetails.sstate === ""){ alert ("Enter society state !!"); return; }
        else if(societyDetails.spincode === ""){ alert ("Enter society pincode !!"); return; }

        if(adminDetails.fname === ""){ alert ("Enter secretory first name !!"); return; }
        else if(adminDetails.mname === ""){ alert ("Enter secretory middle name !!"); return; }
        else if(adminDetails.lname === ""){ alert ("Enter secretory last name !!"); return; }
        else if(adminDetails.city === ""){ alert ("Enter secretory city !!"); return; }
        else if(adminDetails.taluka === ""){ alert ("Enter secretory taluka !!"); return; }
        else if(adminDetails.district === ""){ alert ("Enter secretory district !!"); return; }
        else if(adminDetails.state === ""){ alert ("Enter secretory state !!"); return; }
        else if(adminDetails.state === ""){ alert ("Enter secretory state !!"); return; }
        else if(adminDetails.pincode === ""){ alert ("Enter secretory pincode !!"); return; } 
        else if(adminDetails.email === ""){ alert ("Enter secretory email !!"); return; }
        else if(adminDetails.mobile === ""){ alert ("Enter secretory mobile !!"); return; }


        console.log(societyDetails);
        console.log(adminDetails);
    }

    return (
        <>
            <div className="sticky top-0 z-50">
                <div
                    className="flex flex-wrap z-50 w-full bg-gray-50"
                >
                    <p
                        className=' text-lg md:text-xl lg:text-2xl font-serif font-semibold pl-5 py-3'
                    >
                        SOCIETY MANAGEMENT PORTAL
                    </p>
                </div>
                <div
                    className="flex flex-wrap z-30 w-full bg-gray-300"
                >
                    <p
                        className='w-[80%]  font-serif font-semibold pl-5 py-3 uppercase'
                    >
                        SOCIETY registeration
                    </p>
                    <p 
                    className='w-[20%] flex items-center justify-end pr-5 font-serif font-semibold pl-5 py-3 uppercase text-blue-800'
                    >
                    <Link to="/admin">Log In</Link>
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap flex-col w-full">

                <div className="flex flex-wrap flex-col md:flex-row w-full">
                    <div className="w-full md:w-[50%] p-5">
                        <SocietyRegisteration setSocietyInfo={getSocietyInfo}></SocietyRegisteration>
                    </div>
                    <div className="w-full md:w-[50%] p-5">
                        <AdminRegisteration setAdminInfo={getAdminInfo}></AdminRegisteration>
                    </div>
                </div>

                <div className="w-full text-center">
                    <button
                    onClick={handleSubmit}
                        className="w-[30%] hover:bg-gray-700 bg-gray-400 py-3 px-5 font-serif rounded-lg"
                    >
                        Register
                    </button>
                </div>

            </div>

        </>
    );
}