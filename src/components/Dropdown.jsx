import React from "react";

export default function Dropdown({ }) {


    return (
        <div className="relative text-lg hover:bg-gray-100 border border-gray-800 min-w-[350px] w-full max-w-[450px] bg-white relative py-3 px-2 text-gray-600 font-semibold rounded-xl">
            Filter

            <div className="w-full h-fit bg-white p-2 absolute mt-4 left-0 rounded-xl top-end">
                <div className="text-center w-full h-full text-sm">No Data</div>
            </div>
        </div>
    )
}