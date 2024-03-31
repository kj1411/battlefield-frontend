import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups';
import { RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import './sidemenuright.css'

const SideMenuRight = () => {
  return (
    <div className='sidemenuright'>
      <div>
        <GroupsIcon />
        <div>SQUAD</div>
        <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg' alt="squad" />
        <div>SQUAD JOIN</div>
      </div>
      <div>
        <RadioButtonChecked />
        <div>ONLINE</div>
        <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png' alt="jone" />
        <div>Mary Jone<br /> ONLINE</div>
      </div>
      <div>
        <RadioButtonUnchecked />
        <div>OFFLINE</div>
        <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png' alt="420" />
        <div>420 <br /> OFFLINE</div>
      </div>
    </div>
  )
}

export default SideMenuRight