import { useState } from 'react'
import "tailwindcss"
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {
  const [amount, setAmount] = useState(0)
  const[from, setFrom] = useState("usd")
  const[to, setTo] = useState("inr")
  const[convertedAmount,  setConvertedAmount] = useState(0)

  const currencyInfo= useCurrencyInfo(from);  
  const options =  Object.keys(currencyInfo)  ;
  const swap= ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount (convertedAmount)


  }
  const convert =() => {
    setConvertedAmount(amount * (currencyInfo[to] || 0 ))
  }


  return (
    <>

   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' style={{
           backgroundImage :'url(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600)',

   }}
   >
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
      <form
      onSubmit={(e) =>{ e.preventDefault();
        convert()

      }}
      >
        <div className='w-full  mb-1 '>
          <InputBox
          label="From"

          amount={amount}
          currencyOptions= {options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}

          />

        </div>
        <div className="relative w-full flex justify-center my-3">
  <button
    type="button"
    onClick={swap}
    className="w-40 h-10 flex items-center justify-center rounded-lg bg-blue-600 text-white text-xl shadow-md hover:bg-blue-700 transition"
    aria-label="Swap currencies"
  >
    ⇄ swap
  </button>
</div>

        <div className='w-full mt-1 mb-4'>
        <InputBox
  label="To"
  amount={convertedAmount}
  currencyOptions={options}
  onCurrencyChange={(currency) => setTo(currency)}
  selectCurrency={to}
  amountDisable
/>


        </div>
        <button type='submit'
        className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg '>
          Convert {from.toUpperCase() } to {to.toUpperCase()}
        </button>
      </form>
      </div>
    </div>
   </div>

    </>
  );
}

export default App
