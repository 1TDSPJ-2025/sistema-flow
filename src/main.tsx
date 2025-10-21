 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './styles.css'


import App from './App.tsx'
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx';
import Pagamento from './routes/Pagamento/index.tsx';
import Login from './routes/Login/index.tsx';


const router = createBrowserRouter([{
  path:"/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/pagamento", element: <Pagamento/>},
    {path:"/login", element: <Login/>},
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
