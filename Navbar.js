import React from 'react';

import { NavLink } from "react-router-dom";
import '../css/navbar.css';
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }

    };

    
    render(){
        
        return(
            <div id="navbar">
                <nav id="nav">
                    <ul>
                        
                        <NavLink exact to="/" ><li ><button className="navbarBtn" id="homeBtn" ><i className="fa fa-home"></i></button></li></NavLink>
                        
                        <NavLink exact to="/explore" >
                            <li ><button className="navbarBtn" id="exploreBtn"><i className="fa fa-search"></i></button></li>
                        </NavLink>
                        <NavLink exact to="/camera">
                            <li ><button className="navbarBtn" id="postBtn"><i className="far fa-plus-square"></i></button></li>  
                        </NavLink>
                        
                        <NavLink exact to="/activity" activeClassName="active"><li ><button className="navbarBtn" id="activityBtn"><i className="fa fa-heart-o" ></i></button></li></NavLink>
                        
                        
                        <NavLink exact to="/account">
                            <li><button className="navbarBtn" id="accountBtn"><img id="avatarNavbarBtn"src={this.props.avatarImg} alt=""></img></button></li>
                        </NavLink>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;