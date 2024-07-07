import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './style.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
