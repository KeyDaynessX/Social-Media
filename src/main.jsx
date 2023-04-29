import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

let posts = [
  {id:'1', message:'Hello World'},
  {id:'2', message:'Hello World'},
  {id:'3', message:'Hello World'},
]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App posts={posts}/>
    </BrowserRouter>
  </React.StrictMode>,
)
