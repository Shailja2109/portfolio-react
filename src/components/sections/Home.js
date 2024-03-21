import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe.js'
import Experience from './Experience.js'

function Home({ page, onSetPage, enter, controls }) {
    const [popUp, setPopUp] = useState(0)

    console.log(page, enter, controls)

    useEffect(() => {
        if (popUp != 0) {
            onSetPage('Home')
        }
    }, [popUp])

    useEffect(() => {
        if (page != 'Home') {
            setPopUp(0)
        }
    }, [page])

    return (<div className="text-lg flex flex-wrap align-center text-center justify-center">
        {(!enter && page === 'Home' && controls) && <>
            {/* <button id="ControlPannel">Control Pannel</button> */}
            <div id="MissionControl">
                <div className='flex flex-wrap justify-center'>
                    <button id="b1" onClick={() => { page === 'Education' ? onSetPage('Home') : onSetPage('Education') }}>Education</button>
                    <button id="b2" onClick={() => { page === 'Experience' ? onSetPage('Home') : onSetPage('Experience') }}>Experience</button>
                    <button id="b3" onClick={() => { page === 'AboutMe' ? onSetPage('Home') : onSetPage('AboutMe') }}>About Me</button>
                    {/* <button id="b5">.</button> */}
                    <button id="b4"><a href='https://3dconfiguratorshailja.netlify.app/'>3D Configurator</a></button>
                    {/* <button id="b6">.</button> */}
                </div>
                <div id="MissionControl-Heading" className='flex justify-center'>
                    <div id="m1" onClick={(e) => { popUp === 1 ? setPopUp(0) : setPopUp(1) }}>
                        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/ffffff/new-post.png" alt="new-post" />
                    </div>
                    <a id="m2" href="https://github.com/Shailja2109">
                        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="github" />
                    </a>
                    <a id="m3" href="https://www.linkedin.com/in/shailja-atkotiya/">
                        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" />
                    </a>
                    <a id="m4" href="https://docs.google.com/document/d/1LWCXj6iP-TQcl1B_H8UoZXIg7cdGEM0Z7hVMr2NCdDI/edit#heading=h.g7xuyr6aqixk">
                        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/ffffff/resume.png" alt="new-post" />
                    </a>
                    <div id="m5" onClick={(e) => { popUp === 2 ? setPopUp(0) : setPopUp(2) }}>
                        <img width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/ffffff/phone--v1.png" alt="phone--v1" />
                    </div>
                </div>
                <div>
                    {popUp === 1 && <div className="popUpBox">{"shailjaatkotiya@gmail.com"}</div>}
                    {popUp === 2 && <div className="popUpBox">{"7984064480"}</div>}
                </div>
            </div>
        </>}
        <div className='flex flex-wrap justify-center'>
            {page === 'AboutMe' && <AboutMe onSetPage={onSetPage} />}
            {page === 'Experience' && <Experience onSetPage={onSetPage} />}
            {page === 'Education' && <button id='BackButton' onClick={() => { onSetPage('Home') }}>back</button>
            }
            {page === 'Configurator' && <FileDrop onSetPage={onSetPage} />}
        </div>
    </div>)
}

export default Home