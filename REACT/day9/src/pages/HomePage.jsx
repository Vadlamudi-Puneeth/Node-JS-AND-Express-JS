import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CategoryViewPage } from "./CategoryViewPage";

const HomePage = () =>{

    const [items,setItems] = useState([]);
    const navigate = useNavigate();

    const handleload = async () =>{
        try{
            const response = await fetch(`https://dummyjson.com/products/categories`)
            const data = await response.json();
            setItems(data);
        }catch(err){
            console.log(err);
        }
    }

    const handleClick = (item) =>{
        navigate(`/category/${item}`)
    }

    useEffect(()=>{handleload()},[]);

    return(
        <>
            <Navbar />
            <main className="flex flex-wrap px-6 py-7">
                {
                    items.map((item,idx)=>{
                        return (
                            <div key={idx} className="p-7">
                                <button 
                                onClick={()=>{handleClick(item.name)}}
                                className=" bg-amber-100 p-8 grid grid-cols-5 w-50 ml-auto text-center justify-center">{item.name}</button>
                                
                            </div>
                        )
                    })
                }
            </main>
            <Footer />
        </>
    )
}
export {HomePage};