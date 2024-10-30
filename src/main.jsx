import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Countries from './Components/Countries';
import ShowDetails from './Components/ShowDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path:"/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      {
        path:"/features",
        element: <Features></Features>,
      },
      {
        path:"/countries",
        element:<Countries></Countries>
      },
      {
        path:"/details",
        element:<ShowDetails></ShowDetails>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
