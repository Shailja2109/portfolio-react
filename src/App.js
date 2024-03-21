import './style.css'
import { useState, useEffect } from 'react'
import Container3D from './components/canvas/Container3D.js'
import Home from './components/sections/Home.js';
import Loader from './Loader.js'

export default function App() {
    const [page, setPage] = useState("Home")
    const [enter, setEnter] = useState(true)
    const [controls, setControls] = useState(false)
    return (
    <>
        <Home page={page} onSetPage={setPage} enter={enter} controls={controls}/>
        <Container3D page={page} enter={enter} onSetEnter={setEnter} controls={controls} onSetControls={setControls}/>
    </>
    )
}
