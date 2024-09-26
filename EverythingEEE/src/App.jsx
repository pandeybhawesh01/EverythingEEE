/* eslint-disable no-unused-vars */
import HomePage from './Pages/HomePage';
import Resources from './Pages/Resources'
import Card from './Components/Resources/Cards'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import image1 from './assets/OIG1.jpeg';
import navbar from './Components/navbar'
import './App.css'
import Year1 from './Pages/Year1';
import Year2 from './Pages/Year2';
//import Year3 from './Pages/Year3';
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
                  element:<><Year1></Year1></>
            },
            {
                  path:'/year2',
                  element:<><Year2></Year2></>
            },
            /*{
                  path:'/year3',
                  element:<><Year3></Year3></>
            },*/
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
