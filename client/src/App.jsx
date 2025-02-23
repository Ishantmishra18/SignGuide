import React from 'react'
import  Home from './Pages/home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'
import Nav from './Component/navbar.jsx'
import Video from './Pages/video.jsx'
import Landing from './Pages/landing.jsx'
import { UserContextProvider } from './Context/user'
import Profile from './Pages/profile.jsx'
import Quiz from './Pages/quiz.jsx'
import Article from './Pages/article.jsx'
import QuizPage from './Pages/quizpage.jsx'



const App = () => {  

  const router=createBrowserRouter([
    {
      path:'/',
      element:<>
      <Nav/>
      <Landing/>
      </>
    },{
       path:'/videos',
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
      path:'/videos/:param',
      element:<>
      <Nav/>
      <Video/>
      </>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/quiz',
      element:<>
      <Nav/>
      <Quiz/>
      </>
    },
    {
      path:'/quiz/:param',
      element:<>
      <Nav/>
      <QuizPage/>
      </>
    },
    {
      path:'/articles',
      element:<>
      <Nav/>
      <Article/>
      </>
    }
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