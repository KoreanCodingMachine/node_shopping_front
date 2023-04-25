import { createBrowserRouter } from "react-router-dom";
import { Login, Signup, Profile, Order, Product, ProductDetail } from './pages'

export const router = createBrowserRouter([
    {
       path: '/',
       element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/profile',
        element: <Profile />
    },
    {
        path:'/order',
        element: <Order />
    },
    {
        path:'/product',
        element: <Product />
    },
    {
        path:'/product/:id',
        element: <ProductDetail />
    }
])