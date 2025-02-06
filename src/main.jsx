import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import SimpleForm from './components/SimpleForm/SimpleForm.jsx';
import Grandpa from './components/Grandpa/Grandpa.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/form",
        element: <SimpleForm></SimpleForm>,
      },
      {
        path:'/context-api',
        element: <Grandpa></Grandpa>
      }
    ]
      
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
