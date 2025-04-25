export default function DefaultLayout({ children }) {

    return (
        <div className="relative overflow-hidden custom-scroll-bar w-screen h-screen px-10 bg-black  overflow-y-scroll">

            <div className="big-sphere"></div>
            <div className="big-sphere-2"></div>

            <div className="relative w-full h-full z-[100]">
                {
                    children
                }
            </div>
        </div>
    )

}