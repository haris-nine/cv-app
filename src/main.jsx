import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ResumeBuilder from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResumeBuilder />
  </StrictMode>
)
