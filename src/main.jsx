import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PageRouter from './PageRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <PageRouter />
    </BrowserRouter>
)
