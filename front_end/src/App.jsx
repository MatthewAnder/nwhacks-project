import { useState } from 'react'
import './App.css'
import SportDropDown from './components/SportDropDown.jsx'
import TimeInput from './components/TimeInput'
import CapacityInput from './components/CapacityInput'
import PopUp from './components/PopUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="form">
        <PopUp/>
      </div>
    </>
  )
}

export default App


