import { useEffect, useState } from "react"
import {Navbar} from "../components/Navbar.jsx"
import { useNavigate } from "react-router";

const HomePage = () =>{
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate()
    const handleClick = () =>{
        setCounter((prev)=>{
            return prev+1;
        })
        if(counter > 4){
            navigate("/about")
        }
    }

    useEffect(()=>{
        console.log("useEffect running");
        const id = setTimeout(()=>{
            navigate("/about")
        },3000);

        return ()=>{
            console.log("removing home")
            clearInterval(id);
        }


    },[])

    // if we are not clearing the previous one it will be like if we open serah page after home eventhough it will navigate if we clear then whenever it is on home page then only naviaget

    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <h3>{counter}</h3>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}

export {HomePage}