import Navbar from '../components/Navbar'

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
              
            </div>
          </div>
        </body>
      </>
    )
}

export default Profile