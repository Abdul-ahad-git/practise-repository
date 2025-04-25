import { useNavigate } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import CARDS from "../constants/cards";

export default function PreviewComponent({ }) {

    const navigate = useNavigate()
    const [SearchParams] = useSearchParams();
    const id = SearchParams.get('id'); // Example: ?name=John 

    const [data, setData] = useState(null);

    useEffect(() => {

        if (id) {
            const tempData = CARDS.find((v) => v.id == id);
            setData(tempData)
        }
    }, [id])




    return (
        <DefaultLayout>

            <div className="relative w-full fade-in mb-5 min-h-fit h-full">

                <svg onClick={() => { navigate("/") }} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="50px" className="absolute top-0 right-2 z-[100] fill-purple-700 hover:fill-purple-500 transition-all cursor-pointer"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="44px"   className="absolute top-0 right-2 z-[100] fill-purple-700 hover:fill-purple-500 transition-all cursor-pointer"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg> */}

                <h1 className="zoom-in bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent font-display mt-12 w-fit font-semibold text-4xl">{data?.title || "Title"}</h1>
                <div className="zoom-in text-white mt-3 backdrop-blur">{data?.description || "description"}</div>

                <div className="zoom-in w-full border border-white/30 mb-10 p-4 rounded h-full mt-6 bg-white/10 backdrop-blur relative flex items-center justify-center">
                {
                    data?.component
                }
                </div>

            </div>

        </DefaultLayout>
    )
}