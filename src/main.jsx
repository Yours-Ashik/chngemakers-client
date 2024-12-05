import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Pages/Root.jsx';
import AllCampaign from './assets/Pages/AllCampaign.jsx';
import AddCampaign from './assets/Pages/AddCampaign.jsx';
import MyCampaign from './assets/Pages/MyCampaign.jsx';
import Login from './assets/Pages/Login.jsx';
import Register from './assets/Pages/Register.jsx';
import Home from './assets/Pages/Home.jsx';
import Provider from './assets/Provider/Provider.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/allCampaign',
        element:<AllCampaign></AllCampaign>,
        loader: () => fetch('http://localhost:5000/campaign')
      },
      {
        path:'/addCampaign',
        element:<AddCampaign></AddCampaign>
      },
      {
        path:'/myCampaign',
        element:<MyCampaign></MyCampaign>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
