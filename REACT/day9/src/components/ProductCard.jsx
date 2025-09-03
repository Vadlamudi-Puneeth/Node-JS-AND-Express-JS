import { useNavigate } from "react-router";

const ProductCard = (props) =>{
    
    const {title, price, thumbnail, id} = props;
    const navigate = useNavigate();

    const handleViewProduct = () =>{
        navigate(`/${id}/view`);    
    }
    
    return (
        <div onClick={handleViewProduct} className="m-10 p-5 grid grid-cols-[200px_1fr] bg-amber-400/50 rounded-xl gap-10 cursor-pointer">
            
            <div className="h-full">
                <img src={thumbnail} h-full/>
            </div>

            <div>
                <p>{title}</p>
                <p>Rs. {price*85}</p>
            </div>

            </div>
    )
}
export  {ProductCard};