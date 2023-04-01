import React,{useState} from 'react'
import './header.css'
import { Form, FormControl, Button,Tab,Nav,Row,Col,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Header() {
    const [value,setValue] = useState('')
    const handleChange=(event)=>{
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the search action using the searchValue
        console.log(`Searching for:`);
    }
  return (
    <div>
        <div className='pp'>
        <img className='image' src='https://cdn-icons-png.flaticon.com/512/187/187861.png?w=740&t=st=1673524221~exp=1673524821~hmac=b2be07f742c427eebcf5417361607e970e06d13aa5740e403fd57ed851119a46' alt="png" />
        </div>
        <h2 className='lo'>EdiComm</h2>
        <div>
        <Form onSubmit={handleSubmit} inline='true'>
            <FormControl onChange={handleChange}  type="text" placeholder="Search" className="mr-sm-2" />
            <Button onClick={handleSubmit} className='but' variant="outline-success">Search</Button>
        </Form>
        </div>
        <div>
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className='t' href="/home"><Link to={'/video'}>Video</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='t' eventKey="link-1"><Link to={'/music'}>Music</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='t' eventKey="link-2"><Link to={'/sound'}>SoundEffects</Link></Nav.Link>
        </Nav.Item>
      </Nav>
      <NavDropdown
              id="nav-dropdown-dark-example"
              title="Project Files"
              menuVariant="dark"
              className='hep'
            >
              <NavDropdown.Item href="#action/3.1"><Link to='/after'>After Effects</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to={'/premier'}>Primiere Pro</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to={'/alight'}>Alight Motion</Link></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
     </div>
        </div>
  )
}
export default Header
