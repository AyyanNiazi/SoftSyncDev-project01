import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'
import  Navigator from './Navbar';

class Home extends React.Component {
    render(){
        return(
            <div>
            <Navigator/>
            <Grid>
                <Jumbotron>
                    <h2> Welcome To Indus University </h2>
                    <p>the good university because i Study in this University </p>
                    <Link to='/studentLog'>
                    <Button bsStyle="primary"> Student Login </Button>   
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">   
                <Image src="images/std3.jpg" circle className="profile-pic"/>
                <h3> Student </h3>
                <p>The ideal college lifestyle dissipates quickly once the reality is reached. Many young adults imagine vivid pictures of what college might be like for them. </p>   
                 </Col>
                 <Col xs={12} sm={4} className="person-wrapper">   
                <Image src="images/std1.jpg" circle className="profile-pic"/>
                <h3> Student </h3>
                <p>The ideal college lifestyle dissipates quickly once the reality is reached. Many young adults imagine vivid pictures of what college might be like for them. </p>   
                 </Col>
                 <Col xs={12} sm={4} className="person-wrapper">   
                <Image src="images/std4.jpg"  className="profile-pic" circle/>
                <h3> Student </h3>
                <p>The ideal college lifestyle dissipates quickly once the reality is reached. Many young adults imagine vivid pictures of what college might be like for them. </p>   
                 </Col>
                </Row>
            
            
            </Grid>
            </div>
        )
    }
}

export default Home ;