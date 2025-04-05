import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from './pages/Root.tsx'
import Landing from './pages/Landing.tsx'


const  router = createBrowserRouter(
    createRoutesFromElements(
        <Route path= "/" element={<Root/>}>
        <Route path='' element={<Landing/>}/>
        </Route>
    )
)
createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
