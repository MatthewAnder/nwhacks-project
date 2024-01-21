import Navbar from '../components/Navbar'
import SportDropDown from '../components/PopUpForm/SportDropDown'
import TimeInput from '../components/PopUpForm/TimeInput'
import CapacityInput from '../components/PopUpForm/CapacityInput'

function Profile(){
    return(
      <>
        <header>
          <div class="page header">
            <Navbar/>
            <img src={"../assets/pickup.png"} alt="Logo"></img>
          </div>
        </header>
        <body>
          <div className="page">
            <div class="halfCenter">
              <h2 class = "margin">
                Set Default
              </h2>
              <SportDropDown/>
              <TimeInput/>
              <CapacityInput/>
            </div>
          </div>
        </body>
      </>
    )
}

export default Profile