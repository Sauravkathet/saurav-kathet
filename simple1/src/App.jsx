import {useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className= "w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" > 
        <div className="flex flex-wrap justify-center gap-8 bg-white rounded-full p-6 shadow-lg">
          <button className="flex  rounded-3xl flex-wrap justify-center outline-none text-black padding-3xl" style={{ backgroundColor: "red" }} onClick={()=> setColor("red")}>red</button>
          <button className="flex  flex-wrap justify-center outline-none text-black  padding-3xl  rounded-full" style={{ backgroundColor: "green" }} onClick={()=> setColor("green")}>green</button>
          <button className="flex flex-wrap rounded-full justify-center outline-none text-black  padding-3xl" style={{ backgroundColor: "yellow" }} onClick={()=> setColor("yellow")}>yellow</button>
          <button className="flex  rounded-full flex-wrap justify-center outline-none text-black  padding-3xl" style={{ backgroundColor: "brown" }} onClick={()=> setColor("brown")}>brown</button>
          <button className="flex flex-wrap rounded-full justify-center outline-none text-black  padding-3xl" style={{ backgroundColor: "olive" }} onClick={()=> setColor("olive")}>olive</button>
          </div>
      </div>
      <div className="w-40 h-40 fixed  text-black flex item-center allign-center justify-center bg-white left-20 mt-5">
        <p className="content-center">colour is {color}</p>
   
      </div>
    </div>
  

    
  )
}

export default App
