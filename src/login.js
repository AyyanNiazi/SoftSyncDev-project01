import React, { Component } from 'react'
import {Link,
       Route } from 'react-router-dom'
// import './access.css'       
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import firebase from 'firebase'
// import * as Firebase from 'firebase'
import Firebase, { auth, storage,   provider } from './config/Fire.js';
import './portalLogin.css'





export default class Login extends React.Component{
    constructor() {
        super();
        this.state = {
          currentItem: '',
          username: '',
          items: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('items');
        const item = {
          title: this.state.currentItem,
          user: this.state.username
        }
        itemsRef.push(item);
        this.setState({
          currentItem: '',
          username: ''
        });
      }
      componentDidMount() {
        const itemsRef = firebase.database().ref('items');
    
        itemsRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          for (let item in items) {
            newState.push({
              id: item,
              title: items[item].title,
              user: items[item].user
            });
          }
          this.setState({
            items: newState
          });
        });
      }
      removeItem(itemId) {
        const itemRef = firebase.database().ref(`/items/${itemId}`);
        itemRef.remove();
      }
      render() {
        return (
          <div>
            <header>
                <div className="headDiv">
                  <h1>Student Portal</h1>
                  <i className="fil fa-shopping-basket" aria-hidden="true"></i>               
                </div>
            </header>
            <div >
              <section >
                    <form onSubmit={this.handleSubmit}>
                      <input type="text" name="username" placeholder="Put Your Name?" onChange={this.handleChange} value={this.state.username} />
                      <input type="text" name="currentItem" placeholder="Write Something About You" onChange={this.handleChange} value={this.state.currentItem} />
                      <button className="btn btn-success">Submit</button>
                    </form>
              </section>
              <section className='displayLi'>
                  <div className="headDiv">
                    <ul>
                      {this.state.items.map((item) => {
                        return (
                          <li key={item.id}>
                            <h3>{item.title}</h3>
                            <p>brought by: <strong>{item.user}</strong>
                              <button onClick={() => this.removeItem(item.id)} className="btn btn-danger">Remove Item</button>
                            </p>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
              </section>
            </div>
          </div>
    


            // <div>
            //       <Navbar default collapseOnSelect>
            //         <Navbar.Header>
            //         <Navbar.Brand>
            //             <Link to='/'> Indus University  </Link>
            //         </Navbar.Brand>
            //         <Navbar.Toggle/>
            //         </Navbar.Header>
            //         <Navbar.Collapse>
            //             <Nav pullRight>
            //               <NavItem eventKey={1} componentClass={Link} href="/" to="/">
            //                 Home
            //               </NavItem>
            //               <NavItem eventKey={2} componentClass={Link} href="/" to="/adminLog">
            //                 Admin Login
            //               </NavItem>
            //               <NavItem eventKey={3} componentClass={Link} href="/" to="/studentLog">
            //                 Student Login
            //               </NavItem>
            //               <NavItem eventKey={4} componentClass={Link} href="/" to="/companyLog">
            //                 Company Login
            //               </NavItem>
            //         </Nav>
            //         </Navbar.Collapse>
                    
            
            // </Navbar> 
            // </div>
        )
    }

}
    
    