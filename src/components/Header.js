import React, { Component } from 'react'
import { Nav, Navbar,  NavbarToggler,Collapse, NavItem,Media} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpeg'


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isNavOpen:false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }
    toggleNav() {
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }

        render(){
                return(
                    <div>
                       <Navbar className ="navbar-dark bg-dark" expand="md">
                           <div className="container">
                               <div className ="d-flex justify-content-start pt-2">
                                   <Media left >
                                       <Media className ="logo" object src={logo}  alt= "logo"/>
                                   </Media>
                                   <Media body>
                                       <Media heading className= "text-white font-italic h5 pt-1 pl-3">
                                           MovieFan
                                       </Media>
                                   </Media>
                               </div>
                            <div >
                               <NavbarToggler onClick={this.toggleNav} />
                               <Collapse isOpen={this.state.isNavOpen} navbar >
                                   <Nav className= "">
                                   <NavItem >
                                       <NavLink className="nav-link text-white"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                   </NavItem>

                                   <NavItem>
                                       <NavLink className="nav-link text-white"  to='/top'><span className="fa fa-list fa-lg"></span> Top Movies </NavLink>
                                   </NavItem>


                                   </Nav>
                               </Collapse>
                           </div>
                        </div>
                       </Navbar>
                      </div>

                )
            }
        }
        // <NavItem>
        //     <NavLink className="nav-link text-white" to='/discovery'><span className="fa fa-cc-discover fa-lg"></span> Discovery </NavLink>
        // </NavItem>
export default Header
