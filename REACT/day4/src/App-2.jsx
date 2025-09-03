import { useState } from "react";

// react will change the value of remote from undefined to "a"
// whenever the state of component change --> component is re-rendered :: re-run

// initial-render --> re-render

// If it is giving all the monitor two times it means it is just confirming us properly just
// remove the strict mode

// in remote(value) that will scheduled for later and after completing of the function
// it will change the state (here remote is stateful function) that will re-render (re-run) and starts
//  from 1st line React complete its execution of handleSearch function and starts re-renduring whole component


const AppUseState = () =>{

  const [monitor,remote] = useState();

  console.log( "outside and above of handleSearch:  " +  monitor);
  
  const handleSearch = (e) =>{
    const value = e.target.value;
    remote(value); //this will schedule re-render for future after completing this handleSearch function
    console.log( "inside of handleSearch:  " +  monitor); 
  }

  console.log( "outside and below of handleSearch:  " +  monitor);


  return(
    <div>
      <input type="text" onKeyUp={handleSearch}  /> 
      <h2>a {monitor}</h2>
      {/* the {} bracket undefined will show nothing in UI */}
    </div>
  );
}

export default AppUseState;