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
import Year3 from './Pages/Year3';
import Year4 from './Pages/Year4';
import Sem5 from './Pages/Sem5';
import Sem6 from './Pages/Sem6';
import Sem7 from './Pages/Sem7';
import Sem8 from './Pages/Sem8';
import Abt from './Pages/Aboutus';
import Contact from './Pages/ContactUs';
import Alumni from './Pages/Alumni';
import Signin from './Components/signin'
import Form from'./Components/form.jsx'
import Landing from './Components/Landing.jsx';
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
            {
                  path:'/year3',
                  element:<><Year3></Year3></>
            },
            {
                  path:'/year4',
                  element:<><Year4></Year4></>
            },
            {
                  path:'/Sem5',
                  element:<><Sem5></Sem5></>
            },
            {
                  path:'/Sem6',
                  element:<><Sem6></Sem6></>
            },
            {
                  path:'/Sem&',
                  element:<><Sem7></Sem7></>
            },
            {
                  path:'/Sem8',
                  element:<><Sem8></Sem8></>
            },
            {
                  path:'/about',
                  element:<><Abt></Abt></>
            },
            {
                  path:'/contact',
                  element:<><Contact></Contact></>
            },
            {
                  path:'/alumni',
                  element:<><Alumni></Alumni></>
            },
            {
                  path:'/signin',
                  element:<><Signin></Signin></>
            },
            {
                  path:'/form',
                  element:<><Form></Form></>
            },
            {
                  path:'/landing',
                  element:<><Landing></Landing></>
            }

      ])
  return (
    <>
      <RouterProvider router ={router}/>
    </>
  )
}

export default App
