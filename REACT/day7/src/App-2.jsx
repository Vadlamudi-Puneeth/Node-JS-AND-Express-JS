// const App = () =>{
//   console.log("A")

//   const getData = () =>{
//   console.log("B")
//     const request = fetch("https://dummyjson.com/recipes");
//   console.log("C")
//     request.
//     then((response)=>{
//   console.log("D")
//      const promise = response.json();
//   console.log("E")
//      promise.
//      then((data)=>{
//   console.log("F")
//       console.log(data)})
//     }).catch((err)=>{
//   console.log("G")
//       console.log(err)
//     });
//   console.log("H")
//   }

//   console.log("I")
//   getData();
//   console.log("J")

//   return(
//     <div>
//       <h1>Hello</h1>
//     </div>
//   );
// }

// export default App;

const App-2 = () =>{


  const getData = () =>{
    const request = fetch("https://dummyjson.com/recipes");
    request.
    then((response)=>{
     return response.json();
    }).catch((err)=>{
      console.log(err)
    }).then((data)=>{
      console.log(data);
    })
  }

  getData();

  return(
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App-2;