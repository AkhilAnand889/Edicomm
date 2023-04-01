import React from 'react'
import './first.css'

import Hello from './hello';
import { Link } from 'react-router-dom';
import Header from '../header';
import Temp from './temp';

function First() {
  return (
    <div>
        <h1 className='f'>
                Free Presets For Your
                 Next Video Project
            </h1>
            <h4 className='re'>Awesome Stock <Link to='/video'>Video Cuts</Link>, <Link to='/music'>Stock Music</Link>, <Link to='/sound'>Sound Effects</Link> & <Link>Project Files</Link>. All available for free!</h4>
         <div>
            <h5 className='py'>Stock Video</h5>
            <h5 className='view'>View More</h5>
             <div><div className='one'>
              <Link><img className='imgones' src="https://64.media.tumblr.com/f3b991f10c7b17f2d156bbe7a0239e63/tumblr_ovmpuonIo31viuar9o1_1280.gif" alt="Nature" /></Link>
              <Link to='/video'><p className='text'>Nature</p></Link>
              <p className='texts'>Stock Sound</p>
              <p className='text8'>Stock Projects</p>
              <p className='text9'>Stock Music</p>
              </div>
              <div className='one'>
              <img  className='imgtwo' src="https://c0.wallpaperflare.com/preview/735/16/901/aerial-photography-aerial-shot-bali-beach.jpg" alt=""/>
              <p className='text2'>Drone Shorts</p>
              </div>
              <div className='one'>
              <img className='imgthree'  src="https://thumbs.dreamstime.com/b/internet-information-technology-concept-laptop-computer-showing-data-processing-screen-122397310.jpg" alt="Nature" />
              <p className='text3'>Technology</p>
              </div>
              <div className='one'>
              <img className='img4'  src="https://www.teahub.io/photos/full/18-183487_full-hd-1080p-people-wallpapers-hd-desktop-backgrounds.jpg" alt="Nature" />
              <p className='text4'>People</p>
              </div>
            <br />
            <br />
            <br />
            <div className='rows'>
            <div className='one'>
              <img className='imgones' src="https://c4.wallpaperflare.com/wallpaper/431/655/785/cool-dance-hip-hop-hd-wallpaper-preview.jpg" alt="Nature" />
              <p className='text'>Hip Hop</p>
              </div>
              <div className='one'>
              <img className='imgtwo'  src="https://images.hdqwalls.com/wallpapers/ancient-man-saved-the-kid-b5.jpg" alt="Nature" />
              <p className='text2'>Cinematic</p>
              </div>
              <div className='one'>
              <img className='imgthree'  src="https://c4.wallpaperflare.com/wallpaper/951/7/705/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg" alt="Nature" />
              <p className='text3'>Ambient</p>
              </div>
              <div className='one'>
              <img className='img4'  src="https://wallpaperforu.com/wp-content/uploads/2022/08/Cyberpunk-2077-Johnny-Silverhand-Wallpaper-For-Pc.jpg" alt="Nature" />
              <p className='text4'>Funk</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rows'>
            <div className='one'>
              <img className='imgones' src="https://wallpapercave.com/wp/wp2928790.jpg" alt="Nature" />
              <p className='text'>Game</p>
              </div>
              <div className='one'>
              <img className='imgtwo'  src="https://c0.wallpaperflare.com/preview/368/960/936/fashion-lifestyle-traveler-travel.jpg" alt="Nature" />
              <p className='text2'>LifeStyle</p>
              </div>
              <div className='one'>
              <img className='imgthree'  src="https://c0.wallpaperflare.com/preview/988/455/647/piano-music-keyboard-music-instrument.jpg" alt="Nature" />
              <p className='text3'>Instument</p>
              </div>
              <div className='one'>
              <img className='img4'  src="https://w0.peakpx.com/wallpaper/401/845/HD-wallpaper-gradient-transition-strip.jpg" alt="Nature" />
              <p className='text4'>Transition</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='rows'>
            <div className='one'>
              <img  className='imgones' src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJlbWllcmUlMjBwcm98ZW58MHx8MHx8&w=1000&q=80" alt="Nature" />
              <p className='text'>Primier-Pro</p>
              </div>
              <div className='one'>
              <img className='imgtwo'  src="https://wallpaperaccess.com/full/3953916.jpg" alt="Nature" />
              <p className='text2'>Aftre-Effects</p>
              </div>
              <div className='one'>
              <img className='imgthree'  src="https://c1.wallpaperflare.com/preview/202/413/230/smartphone-mobile-reporting-video.jpg" alt="Nature" />
              <p className='text3'>Alight-Motion</p>
              </div>
              <div className='one'>
              <Link to="/temp"><img className='img4'  src="https://cdn.lynda.com/course/111783/111783-16x9.jpg" alt="Nature" /></Link>
              <p className='text4'>FinalCut-Pro</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
              <h3 className='web'>EdiComm is a free gallery of awesome <br /> stock video clips, music tracks, <br /> sound effects and video templates.</h3>
            </div>
            <p className='para'>We carefully curate clips, tunes, and templates from some of the world’s <br /> most talented creators with all content available for free.</p>
            <p className='p1'>Our free library is growing fast with new video assets being added every week! You’ll  always  find the perfect  high-quality item to download  and use in your project.</p>
            <p className='p2'>Download as many videos, sounds and templates as you need, with no attribution or  sign-up required.</p>
            <p className='p3'>EdiComm is brought to you by Envato, the company behind some of the world’s leading marketplaces for creative assets and creative people.</p> 
            </div>
            </div>
            </div>
  );
}
export default First