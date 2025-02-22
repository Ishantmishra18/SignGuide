import React from 'react'
import  Home from './Pages/home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'
import Nav from './Component/navbar.jsx'
import Video from './Pages/video.jsx'
import Landing from './Pages/landing.jsx'
import { UserContextProvider } from './Context/user'



const App = () => {  

  const router=createBrowserRouter([
    {
      path:'/',
      element:<>
      <Nav/>
      <Landing/>
      </>
    },{
       path:'/home',
      element:<>
        <Nav/>
        <Home/>
      </>
    }
     ,
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/vid/:param',
      element:<Video/>
    },
  ])
  return (
    <>  
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
    </>
  )
}

export default App;