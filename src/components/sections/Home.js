import React, { useEffect, useState } from 'react';
import AboutMe from './AboutMe.js'
import Experience from './Experience.js'

function Home({ page, onSetPage, enter }) {
    const [popUp, setPopUp] = useState(0)
    console.log("Home")
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

    return (<div className="text-lg justify-center">
        {(!enter && page === 'Home' || page === 'Education') && <>
            <div id="MissionControl">
                <h2 className="text-2xl">Missions</h2>
                <div className="mb-2">
                    <span className=" mr-2">Mission 1:</span>
                    <button onClick={() => { page === 'Education' ? onSetPage('Home') : onSetPage('Education') }}>Education</button>
                </div>
                <div className="mb-2">
                    <span className=" mr-2">Mission 2:</span>
                    <button onClick={() => { page === 'Experience' ? onSetPage('Home') : onSetPage('Experience') }}>Experience</button>
                </div>
                <div className="mb-2">
                    <span className=" mr-2">Mission 3:</span>
                    <button onClick={() => { page === 'AboutMe' ? onSetPage('Home') : onSetPage('AboutMe') }}>About Me</button>
                </div>
                <div className="mb-2">
                    <span className=" mr-2">Mission 4:</span>
                    <a className='underline' href='https://3dconfiguratorshailja.netlify.app/'>3D Configurator</a>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {/* <button onClick={(e) => { popUp === 1 ? setPopUp(0) : setPopUp(1) }}> */}
                    {/* <img className='p-2 m-2' width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png" alt="new-post" /> */}
                    {/* </button> */}
                    <a href="https://github.com/Shailja2109">
                        <img className='p-2 m-2' width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/ffffff/github.png" alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/shailja-atkotiya/">
                        <img className='p-2 m-2' width="50" height="50" src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="linkedin" />
                    </a>
                    <a href="https://docs.google.com/document/d/1LWCXj6iP-TQcl1B_H8UoZXIg7cdGEM0Z7hVMr2NCdDI/edit#heading=h.g7xuyr6aqixk">
                        <img className='p-2 m-2' width="50" height="50" src="https://img.icons8.com/ios-glyphs/50/ffffff/resume.png" alt="new-post" />
                    </a>
                    {/* <button onClick={(e) => { popUp === 2 ? setPopUp(0) : setPopUp(2) }}> */}
                    {/* <img className='p-2 m-2' width="50" height="50" src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png" alt="phone--v1" /> */}
                    {/* </button> */}
                </div>
                <div className='flex flex-col'>
                    <div className='justify-center text-center flex flex-row'><img className='p-1 m-1' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/new-post.png" alt="new-post" /><p className='self-center'>shailjaatkotiya@gmail.com</p></div>
                    <div className='flex flex-row'><img className='p-1 m-1' width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/ffffff/phone--v1.png" alt="phone--v1" /><p className='self-center'>7984064480</p></div>
                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                {popUp === 1 && <div className="popUpBox">{"shailjaatkotiya@gmail.com"}</div>}
                {popUp === 2 && <div className="popUpBox">{"7984064480"}</div>}
            </div>
        </>}
        <div className='flex flex-wrap justify-center'>
            {page === 'AboutMe' && <AboutMe onSetPage={onSetPage} />}
            {page === 'Experience' && <Experience onSetPage={onSetPage} />}
            {page === 'Configurator' && <FileDrop onSetPage={onSetPage} />}
        </div>
    </div>)
}

export default Home