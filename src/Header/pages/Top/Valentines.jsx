import React,{useState} from 'react'
import {Button,Card,Form,Collapse,FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Valentines() {
    const [isPaused, setIsPaused] = useState(false);
    const [open, setOpen] = useState(false);
    const handleSubmit = ()=>{
        console.log('hello akhil its not working')
      }
  
  return (
    <div>
      <div className='kui1'>
         <div className='dir'>
          <div className='dir2'>
            <h5 className='head9'><Link to={'/new'}  style={{ color: 'white' }}>New</Link></h5>
            <h5 className='head10'><Link to={'/backgrounds'}  style={{ color: 'white' }}>Backgrounds</Link></h5>
            <h5 className='head11'><Link to={'/valentines'}  style={{ color: 'white' }}>Valentines</Link></h5>
            <h5 className='head4'><Link to={'/lunar'}  style={{ color: 'white' }}>Lunar</Link></h5>
            <h5 className='head5'><Link to={'/vertical'}  style={{ color: 'white' }}>Vertical</Link></h5>
             </div>
          </div>
          <div>
            <img className='good' src="https://img.freepik.com/free-vector/glowing-musical-pentagram-background-with-sound-notes_1017-31220.jpg?w=2000" alt="" />         
            <h4 className='middle'>Astounding Royalty Free Stock Music</h4>
          <h3 className='last'>For you to use in your next video project, for free!</h3>
            <div className='search'>
        <Form onSubmit={handleSubmit} inline='true'>
            <FormControl   type="text" placeholder="Search Music" className="mrm-sm-2" />
            <Button className='ravan' variant="outline-success">Search</Button>
        </Form>
        </div>    
          </div>
          <div className='ash'>
        <img className='short' src="data:image/jpeg;base64,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" alt="" />
        <h4 className='crack'>Crackzon</h4>
        <h4 className='tech'>Technology</h4>
        <h5 className='y1'>Find what you need on Crackzon Technology</h5>
        <p className='q1'>Discover millions of stock videos & templates, royalty-free music tracks, photos & more. <br /> All with unlimited downloads &  simple commercial licensing for any project.</p>
        <Button className='button1' >Upload Here</Button>{' '}
        </div>
   
   
        <div>
          <div className='lar'>
        <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://images.wallpaperscraft.com/image/single/valentines_day_hearts_lots_fly_love_35972_1600x900.jpg" alt=""  diabled/>
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <div>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />
      <div>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />
      <div className='u1'>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />
      <div className='y10'>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />
      <div className='y9'>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body xs={2}>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body >
      </Card>
      </div>
      <br />
      <div className='tr'>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />
      <div className='hs'>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <br />
      <div className='hf'>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>      
      <br />
      <div className='ht'>
      <Card xs={1} md={2} className="g-4">
       <img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" alt="" />
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className='h18'>
      <Card xs={1} md={2} className="g-4">
      <Link to='first'><img className='ima3' src="https://thumbs.gfycat.com/FeminineMistyGlowworm-max-1mb.gif" onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}  style={{
            animationPlayState: isPaused ? 'paused' : 'running',}} alt="" /></Link>
        <Card.Body>
        <button className='play'>Download</button> 
        <button className='plays'>Play</button> 
          <Card.Text>
            <h3>Star Boy</h3>
            <span>by  : The Weekend</span>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
        </div>
        <br />
        <div className='but7'>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} className='but8'
      >
        EDICOMM
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            <Card body style={{ width: '400px' }}>
            EdiComm is a free gallery of awesome <br /> stock video clips, music tracks, <br /> sound effects and video templates
            </Card>
          </div>
        </Collapse>
      </div>
      </div>
       </div>
    </div>
  )
}

export default Valentines
