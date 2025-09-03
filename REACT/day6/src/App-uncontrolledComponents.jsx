// import { useState } from "react";

const App = () =>{


    const handleSubmit = (e) =>{

      e.preventDefault();

      console.log(e);

      const name = e.target.name.value;
      const city = e.target.city.value;
      const email = e.target.email.value;

      if(name.length < 3){
        alert("name is not valid");
      }else if(city.length < 4){
        alert("city is not valid");
      }else if(email.length < 6){
        alert("email is not valid");
      }else{
        alert("form sucessully submitted");
      } 
    }

    return (
      <div>
        {/* we were getting the value from event but the control was always with the DOM */}
        <form onSubmit={handleSubmit}>

            <input type="text" name="name" required/><br/><br/>

            <input type="email" name="email" /><br/><br/>

            <input  type="text" name="city" /><br/><br/>

            <button >Submit</button>
        </form>

      </div>
    );

}
export default App;