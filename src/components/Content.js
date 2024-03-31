import React, { useEffect, useState } from 'react'
import './Content.css'
import { Button } from '@mui/material'
import { getDetails } from '../MyServices/serverAxios'

const Content = () => {

    const [settingsArray,setSettingsArray] = useState([])
    const [mapArray,setMapArray] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await getDetails()
            console.log(response)
            if(!response.success){
                console.log(response.data)
                return
            }
            setSettingsArray(response.data.settings)
            setMapArray(response.data.maps)
        }
        fetchData()
    },[])

    function createMarkup(setting) {
        let html = '';
        for (const [key, value] of Object.entries(setting)) {
          if(key==="_id") continue;
          html += `<div class="server_setting-text-key">${key}</div> <div class="server_setting-text-value">${value}</div>`;
        }
        return html;
    }

    function RenderSettings() {
        return (
          <div class="container">
            {settingsArray.map((section, index) => (
              <div key={index} className="server_settings">
                <div className="server_settings-h">{section.heading}</div>
                {section.settings.map((setting, idx) => (
                  <div key={idx} className="server_setting" dangerouslySetInnerHTML={{ __html: createMarkup(setting) }} />
                ))}
              </div>
            ))}
          </div>
        );
      }

      const RenderMaps = () => {

        const handleMouseEnter = (event) => {
            event.currentTarget.style.backgroundColor = 'white';
            event.currentTarget.style.color = 'black';
          };
        
          const handleMouseLeave = (event) => {
            event.currentTarget.style.backgroundColor = 'rgba(16, 16, 16, 0.5)';
            event.currentTarget.style.color = 'white';
          };
      
        return (
          mapArray.map((map, index) => (
            <div key={index} class="server_map" style={{backgroundColor: 'rgba(16, 16, 16, 0.5)'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div class="server_map-image-w" style={{width:"inherit", height:"inherit"}}>
                <div class="server_map-image-overlay"></div>
                <img src={map.imageUrl} loading="eager" alt="" class="server_map-image" style={{transform: 'translate3d(0px, 0vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', width:'inherit' , height:'inherit'}} />
              </div>
              <div class="map-content">
              <div class="server_map-mode" style={{color: 'inherit' , backgroundColor:'inherit'}}>{map.mode}</div>
              <div class="server_map-mapn" style={{color: 'inherit' , backgroundColor:'inherit'}}>{map.mapName}</div>
              </div>
            </div>
          ))
        );
      };


  return (
    <div class="content">
        <div class="info">
            <div class="server_name">! RC3-BASEMAPS</div>
            <div class="server__info">
                <img alt="" loading="lazy" style={{margin:"1% 0.5% -0.2% 0%"}} src="https://uploads-ssl.webflow.com/6022d2c0d37628c87d9e16ab/6022d74ce15ae958f20e10a9_america-flag.svg" class="server__flag" />
                <div class="server__mode" style={{display:"inline",fontSize:"small"}}>conquest large</div>
                <div class="server__linfo-line" style={{display:"inline" ,fontSize:"small"}}> - </div>
                <div class="server__game" style={{display:"inline" ,fontSize:"small"}}>Lancang Dam</div>
                <div class="server__linfo-line" style={{display:"inline" ,fontSize:"small"}}> - </div>
                <div class="server__preset" style={{display:"inline" ,fontSize:"small"}}>Custom</div>
                <div class="server__linfo-line" style={{display:"inline" ,fontSize:"small"}}> - </div>
                <div class="server__no-hz" style={{display:"inline" ,fontSize:"small"}}>60 </div>
                <div class="server__hz" style={{display:"inline" ,fontSize:"small"}}>hz</div>
            </div>
            <div class="server__desc" style={{ fontSize:"small", marginTop:"1%"}}>
                Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord 
                <br />https://discord.gg/3r5NK4d
            </div>
        </div>

        <div class="server_buttons">
            <Button variant="outlined" style={{margin:"1% 0.5%" , borderColor:"white" , padding:"0.5% 5%" , borderRadius:"0"}}>JOIN</Button>
            <Button variant="outlined" style={{margin:"1% 0.5%" , borderColor:"white" , padding:"0.5% 5%" , borderRadius:"0"}}>SPECTATE</Button>
            <Button variant="outlined" style={{margin:"1% 0.5%" , borderColor:"white" , padding:"0.5% 5%" , borderRadius:"0"}}>JOIN AS COMMANDER</Button>
            <Button variant="outlined" style={{margin:"1% 0.5%" , borderColor:"white" , padding:"0.5% 5%" , borderRadius:"0"}}>
            <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b8abc05e847f1ac43f_favorites%20-%20white.svg" loading="lazy" height="15px" alt="img" class="server__favorite server__favorite--black" style={{display: "block"}} />
             13672</Button>
        </div>

        <div class="server__current-stats-w">
            <div class="server__current-stats">
                <div class="server__current-stats-h">players</div>
                <div class="server__current-stats-i-w">
                    <div class="server__current-stats-i">60</div>
                    <div class="server__current-stats-iline">/</div>
                    <div class="server__current-stats-i">64</div>
                </div>
            </div>
            <div class="server__current-stats">
                <div class="server__current-stats-h">ping</div>
                <div class="server__current-stats-i-w">
                    <div class="server__current-stats-i">104</div>
                    <div class="server__current-stats-ping">ms</div>
                </div>
            </div>
            <div class="server__current-stats">
                <div class="server__current-stats-h">tickrate</div>
                <div class="server__current-stats-i-w">
                    <div class="server__current-stats-i">60</div>
                    <div class="server__current-stats-hz">Hz</div>
                </div>
            </div>
        </div>

        {RenderSettings()}

        <div class="maps" style={{marginBottom:"2%"}}> MAP ROTATION</div>
        <div class="map-container">
        {RenderMaps()}
        </div>
    </div>
  )
}

export default Content