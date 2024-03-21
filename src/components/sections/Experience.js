import React, { useState } from 'react';
import { Carousel } from 'primereact/carousel';

const productTemplate = (product) => {
    return (
        <div id="exp-skills">
            <p>{product}</p>
        </div>
    );
};
const Experience = ({ onSetPage }) => {
    const [exp, setExp] = useState('None')
    const [project, setProject] = useState('None')

    const skills = ["Three.js", "React", "C# .Net", "Javacript", "Python", "Azure", "PostgreSQL", "Docker", "OpenCV"]
    return (<div id="Experience" className='text-center justify-center m-2 p-2 rounded-lg shadow-lg bg-purple-900 text-white'>
        {exp === 'None' && <div id="Companies">
            <div id="WebOccult">
                <img onClick={() => { setExp('Web') }} src='./Weboccult.png'></img>
            </div>
            <div id="Prototech">
                <img onClick={() => { setExp('Prot') }} src='./Prototech.png'></img>
            </div>
            <div id="Promact">
                <img onClick={() => { setExp('Prom') }} src='./Promact.png'></img>
            </div>
        </div>
        }
        <div>
            {exp === 'Web' && <>
                <div className="exp-text">
                    <h1>PPROJECTS</h1>
                    <div className='exp-buttons'>
                        <button onClick={() => { setProject('Ammazza') }}>Ammazza</button>
                        <button onClick={() => { setProject('Furniture') }}>Furniture AI</button>
                    </div>
                    {project === 'None' && <p>
                        Built applications across mobile, iOS, and desktop using Unity and C#.
                        Created a comprehensive web application from the ground up, incorporating JS and libraries like three.js.
                        Utilized Docker and Amazon ECR for containerization of flask & Django applications created for REST APIs.
                        Employed Opencv.js and Canvas elements to enable Image Visualization & Manipulation.
                        Developed a web tool for rendering sizable 3D models.
                    </p>}
                    {project === 'Ammazza' && <p>
                        <a className='underline' href='https://tryon.ammazza.me/'>Ammazza-Web AR</a> is a virtual tryon used by Jewellers to give users an immersive experience for trying jewelry products. It uses a mediapipe face detection library to detect faces and render jewelry on a person’s face.
                        Worked as a Software Developer by creating the entire product from scratch in Javascript. I managed to integrate the ML libraries in JS to detect face and hands and used Three.js and for rendering 3D Objects perfectly on the face, neck and hands.

                    </p>}
                    {project === 'Furniture' && <p>
                        Furniture AI is a Web AR project used for giving the experience 3D furniture in your space. I worked on rendering 3D & 2D objects on a image using three.js and konvajs. It has features to paint walls of the house using OpenCV floodfill and feature to remove any object from the image using DL.
                    </p>}
                </div>
            </>}
            {exp === 'Prot' && <>
                <div className="exp-text">
                    <h2>PPROJECTS</h2>
                    <div className='exp-buttons'>
                        <button onClick={() => { setProject('SyncroDB') }}>SyncroDB</button>
                        <button onClick={() => { setProject('3DConfigurator') }}>3D Configurator</button>
                    </div>
                    {project === 'None' && <p>
                        Transferred project structure to Azure via a designed system using .Net Web APIs.
                        Implemented client-requested features while optimizing rendering speed with a node service.
                        Devised a lazy loading algorithm for faster model loading.
                        Addressed bugs and enhanced functionalities, ensuring prompt client communication.
                        Managed deliverables, deadlines, and consistent communication.
                    </p>}
                    {project === 'SyncroDB' && <p>
                        SyncroDB is an application where users can use the APIs and app to upload their large files using a signed url.
                        For this project, I worked as the lead developers and created the complete system design along with the development of APIs using ASP .Net Core Web APIs.
                        Used Azure Compute, Storage and PostgreSQL Services to publish the entire application to the cloud.
                        Used Azure AD’s Microsoft Provider for authenticating users to access the application.
                    </p>}
                    {project === '3DConfigurator' && <p>
                        PCS Viewer is a 3D Configurator library used for viewing 3D rendered objects and heavy models along with various functionalities that can be used to explode, animate, transform specific parts of 3D models.
                        Worked as a full time Software Developer helping team in adding features and functionality to load, transform and view specific meshes in the entire 3D model.
                        I also handled client communication along with brining robust solution for making 3D model loading faster 75% using Three.js
                    </p>}
                </div>
            </>}
            {exp === 'Prom' && <>
                <div className="exp-text">
                    <a className='underline' href='https://causeverse.io/demos/'>Causeverse</a>
                    <p>
                        Created rooms using Croquet.io and Three.js.
                        Created an admin panel to dynamically change image and videos in the room created.
                        Created APIs using C# and Beamable Services and to store the image urls added to the server.
                        Addressed bugs and enhanced functionalities, ensuring prompt client communication.
                        Managed deliverables, deadlines, and consistent communication.
                    </p>
                </div>
            </>}
            {/* {exp != 'None' && <div id="card"> */}
            {/* </div>} */}
        </div>
        <Carousel id="card" value={skills} numVisible={3} numScroll={3} itemTemplate={productTemplate} />
        <button id='BackButton' onClick={() => { if(exp != 'None'){setExp('None')}else{onSetPage('Home')}  }}>back</button>
    </div >)
}

export default Experience