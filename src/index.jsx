import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import ErrorPage from './components/error-page';
import Products from './components/Products';
import './css/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Products/>,
        errorElement: <ErrorPage/>
      },
      {
        path: '/cart',
        element: <Cart/>,
        errorElement: <ErrorPage/>
      }
    ]
  },
  {
    path: '/checkout',
    element: <Checkout/>,
    errorElement: <ErrorPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
