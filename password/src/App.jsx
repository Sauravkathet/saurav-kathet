import { useCallback, useEffect, useState } from 'react'

import './App.css'
import { useRef } from 'react'
import "tailwindcss"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState( false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useCallback is used to memoize the function so that it doesn't get recreated on every render
  // This is useful for performance optimization, especially if the function is passed as a prop to child components
  const passwordRef= useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str=" abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numberAllowed) str +="01234456789"
    if(charAllowed) str += "~!@#$%^&*()_+"

    for (let i = 0; i < parseInt(length); i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]) 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() =>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  


  return (
    <>
      <div className='w-full mw-auto shadow-md text-orange-500 px-4 my-8 rounded-lg bg-gray-800 ' >
        <h1 className='size-2xl'>Password Generator</h1>
        <div className='flex shadow rounded-lg w-full overflow-hidden bg-white content-center h-15 items-center'>

          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='password halnus'
          readOnly
          ref={passwordRef}
          />
          
          <button onClick={copyPasswordToClipboard} className=" bg-blue-500  outline-none text-orange-500 py-0.5 px-3 shrink-0"> copy</button>


        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} />
            <label>length:{length}</label>

          </div>
          <div  className='flex items-center gap-x-1'>
            <input type ="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {setnumberAllowed((prev) => !prev)}} />
            <label htmlFor='numberInput'> Numbers </label>
            </div>
          <div  className='flex items-center gap-x-1'>
            <input type ="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={() => {setcharAllowed((prev) => !prev)}} />
           <label htmlFor='"characterInput'>Character</label>
            </div>
            


        </div>
      </div>
    </>
  )
}

export default App
