import { useState } from "react";

const App = () =>{

  const [text,setText] = useState(
    ()=>{
    const val = localStorage.getItem("my-item")
    if(val != null){
      return val;
    }else{
      return "Hello";
    }
  });

  const handleInput = (e) =>{
    const val = e.target.value;
    setText(val);
    // localStorage.setItem("my-item", val);
  }

  return(
    <div>
      {/* this is controlled component (two way bunding) */}
      <input onChange={handleInput} value={text} />
      <p>{text}</p>
    </div>
  );
}
export default AppLocalStorageUseState;