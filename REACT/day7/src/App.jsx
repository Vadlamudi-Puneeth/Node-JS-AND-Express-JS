import { useEffect, useState } from "react";

// By using async and await
const App = () =>{

  const [recipesArr,setRecipesArr] = useState([]);

  const getData = async() =>{

    try{
      const response = await fetch("https://dummyjson.com/recipes")
      const data  = await response.json();
      console.log(data.recipes);
      setRecipesArr(data.recipes);
    }catch(err){
      console.log(err);
    }
  }
  
  useEffect(()=>{
    getData();
  },[]) //1. if we dont write the dependency array[] this getData() will call infinite times no use of useEffect
  // 2. when you mention that empty[] the call back function will run only in first render and it won't run in my life time 
  
  return(
    <div>
      <h1>Recipes</h1>
      {
        recipesArr.map((elem,idx)=>{
          return(
            <div key={elem.id}>
              <h2>{elem.name}</h2>
              <p>{elem.cuisine}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;