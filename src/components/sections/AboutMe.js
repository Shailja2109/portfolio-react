import React from 'react';
const AboutMe = ({onSetPage}) => {
    console.log("Inside page about me")
    return (<div id="AboutMe" className='bg-dark-violet text-white'>
        {/* <img id='AboutMeImage' src='./WhatsApp Image 2024-03-15 at 16.41.43.jpeg'></img>
        <p id='AboutMeText'>
            Hey there! Welcome to the section that people hardly read. 
            I'm a passionate 3D Developer with a knack for turning innovative ideas into reality. 
            You can check out proof of my competence in computer engineering in the education and experience section.
            To know about me: I'm left-handed with the core characteristic of being creative. 
            It's hard to drag me away from my addiction to solving the things I'm onto. 
            However, I manage to spike my dopamine with adventures, dancing, and traveling. Like everyone, 
            I too have a dark side during which I like to draw. I'm not a by-the-books person; 
            I like to go againest the trends and laws and work, thinking out of the box.
        </p> */}
        <button id='BackButton' onClick={() => {onSetPage('Home')}}>back</button>
    </div>)
}

export default AboutMe