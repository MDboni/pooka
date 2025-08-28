import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import DetailsPage from './Pages/DetailsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>
      },
      {
        path:"/detail/:bookId",
        element:<DetailsPage></DetailsPage>,
        loader : ()=>fetch('/booksData.json')
      },
      {
        path:"About",
        element:<AboutPage></AboutPage>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
