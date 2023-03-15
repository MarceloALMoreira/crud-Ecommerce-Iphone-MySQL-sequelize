import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './components/Menu'
import './index.css'
import Phone from './components/iPhone'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Menu />
    <Phone />
  </React.StrictMode>,
)
