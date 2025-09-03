
// initial-render(1st) --> state is created
// react will change the state --> "John" to "a"
// state change has happened! --> re-render the component --> re-run the component line by line
// re-render ==> react will not create the state once again, instead it will remember the value(new value) 

import { useState } from "react";

const App-3 = () =>{

  const [monitor,controller] = useState("nani");

  console.log("onchange outside value: ", monitor)

  const handleSearch = (e) =>{
    const value = e.target.value;
    // controller((prev)=>{
    //   if(prev === "$$end"){
    //     const result =  e.target.value.substring(0,value.length-1);
    //     console.log("onchange end : ",result)
    //     return result;
    //   }
    //   console.log("on change prev: ",prev)
    //   return e.target.value;
    // })

    controller(value)

    console.log(value)
  }

  const handleCheck = (e) =>{
    const value = e.key;

    // if(value === "z"){
    //   controller((prev)=>{
    //     console.log("key down prev: ",prev)
    //     return "$$end";
    //   })
    // }
    // console.log("key down value: ",value)

    console.log(value)
    if(value === "z" || (value =="v" && e.ctrlKey)){
      console.log("---blocked---")
      e.preventDefault();
    }

  }
    const handlePrint = (e) =>{
      console.log("clicked");
      // e.preventDefault();
      e.stopPropagation();
    }

    return(
      <div onClick={handlePrint} >
          <input type="text" value={monitor} onChange={handleSearch} onKeyDown={handleCheck} />
          <h2>{monitor}</h2>
          <button onClick={handlePrint} >click</button>
      </div>
    );
}

export default App-3;