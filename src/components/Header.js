import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div class="header">
        <div class="nav">
            <a href="" class="a1">
                <img src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab21dde67c22de2b6d61b_back.svg" loading="lazy" alt="img" class="a1-img" />
            </a>
            <a href="" class="a2">
                multiplayer
            </a>
            <div class="bar1">/</div>
            <a href="" class="a3">
                server Browser
            </a>
            <div class="bar2">/</div>
        </div>
        <div class="header-text">server info</div>
    </div>
  )
}

export default Header