import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='text-5xl'>This is Quiz Mania</h2>
  </StrictMode>,
)
