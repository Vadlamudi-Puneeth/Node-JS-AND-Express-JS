import { useState } from "react";
const App = () =>{

  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleNumber = (e) =>{
    if(operator == null){
      const val = Number(e.target.innerText);
      setFirstNumber((prev)=>{
        if(prev == null){
          return val;
        }else{
          return prev * 10 + val;
        }
      });
    }else{
       const val = Number(e.target.innerText);
      setSecondNumber((prev)=>{
        if(prev == null){
          return val;
        }else{
          return prev * 10 + val;
        }
      });
    }
  }



  let ans = 0;

  if(firstNumber != null && secondNumber != null){
    ans = firstNumber + secondNumber;
  }

    return(
    <>
      <div>
        <button onClick={handleNumber}>1</button>
        <button onClick={handleNumber}>2</button>
        <button onClick={handleNumber}>3</button>
        <button onClick={handleNumber}>4</button>
        <button onClick={handleNumber}>5</button>
        <button onClick={handleNumber}>6</button>
        <button onClick={handleNumber}>7</button>
        <button onClick={handleNumber}>8</button>
        <button onClick={handleNumber}>9</button>
        <button onClick={handleNumber}>0</button>
      </div>

      <div> <button onClick={()=>{
        setOperator("+")
      }} >+</button> </div>

      <div>
        {firstNumber != null ? <p>{firstNumber}</p>: null}
      </div>

        {operator}
        {secondNumber != null ? <p>{secondNumber}</p>: null}
      <div>
        {ans}
      </div>

      </>
    );
}

export default App-1;