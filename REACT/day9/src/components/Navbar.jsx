import { useState } from "react";
import {useNavigate, useSearchParams} from "react-router"
import { Link } from "react-router";
const Navbar = () =>{

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get("item"));

    const handleSearch = () =>{
        navigate(`/search?item=${searchText}`)
    }

    return (
        <nav className="flex bg-amber-100 px-6 py-4 justify-between">
            <Link to="/" >My App</Link>
                <div className="flex">
                    <input 
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}
                    className="border-1 px-3 py-1 rounded-lg w-100" />
                    <button
                    onClick={handleSearch}
                    className="bg-amber-500 px-3 py-1 m-px rounded-lg text-white cursor-pointer" >Search</button>
                </div>
            <div className="h-12 w-12 bg-blue-400 rounded-4xl" ></div>
        </nav>
    )
}
export {Navbar};