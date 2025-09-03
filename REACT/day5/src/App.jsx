
import { useState } from "react";

const App = () =>{

  const [monitor,controller] = useState("nani");

  const handleSearch = (e) =>{
    controller(e.target.value)
  }
  

    return(
      <div >
          <input type="text" value={monitor} onChange={handleSearch} />
          <h2>{monitor}</h2>
          <button >click</button>
      </div>
    );
}

export default App;