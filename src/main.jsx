import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PageRouter from './PageRouter.jsx'
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// import firebase from "firebase"

const app = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

    authDomain: 'react-performance-review-47370.firebaseapp.com',

    projectId: 'react-performance-review-47370',

    storageBucket: 'react-performance-review-47370.appspot.com',

    messagingSenderId: '1002900095159',

    appId: '1:1002900095159:web:1860d9970c1cb41ef9cd32',
})
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const Context = createContext(null)

ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <Context.Provider value={{ auth }}>
                <PageRouter />
            </Context.Provider>
        </BrowserRouter>
)
