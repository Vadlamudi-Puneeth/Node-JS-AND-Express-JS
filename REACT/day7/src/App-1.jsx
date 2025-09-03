import { useEffect, useState } from "react";

const App-1 = () =>{

  const [count,setCount] = useState(0);

  console.log("Hello");

  useEffect(()=>{
    console.log("count",count);

    return ()=>{
      console.log("useEffect return",count);
    }

  })

  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}} >click me</button>
    </>

  );

}
export default App-1;