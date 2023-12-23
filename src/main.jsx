import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/Components/Header'
import Offers from '../src/Components/Offers'
import Promos from './Components/Promos'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Offers/>
    <Promos/>
    <Menu/>
    <Footer/>
  </React.StrictMode>,
)
