import { useSearchParams } from "react-router";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";

const SearchPage = () =>{

    const limit = 6;

    const [searchParams,setSearchParams] = useSearchParams();
    const searchText = searchParams.get("item");
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [page,setPage] = useState(1);
    const [totalItems,setTotalItems] = useState(1);

    const getSearchResult = async() =>{
        try{
            setLoading(true);
            const skip = limit * (page-1);
            const response = await fetch(`https://dummyjson.com/products/search?q=${searchText}&limit=${limit}&skip=${skip}`);
            const data = await response.json();
            setProducts(data.products)
            setTotalItems(data.total)
        }catch(err){
            console.log(err);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{getSearchResult()},[searchText,page]);

    const dummyArray = Array(limit).fill("value");

    const totalPages = Math.ceil(totalItems/limit);
    const dummyArrayForPagination = Array(totalPages).fill("")

    return(
        <>
            <Navbar />
            <main className="grid grid-cols-[300px_1fr] gap-6 p-6">
                <div className="bg-amber-200" height="100%">
                </div>

                    {
                        loading? (

                            dummyArray.map((elem,idx)=>(

                    <div key={idx} className="m-10 p-5 grid grid-cols-[200px_1fr] bg-amber-400/50 rounded-xl gap-10 cursor-pointer">
                    
                            <div className="h-full">
                                <img height="h-full"/>
                            </div>

                            <div>
                                <p></p>
                                <p></p>
                            </div>

                            </div>
                            ))
                        ) : (
                            <div>{
                products.map((elem)=>{
                    return(
                        <ProductCard key={elem.id} {...elem} />
                    )
                })
            }</div>
                        )
                    }

                    {
                        !loading && products.length === 0 && <div>
                            <h2>No products found Go back home</h2>
                        </div>
                    }

           
            </main>
                <div  className="flex flex-wrap gap-1 justify-center mb-5">
                    {
                        !loading && products.length !== 0 && (<button
                        className="py-1 px-4 bg-blue-700 rounded-md text-white disabled:bg-white disabled:cursor-not-allowed"
                        disabled={page === 1}
                        onClick={() => setPage((prev) => (prev - 1))}
                        >&lt;&lt;</button> )
                    }
                    {
                        dummyArrayForPagination.map((elem,idx)=>{
                            return(
                                <div >
                                    <button className={`py-1 px-4 rounded-md text-white} ${page === idx + 1 ? "cursor-not-allowed bg-blue-400" : "bg-blue-700"  }`}
                                    onClick={()=>{setPage(idx+1)}}
                                    >{idx+1}</button>
                                </div>
                                
                            )
                        }) 
                    }
                    {
                        !loading && products.length !== 0 &&(
                            <button
                            className="py-1 px-4 bg-blue-700 rounded-md text-white disabled:bg-white disabled:cursor-not-allowed"
                            disabled={page === totalPages}
                            onClick={()=>setPage((prev)=>prev+1)}
                            >&gt;&gt;</button>
                        )
                    }
                </div>
            <Footer />
        </>
    )
}
export {SearchPage};