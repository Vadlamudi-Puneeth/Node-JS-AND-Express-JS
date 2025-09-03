import { useParams } from "react-router";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";

const ViewPage = () =>{
    const params = useParams(); // this is used to take :productId this type of values
    const {productId} = params;
    const [products,setProducts] = useState([]);
    const [loader,setLoader] = useState(false)

    const getProductInfo = async() =>{
        try{
            setLoader(true)
            const response = await fetch(`https://dummyjson.com/products/${productId}`)
            const data = await response.json();
            setProducts(data);
        }catch(err){
            console.log(err);
        }finally{
            setLoader(false);
        }
    }

    useEffect(()=>{getProductInfo()},[productId])

    return(
        <div>
            <Navbar />
            <div className="flex flex-wrap gap-6 items-center justify-center" >
                {
                    loader ? (<div className="p-10 bg-amber-500">loading</div>) :
                    (products.images?.map((elem,idx)=>{
                        return(
                            <div key={idx}>
                                <img src={elem} width="200"/>
                            </div>
                        )
                    }))

                }
            </div>
            <Footer/>
        </div>
    )
}
export {ViewPage};