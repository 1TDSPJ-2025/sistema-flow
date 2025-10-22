import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import './styles.css'


import App from './App.tsx'
import Error from './routes/Error/index.tsx';
import Home from './routes/Home/index.tsx';
import Pagamento from './routes/Pagamento/index.tsx';
import Login from './routes/Login/index.tsx';
import CriarConta from './routes/CriarConta/index.tsx';
import { Provinder } from './Provinder/Provinder.tsx';



const router = createBrowserRouter([{
  path:"/", element: <App/>, errorElement: <Error/>, children:[
    {path:"/", element: <Home/>},
    {path:"/pagamento", element: <Pagamento/>},
    {path:"/login", element: <Login/>},
    {path:"/criarConta", element: <CriarConta/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provinder>
      <RouterProvider router={router} />
    </Provinder>
  </StrictMode>,
)
