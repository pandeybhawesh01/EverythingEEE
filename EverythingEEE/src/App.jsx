/* eslint-disable no-unused-vars */
import HomePage from './Pages/HomePage';
import Resources from './Pages/Resources'
import Card from './Components/Resources/Cards'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import image1 from './assets/OIG1.jpeg';
import './App.css'
function App() {
      const router = createBrowserRouter([
            
            {
                  path:'/',
                  element:<> <HomePage></HomePage></>
            },
            {
                  path:'/resources',
                  element:<><Resources></Resources></>
            },
            {
                  path:'/year1',
                  element:<><Resources></Resources></>
            },
            {
                  path:'/year2',
                  element:<><Resources></Resources></>
            },
            {
                  path:'/year3',
                  element:<><Resources></Resources></>
            },
            {
                  path:'/year4',
                  element:<><Resources></Resources></>
            }

      ])
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
