import { useState } from "react";

function App(){
  const[name,setName]=useState("unknown")

  const user={
    name:"Ishu",
    bio:"frontend developer"
  }
  let age = 21;

  function sayHello(){
  console.log("hello from ishu");
  }

  return(
    <>
    <Hero users={user}
     details={age}
      fnc={sayHello}
       name={name} 
       setName={setName}/>
    </>
  )
}
export default App


function Hero({ users,details,fnc,name,setName}){
  return(
    <>
    <h1>helo {name}</h1>
    <h1>Hero {details}</h1>
    <Card data={users} name={name} setName={setName} />
    <button onClick={()=>fnc}>say hello</button>
    </>
  )
}


function Card({ data ,name, setName }){
  function update(){
    setName("ishu rulhan");
  }
  return(
    <>
  <h1>name:{data.name}</h1>
  <h3>bio:{data.bio}</h3>
  <button onClick={update}>update name</button><br></br>
  </>
  )
}