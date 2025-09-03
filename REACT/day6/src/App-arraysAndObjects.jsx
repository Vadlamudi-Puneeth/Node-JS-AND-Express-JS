// import { useState } from "react";

import { useState } from "react";

const Appss = () =>{

  const [users,setUsers] = useState([
    {
      name: "nani",
      email: "nanipuneeth00@gmail.com",
      city: "kavali"
    }
  ])

  console.log(users)


    const handleSubmit = (e) =>{

      e.preventDefault();

      // console.log(e.target.innerTexts);

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
        console.log("sucess");
        setUsers((prev)=>{

          const newArray = [...prev]; // Here we need to change state then only re-render happens

          newArray.push({
            name,
            email,
            city
          });
          return newArray;
        })
      } 
    }

    return (
      <div>
        {/* we were getting the value from event but the control was always with the DOM */}
        <form onSubmit={handleSubmit}>

            <input type="text" name="name" required/><br/><br/>

            <input type="email" name="email" /><br/><br/>

            <input type="text" name="city" /><br/><br/>

            <button>add user</button>
        </form>

        <div>
          {
            users.map((elem)=>{
              return(
                <div key={elem}>
                  <h2>{elem.name}</h2>
                  <p>{elem.email}</p>
                  <h4>{elem.city}</h4>
                </div>
              )
            })
          }
        </div>

      </div>
    );

}
export default App-arraysAndObjects;