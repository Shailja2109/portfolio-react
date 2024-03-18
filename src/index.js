import './style.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App.js'
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)