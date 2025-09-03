
// initial-render(1st) --> state is created
// react will change the state --> "John" to "a"
// state change has happened! --> re-render the component --> re-run the component line by line
// re-render ==> react will not create the state once again, instead it will remember the value(new value) 

import { useState } from "react";

const App = () =>{

  const [monitor,controller] = useState("nani");

  const handleSearch = (e) =>{
    const value = e.target.value;
    controller(value);
    console.log(monitor)
  }

    return(
      <div>
          <input type="text" onKeyUp={handleSearch} />
          <h2>{monitor}</h2>
      </div>
    );
}

export default App;