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
import Error from './assets/Components/Error.jsx';
import PrivateRoutes from './assets/PrivateRoutes.jsx';
import Details from './assets/Components/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/campaign')
      },
      {
        path:'/allCampaign',
        element:<PrivateRoutes>
          <AllCampaign></AllCampaign>
        </PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/campaign')
      },
      {
        path:'/addCampaign',
        element:<PrivateRoutes>
          <AddCampaign></AddCampaign>
        </PrivateRoutes>
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
      {
        path: '/details/:id',
        element:<PrivateRoutes>
          <Details></Details>
        </PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
      }
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
