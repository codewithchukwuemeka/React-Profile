import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProfileCard from './ProfileCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <div className='proping'>
      <ProfileCard 
    Image =  "mypic"
    Name ="Francis Ngene"
    Occupation = "Frontend Developer"
    Access = "Github.com/Chukwuemeka"
    About = " Professionally i am a web  develper, and you cant stop that"
    interest = " i love too much moneyyyy damn  it!"
    />
     <ProfileCard 
      Image =  "mypic"
    Name ="Elon Musk"
    Occupation = "Investor"
    Access = "Github.com/Elon Musk"
    About = " Professionally i am an Investor, and you cant stop that"
    interest = " i love too much moneyyyy damn  it!"
     />
      <ProfileCard 
      Image =  "mypic"
    Name ="Robot Osi Osagie Eboh"
    Occupation = "Robotics"
    Access = "Github.com/Eboh "
    About = " Professionally i am a Robotics Engineer , and you cant stop that"
    interest = " i love too much moneyyyy damn it!"
      />
       <ProfileCard 
       Image =  "mypic"
    Name ="Programmer Victor"
    Occupation = "FullStack Developer"
    Access = "Github.com/victor"
    About = " Professionally i am a Programmer, and you cant stop that"
    interest = " i love too much moneyyyy damn"
       />

    </div>

  </StrictMode>,
)
