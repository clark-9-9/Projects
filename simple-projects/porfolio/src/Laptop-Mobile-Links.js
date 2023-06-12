import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Values } from "./App";
import { States } from "./App";
import { ACTION_TYPES } from "./App";


export function LaptopLinks() {
    
    const NavbarValue = useContext(Values)

    return (
        <article className="Navbar-article-2-Laptop-Texts">
        <NavLink name="NavLink" to="/" 
        style={ ({isActive}) => { return {
            color: isActive ? "#CC5353" 
            : NavbarValue[0].display === 'none' 
            ? '#EDF1FD' 
            : '#93839F'  
        }}} 
        > Home 
        </NavLink>
        <NavLink 
        onClick={() => NavbarValue[1]({type: ACTION_TYPES.Dark_Mode})}
        name="NavLink" 
        to="/about" 
        style={ ({isActive}) => { return {
            color: isActive ? "#CC5353" 
            : NavbarValue[0].display === 'none' 
            ? '#EDF1FD' 
            : '#93839F'  
        }}}
        >About
        </NavLink>
        <NavLink name="NavLink" to="/users" 
        style={ ({isActive}) => { return {
            color: isActive ? "#CC5353" 
            : NavbarValue[0].display === 'none' 
            ? '#EDF1FD' 
            : '#93839F'  
        }}}
        >Users
        </NavLink>
        <NavLink name="NavLink" to="/blog" 
        style={ ({isActive}) => { return {
            color: isActive ? "#CC5353" 
            : NavbarValue[0].display === 'none' 
            ? '#EDF1FD' 
            : '#93839F'  
        }}}
        >Blog
        </NavLink>
        <NavLink name="NavLink" to="/contact" 
        style={ ({isActive}) => { return {
            color: isActive ? "#CC5353" 
            : NavbarValue[0].display === 'none' 
            ? '#EDF1FD' 
            : '#93839F'  
        }}}
        >Contact
        </NavLink>
    </article>
    )
}

export function MobileLinks() {

    const NavbarValue = useContext(Values)

    return (
        <article style={NavbarValue[2]} className="Navbar-drop-down">
        <ion-icon  
            onClick={NavbarValue[4]} 
            className="close-icone" name="close-outline"
            style={NavbarValue[2]}
        >
        </ion-icon>

        <NavLink nav='navlinks' name="NavLink" to="/" 
        style={ ({isActive}) => { return  {
            color: isActive ? "#CC5353" : "#131D3A" 
        }}} 
        >Home
        </NavLink>
        <NavLink 
        // onClick={() => NavbarValue[1]({type: ACTION_TYPES.Dark_Mode})}
        nav='navlinks' 
        name="NavLink" to="/about" 
        style={({isActive}) => { return  {
            color: isActive ? "#CC5353" : "#131D3A" 
        }}} 
        >About
        </NavLink>
        <NavLink nav='navlinks' name="NavLink" to="/users" 
        style={ ({isActive}) => { return  {
            color: isActive ? "#CC5353" : "#131D3A" 
        }}} 
        >Users
        </NavLink>
        <NavLink nav='navlinks' name="NavLink" to="/blog" 
        style={ ({isActive}) => { return  {
            color: isActive ? "#CC5353" : "#131D3A" 
        }}} 
        >Blog
        </NavLink>
        <NavLink nav='navlinks' name="NavLink" to="/contact" style={ ({isActive}) => { return  {
            color: isActive ? "#CC5353" : "#131D3A" 
        }}} 
        >Contact
        </NavLink>
    </article>    
    )
}