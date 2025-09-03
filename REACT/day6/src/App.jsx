import { useState } from "react";
import "./app.css"

const App = () =>{

    const [fruits,setFruits] = useState(
        ()=>{
            const arr = localStorage.getItem("fruit");
            if(arr){
                return JSON.parse(arr)
            }else{
                return [];
            }
        }
    );

    const [index,setIndex] = useState(-1);
    const [editValue,setEditValue] = useState();

    const startEdit = (idx) =>{
        setIndex(idx);
        setEditValue(fruits[idx]);
    }

    const saveEdit = () =>{
        setFruits((prev)=>{
            const temp = [...prev];
            temp[index] = editValue;
            localStorage.setItem("fruit", JSON.stringify(temp));
            return temp;
        })
        setEditValue("")
        setIndex(-1)
    }

    const handleSubmit = (e) =>{
        const fruits = e.target.fruits.value;
        e.preventDefault();
        setFruits((prev)=>{
            if(prev.includes(fruits)){
                return prev;
            }
            const temp = [...prev];
            temp.push(fruits)
            localStorage.setItem("fruit", JSON.stringify(temp));
            return temp;
        })
    }

    const handleDelete = (idx) =>{
        setFruits((prev)=>{
            const temp = [...prev];
            temp.splice(idx,1);
            localStorage.setItem("fruit", JSON.stringify(temp));
            return temp;
        })
    }



    return(

        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fruits" />
                <button type="submit" >add</button>
            </form>
        </div>

        <div  className="card">
                {
                    fruits.map((elem,idx)=>{
                        
                        return(
                            <div key={elem} >

                                {index == idx ?

                                (
                                <>
                                    <input  value={editValue} onChange={(e)=>{setEditValue(e.target.value)}} />
                                    <button onClick={saveEdit}>save</button>
                                    <button onClick={()=>
                                        {setIndex(-1);
                                        setEditValue("");}
                                    } >cancel</button>
                                </>):
                               (
                               <>
                                
                                    <h2>{elem}</h2>
                                <button onClick={()=>{startEdit(idx)}} >Edit</button>
                                <button onClick={()=>{handleDelete(idx)}} >Delete</button>
                                </>
                                )
                        }
                            </div>
                        );
                    })
                }
        </div>
        </>

    );

}
export default App;