import { useState } from 'react'
import './App.css'
import SportDropDown from './components/SportDropDown.jsx'
import TimeInput from './components/TimeInput'
import CapacityInput from './components/CapacityInput'
import PopUp from './components/PopUp'

import Map from './components/Map'

function App() {

  return (
    <>
      <Map />
      <div class="form">
        <PopUp/>
      </div>
    </>
  )
}

export default App


