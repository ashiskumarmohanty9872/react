import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'



const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"user/:userid",
          element:<User/>
        },
        {
          loader: githubInfoLoader,
          path:"github",
          element:<Github/>

        }
      ]
    }
])

// Another way to create router element

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={Layout}>
//       <Route path='' element={<Home/>} />
//       <Route path='about' element={<About/>} />
//       <Route path='contact' element={<Contact/>} />
//       <Route path='user/:userid' element={<User/>} />
//     </Route>
//   )
// )




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
