import { Button } from "@chakra-ui/react"
import PopUp from "../components/PopUp"
import { Input } from '@chakra-ui/react'
import PasswordInput from "../components/PasswordInput"

  

function Login(){

    return(
        <>
            <div className="loginbody">
                <div className="loginUser">
                    <h2>Username:</h2>
                    <Input placeholder='Username' />
                </div>
                <div className="loginEmail">
                    <h2>Email:</h2>
                    <Input placeholder='Email' />
                </div>
                <div className="loginPass">
                    <h2>Password:</h2>
                    <Input placeholder='Password' />
                </div>
            </div>
            <div>
                <a href="/map" id="map">
                     <Button>Map</Button>
                </a>
            </div>
        </>
    )
}

export default Login