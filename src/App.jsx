import { useState } from 'react'
import './App.css'
import { CustomForm } from './components/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <CustomForm />
     
    </div>
  )
}

export default App
