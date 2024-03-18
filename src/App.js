import './style.css'
import {useState} from 'react'
import Container3D from './components/canvas/Container3D.js'
import Home from './components/sections/Home.js';

export default function App() {
    const [page, setPage] = useState("Home")
    const [enter, setEnter] = useState(true)

    return (<>
        <Home page={page} onSetPage={setPage} enter={enter}/>
        <Container3D page={page} enter={enter} onSetEnter={setEnter}/>
    </>
    )
}
