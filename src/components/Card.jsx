import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ title = "No title", description = 'No desription available...', id = 'None' }) {


    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    // Ref for the target div
    const targetRef = useRef(null);

    useEffect(() => {
        // Initialize IntersectionObserver
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If the div is in the viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.5, // 50% of the element should be visible to trigger
            }
        );

        // Start observing the target element
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Cleanup observer when the component unmounts
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    function onClickView() {

        let str = `?id=${id}`;
        navigate(`/previewComponent${str}`);

    }


    return (
        <div ref={targetRef} className="relative p-3 fade-in w-[300px] overflow-hidden h-[350px] rounded-xl bg-transparent border transition-background border-white/10 hover:border-purple-500/50 bg-white/5">

            <div className="gradient-sphere"></div>
            <div className="gradient-sphere-2"></div>

            <div className="relative w-full h-full bg-transparent">

                <div className="mt-2 text-lg text-purple-300/80">
                    {title}
                </div>

                <div className="h-[200px] mt-3 overflow-hidden truncate no-scroll-bar text-wrap text-xs font-light leading-normal text-purple-300/60">
                    {description}
                </div>

                <div className="w-full flex  mt-2 items-end justify-end ">
                    <button onClick={() => { onClickView() }} className="flex items-center justify-center gap-2 text-white text-sm group cursor-pointer hover:text-purple-700  font-light w-full overflow-hidden h-full py-4 rounded-lg bg-transparent hover:shadow shadow-purple-500/50 transition-all relative backdrop-blur ">
                        <div className="gradient-sphere-2"></div>
                        <div className="gradient-sphere"></div>
                        View
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="20px" className="fill-white transition-all group-hover:fill-purple-700"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" /></svg>
                    </button>
                </div>

            </div>

        </div>
    )
}