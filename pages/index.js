import React, { useState, useEffect } from 'react'
import Head from '../components/head'
import SvgMovie from '../components/SvgMovie'

const Home = () => {
  const [dark, setDark] = useState(false);
  const [title, setTitle] = useState("turn on movie mode!");

  const toggleFullscreen = (darkMode) => {
    if (darkMode === true && (document.fullscreenEnabled || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
      const i = document.getElementById("movieTime");
      if (i.requestFullscreen) {
        i.requestFullscreen();
      } else if (i.webkitRequestFullscreen) {
        i.webkitRequestFullscreen();
      } else if (i.mozRequestFullScreen) {
        i.mozRequestFullScreen();
      } else if (i.msRequestFullscreen) {
        i.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Selected theme is ${((dark) ? 'dark' : 'light')}`;
    ((dark) ? setTitle("movie mode") : setTitle("turn on movie mode!"))

    document.documentElement.setAttribute('data-theme', ((dark) ? 'dark' : 'light'))
  });

  return (
    <div id="movieTime" className="frame">
      <Head />
      <div className="hero">
        <h1 className="title animate-fade">{title}</h1>
        <button onClick={() => { setDark(!dark); toggleFullscreen(!dark) }} className="btn" type="button"><span>Switch</span></button>
        <div className="hero-movieicon">
          <SvgMovie height="20em" width="20em" alt="" />
        </div>
      </div>
      <div className="footer">
        <p className="love">Made with <img src="/static/heart.png" height="14px" width="14px" alt="love" /> by Jens de Rond |
          <a href="//github.com/Jensderond/movie-time" target="_blank" rel="noopener noreferrer"><span>Github</span></a> |
          <a href="//twitter.com/Jensderond/" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a></p>
      </div>
    </div>
  );
}

export default Home