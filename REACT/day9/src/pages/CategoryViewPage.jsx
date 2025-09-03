import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Footer } from "../components/Footer";

const CategoryViewPage = () =>{

    const LIMIT = 5

    const [products,setProducts] = useState([])
    const [totalItems,setTotalItems] = useState(0);
    const [page,setPage] = useState(0);

    const {item} = useParams();
    const navigate = useNavigate();

    const getProductsByCategory = async() =>{
        const skip = LIMIT * (page - 1);
        const response = await fetch(`https://dummyjson.com/products/category/${item}?limit=${LIMIT}&skip=${skip}`)
        const data = await response.json();
        setProducts(data.products);
        setTotalItems(data.total)
        // console.log(data.products)
    }

    useEffect(()=>{getProductsByCategory()},[item,page]);

    const handleViewProduct = (id) =>{
        navigate(`/${id}/view`);    
    }

    
    const totalPages = Math.ceil(totalItems/LIMIT);
    const dummyArray = Array(totalPages).fill(" ");
    // console.log(totalPages)

    return(
        <>
            <div>
                {products.map((elem) => (
                <div key={elem.id} onClick={()=>{handleViewProduct(elem.id)}} >
                    <h3>{elem.title}</h3>
                    <p>${elem.price}</p>
                    <img src={elem.thumbnail} alt={elem.title} width={100} />
                </div>
            ))}
            
            <div  className="flex flex-wrap cursor-pointer gap-2 justify-center items-center">
                {
                    <button
                    disabled={page === 1}
                    onClick={()=>setPage((prev)=>(prev-1))}
                    className=" bg-blue-700 py-2 px-2 cursor-pointer my-4 disabled:cursor-not-allowed disabled:bg-white text-white ">
                    &lt;&lt;</button>
                }
                {
                
                   dummyArray.map((elem,idx)=>{
                    return(
                    <div key={idx} >
                        <button
                        onClick={()=>{setPage(idx+1)}}
                        className={` py-2 px-4 cursor-pointer my-4 text-white ${page === idx+1? "bg-blue-400": "bg-blue-700" }`}>
                        {idx+1}</button>
                    </div>)
                    }) 
                }
                {
                    <button
                    disabled={page===totalPages}
                    onClick={()=>setPage((prev)=>(prev+1))}
                    className=" bg-blue-700 py-2 px-2 cursor-pointer my-4 text-white disabled:cursor-not-allowed disabled:bg-white">
                    &gt;&gt;</button>
                }
            </div>
            <Footer />
            </div>
            
        </>
    )
}
export {CategoryViewPage};