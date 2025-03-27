import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'

function App() {

  const countriesPromise=fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json());
  return (
    <>
      <h1>Nadir on the Go...</h1>

      <Suspense fallback={<h1>rest countries</h1>}>
      <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
