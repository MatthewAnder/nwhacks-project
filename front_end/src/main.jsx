import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Profile from './pages/Profile.jsx'
import Home from './pages/Home.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "map",
    element: <ChakraProvider>
      <App/>
    </ChakraProvider>,
  },
  {
    path: "profile",
    element: <ChakraProvider>
      <Profile/>
    </ChakraProvider>,
  },
  {
    path: "/",
    element: <ChakraProvider>
      <Home/>
    </ChakraProvider>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

