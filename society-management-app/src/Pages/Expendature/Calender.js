import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function getDaysInCurrentMonth(month, year) {
  // Check if it's a month with fixed length
  if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
    return 31;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else if (month === 2) { // February
    // Check for leap year
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
  } else {
    return -1; // Invalid month
  }
}

export default function Calender() {
  const navigate = useNavigate();
  const [days, setDays] = useState(0);

  useEffect(() => {
    const date = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    setDays(getDaysInCurrentMonth(date, year));
  }, []);


  return (
    <>
      <div className="">

        <div
          className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-10 mt-8"
        >
          {
            Array.from({ length: days }, (_, index) => index + 1).map((number) => {
              return (
                <button
                  className={` 
                  ${number == new Date().getDate() ? "bg-green-700" : "bg-green-300"} 
                  ${number == new Date().getDate() ? "text-white" : "text-black"} 
                  text-xl font-mono p-5 rounded-lg m-3
                `}
                  disabled={number == new Date().getDate() ? false : true}
                  onClick={() => { navigate("/admin/add-expendature"); }}
                >
                  {number}
                </button>
              )
            })
          }
        </div>

      </div>
    </>
  );
}