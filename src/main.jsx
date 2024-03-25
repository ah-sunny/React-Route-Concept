import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Component/About/About';
import Contact from './Component/Contact/Users';
import Home from './Component/Home/Home';
import Main from './Component/Main/HomePage';

import DetailsOneUSer from './Component/Contact/DetailsOneUSer';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import DetailsMeal from './Component/MealDB/DetailsMeal';
import MealDB from './Component/MealDB/MealDB';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/home',
        element: <Home></Home>,
      },
      {
        path : '/user',
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element : <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path : '/user/:userId',
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element : <DetailsOneUSer></DetailsOneUSer>
      },
      {
        path : '/mealdb',
        loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=A'),
        element: <MealDB></MealDB>
      },
      {
        path: '/mealdb/:mealId',
        loader : ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
        element: <DetailsMeal></DetailsMeal>
      }
     
      
      
    ]
  
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
