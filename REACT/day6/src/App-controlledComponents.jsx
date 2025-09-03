import { useState } from "react";

const App = () =>{

    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit = () =>{
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
        <div>

            <input onChange={(e)=>{
              setName(e.target.value) 
            }} value={name} type="text" name="username" /><br/><br/>

              <input onChange={(e)=>{
                setEmail(e.target.value) 
              }} value={email} type="email" name="email" /><br/><br/>

            <input onChange={(e)=>{
              setCity(e.target.value) 
            }} value={city} type="text" name="city" /><br/><br/>

            <button onClick={handleSubmit} >Submit</button>
        </div>

            <div>
              {name != null ? <p>{name}</p>:null}<br/>
              {email != null ? <p>{email}</p>: null}<br />
              {city != null ? <p>{city}</p>: null}
            </div>

      </div>
    );

}
export default App-controlledComponents;