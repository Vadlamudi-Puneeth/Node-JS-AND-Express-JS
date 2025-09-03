import React, { useState } from "react";

// state management: manage the data in component
// state --> condition of data
// let / const (normal variables)
// creating stateful variables with the help of react

// remove the old value and show the new value (unmount the old component & mount the new component )
// re-run the function -- re-render

// React component re-renders only when any of this condition happen
  // 1.Either "State" changes 
  // 2. Either "props" changes

// for creating state inside a component -- a function to create and manage a state :: useState
// function given by react --> :: --> hooks

// useState having two props
// monitor and remote - monitor used to see the status and remote used to control

const App = () =>{

  // let searchText = "Hello";

  const [monitor,remote] = useState();
  
  const handleSearch = (e) =>{
    const value = e.target.value;
    const searchValue = value;
    console.log(searchValue);
  }

  return(
    <div>
      <input type="text" onKeyUp={handleSearch}  />
      <h2>{searchText}</h2>
    </div>
  );
}

export default App;