import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../features/searchSlice"

export default function Head({ }) {

    const searchTerm = useSelector(state => state.search.value)
    const dispatch = useDispatch()

    return (
        <div className="fade-in w-full py-2 mb-10 sticky top-0 bg-transparent backdrop-blur z-[100]">

            <h1 className="zoom-in bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent font-display mt-12 text-center font-semibold text-4xl">Custom components</h1>

            <div className="w-full flex-col mt-4 flex items-center justify-center">
                <div className="zoom-in  p-[1px] pt-[2px] pb-[2px] rounded-lg bg-gradient-to-r from-blue-700 to-pink-700">
                    <input
                        value={searchTerm}
                        onChange={(e) => { dispatch(setSearch(e.target.value)) }}
                        placeholder="Search here..."
                        className="font-display text-white font-light text-sm bg-black/80 backdrop-blur-md p-4 px-6 rounded-lg min-w-[350px] lg:min-w-[500px] w-full max-w-[600px] outline-none"
                    />
                </div>
            </div>

        </div>
    )

}