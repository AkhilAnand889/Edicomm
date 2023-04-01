import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import App from '../../App';
import './videoavai.css'
import {Link} from 'react-router-dom'

function Videose() {
  return (
    <div>
      <a href='https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4'><video className='video' src="https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4" autoPlay loop/></a>
      <video className='video1' src="https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_013_preview.mp4" autoPlay loop/>
      <video className='video2' src="https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_06B_Bali_1080p_005_preview.mp4" autoPlay loop/>
      <br />
      <br />
      <video className='video' src="https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_13B_Bali_1080p_005_preview.mp4" autoPlay loop/>
      <video className='video1' src="https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_13B_Bali_1080p_002_preview.mp4" autoPlay loop/>
      <video className='video2' src="https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_13A_Bali_4k_008_preview.mp4" autoPlay loop/>
      <br />
      <br />
      <video className='video' src="https://media.istockphoto.com/id/1015058314/video/soccer-player-kicks-ball-between-opponents-legs.mp4?s=mp4-640x640-is&k=20&c=Z3SJjsf_esYMyWlq8cj7LOdu_tfvLgcHGKnjhBWSCB0=" autoPlay loop/>
      <video className='video1' src="https://media.istockphoto.com/id/521320904/video/a-female-soccer-player-dribbles-down-the-field-during-a-game-at-night.mp4?s=mp4-640x640-is&k=20&c=VmGpheSvzvZ793Wu-kNANdK-HR-egrV7xoCrS-nJzDU=" autoPlay loop/>
      <video className='video2' src='https://media.istockphoto.com/id/497973730/video/a-soccer-player-dribbling-the-ball-during-a-game.mp4?s=mp4-480x480-is&k=20&c=4NlUOsASt5XXmNidZcM3K5DfwEtKg9HFJGB0YFAkQ38=' autoPlay loop/>
      <br />
      <br />
      <video className='video' src="https://joy.videvo.net/videvo_files/video/premium/video0227/large_watermarked/02_Igor_Strike_04_go_sun_preview.mp4" autoPlay loop/>
      <video className='video1' src="https://media.istockphoto.com/id/1135338113/video/resistand-calm-caucasian-soldier-in-camoufrlage-is-stadning-in-wheat-field-and-holding.mp4?s=mp4-640x640-is&k=20&c=Fk5pxq60CcbTNWn_UydN2iZX3PKeEpe4RCWilOY-tak=" autoPlay loop/>
      <video className='video2' src="https://media.istockphoto.com/id/599925060/video/a-man-in-a-camouflage-bandanna-and-walking-along-a-country-road-in-the-hands-holding-weapons.mp4?s=mp4-480x480-is&k=20&c=bp93YvLVXL_yQQfiEyjoqOtCqaQdLN-2E-IlqwBTsNM=" autoPlay loop/>
      <br />
      <br />
      <br />
      <hr />
      <h4 className='rem'>Most Asked Questions     :: </h4>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link className='nav1' eventKey="first">Ques : 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className='nav2' eventKey="second">Ques : 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <p>Can EdiComm Videos be used for commercial projects?
It’s important to note we have two licenses for stock video footage.

Videos under the EdiComm Video Free License can be used in commercial projects, for example in YouTube videos, Social Media Marketing, Online Marketing ads and Music videos.

Videos under the EdiComm Video Restricted License can be used for non commercial projects, for example only in personal Social Media posts.

Be sure to read our license and terms to find out more.</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <p>
What is EdiComm? How does it work?
EdiComm is a free website for video creators that has a gallery of awesome free video clips, music tracks and Premiere Pro Templates. Simply find a video, music track or template that you would like to incorporate into your next video project and download it for free.</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    <br />
    <br />
    <br />
    <div className='mainhe'>
    <h4 className='he1'>Everything you need for your <br /></h4>
    <h4 className='he2'>creative projects</h4>
    <br />
    <hr className='colo'/>
    </div>
    </div>
  )
}

export default Videose