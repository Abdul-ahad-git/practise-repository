import React, { useState } from "react";

export default function InputX(params) {

    const [value, setValue] = useState(['d'])

    function onChange(event) {

        const text = event.currentTarget.innerText; // get plain text from the editable div
        console.log(text);

        setValue(text)

    }



    console.log(value);

    return (
        <div className="w-full h-full bg-white p-4 rounded-xl border">

            <div className="rounded bg-gray-100 p-3 rounded flex">
                <div className="flex select-none border-r px-1 border-gray-300">
                    <div className="p-1.5 cursor-pointer px-4 text-gray-800  hover:bg-gray-200 rounded w-fit">B</div>
                    <div className="p-1.5 cursor-pointer px-4 text-gray-800  hover:bg-gray-200 rounded w-fit italic">I</div>
                    <div className="p-1.5 cursor-pointer px-4 text-gray-800  hover:bg-gray-200 rounded w-fit underline">U</div>
                </div>
                <div className="flex select-none border-r px-1 border-gray-300">
                    <div className="p-1.5 cursor-pointer px-4 text-gray-800  hover:bg-gray-200 rounded w-fit">H</div>
                </div>
            </div>

            <div
                aria-placeholder="type..."
                onInput={onChange}
                dangerouslySetInnerHTML={{ __html: value }}
                className="w-full h-full border-none outline-none py-4 px-2 font-light"
                contentEditable={true}
            >
                
            </div>

        </div>
    )
}