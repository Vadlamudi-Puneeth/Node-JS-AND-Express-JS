import { useState } from "react";
const App = () =>{

  let [counter,setCounter] = useState(0);

  // const handleIncrement = () => {
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);

  //   // Here how many times we put the setCounter and update it will remains same it will just
  //   // read by the react and say ok that's why we need to use function in that parameter then
  //   // we will update the value in each line even though we write inside the handle 
  //   // increament function it will re-render there itself
  // }

  const handleIncrement = () =>{
    setCounter( (previous) => {   // here we want the previous value that's y return there itself by taking previous value as parameter
      return previous + 1 // useState(0) here 0 is the initial value from that this will get precious
    } )
    setCounter( (previous) => {
      return previous + 1
    } )
  }

  return(
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrement} >++</button>
    </div>
  );
}

export default App;