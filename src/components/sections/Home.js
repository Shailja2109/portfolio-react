import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe.js'
import Experience from './Experience.js'

function Home({ onSetControls, page, onSetPage, enter }) {
    const [popUp, setPopUp] = useState(0)
    const [buttons, setButtons] = useState(0)

    console.log("Home", buttons)
    useEffect(() => {
        if (popUp != 0) {
            onSetPage('Home')
        }
        if(buttons === 1){
            onSetControls(true)
        }
    }, [popUp, buttons])

    useEffect(() => {
        if (page != 'Home') {
            setPopUp(0)
        }
    }, [page])

    return (<div className="text-lg align-center text-center justify-center">
        {(!enter && page === 'Home') && <>
            <div id="MissionControl">
                <button id="MissionControl-Heading" onClick={() => { buttons === 0 ? setButtons(1) : setButtons(0) }}>
                    {popUp === 0 && <div className="popUpBox"><h1>Start</h1><h1>Missions</h1></div>}
                    {popUp === 1 && <div className="popUpBox">{"shailjaatkotiya"} <br /> {"@gmail.com"}</div>}
                    {popUp === 2 && <div className="popUpBox">{"7984064480"}</div>}
                </button>
                {buttons === 1 && popUp === 0 && <div id="Pannel" className='flex flex-wrap justify-center'>
                    <button id="b1" className='p-1 m-1 underline' onClick={() => { page === 'Education' ? onSetPage('Home') : onSetPage('Education') }}>Education</button>
                    <button id="b2" className='p-1 m-1 underline' onClick={() => { page === 'Experience' ? onSetPage('Home') : onSetPage('Experience') }}>Experience</button>
                    <button id="b3" className='p-1 m-1 underline' onClick={() => { page === 'AboutMe' ? onSetPage('Home') : onSetPage('AboutMe') }}>About Me</button>
                    <button id="b4" className='p-1 m-1 underline'><a href='https://3dconfiguratorshailja.netlify.app/'>Configurator</a></button>
                </div>
                }
                {buttons === 0 && <div className='flex flex-wrap justify-center'>
                    <div id="m1" onClick={(e) => { popUp === 1 ? setPopUp(0) : setPopUp(1) }}>
                        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/4E4F47/new-post.png" alt="mail" />
                    </div>
                    <a id="m2" href="https://github.com/Shailja2109">
                        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/4E4F47/github.png" alt="github" />
                    </a>
                    <a id="m3" href="https://www.linkedin.com/in/shailja-atkotiya/">
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/4E4F47/linkedin.png" alt="linkedin" />
                    </a>
                    <a id="m4" href="https://docs.google.com/document/d/1LWCXj6iP-TQcl1B_H8UoZXIg7cdGEM0Z7hVMr2NCdDI/edit#heading=h.g7xuyr6aqixk">
                        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/4E4F47/resume.png" alt="resume" />
                    </a>
                    <div id="m5" onClick={(e) => { popUp === 2 ? setPopUp(0) : setPopUp(2) }}>
                        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/4E4F47/phone--v1.png" alt="contact" />
                    </div>
                </div>}
            </div>
        </>}
        <div className='flex flex-wrap justify-center'>
            {page === 'AboutMe' && <AboutMe onSetPage={onSetPage} />}
            {page === 'Experience' && <Experience onSetPage={onSetPage} />}
            {page === 'Education' && <button id='BackButton' onClick={() => { onSetPage('Home') }}>back</button>}
            {page === 'Configurator' && <FileDrop onSetPage={onSetPage} />}
        </div>
    </div>)
}

export default Home