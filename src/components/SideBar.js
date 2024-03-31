import React from 'react'
import './SideBar.css'
import sidebarContent from './sidebarContent'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SideBar = () => {

  const renderSidebarContent = () => {

    const lastWord = (txt)=>{
      const words = txt.split(' ')
      return words[words.length-1]
    }

    return sidebarContent.map(obj => (
        <a className={`sba1 sb${lastWord(obj.a_text)}`} title={obj.a_text} key={obj.a_text} href={obj.a_link} style={{backgroundImage:`url(${obj.image_link})`}}></a>
    ));
  }
  
  return (
    <div className='sidebar'>
      <div className='sbcontent'>
        {renderSidebarContent()}
      </div>
      <div>
          <a className={`sba1 sbhelp`} title="help" href="https://battlefield-4-webflow-rebuild.webflow.io/game?tab=tab-help" style={{backgroundImage:`url("https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601aafabd71ff7186d1c97d5_side-menu__help.svg")`,marginLeft:"5px", backgroundSize:"20px"}}>
        </a>
      </div>
      <div>
        <ExitToAppIcon title="quit" />
      </div>
    </div>
  )
}

export default SideBar