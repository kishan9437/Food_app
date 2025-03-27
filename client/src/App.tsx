import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import MainLayout from './MainLayout'
import Signup from './auth/Signup'

const AppRouter = createBrowserRouter([
  {
    path : "/",
    element: <MainLayout/>,
    // children: [
    //   { 
    //     path: "/login", 
    //     element: <Login /> 
    //   }
    // ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup/>
  }
])
function App() {

  return (
    <main>
      <RouterProvider router={AppRouter}>

      </RouterProvider>
      
    </main>
  )
}

export default App
