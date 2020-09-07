import React, { useRef } from 'react'
import './Navigation.scss'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ToggleNavigation from './ToggleNavigation'
import { Link } from 'react-scroll';


const Navigation = ({ position, animation }) => {

    const nav = useRef(null);

    function handleToggle(value) {
        if (!value) {
            nav.current.style.height = "100vh";
            console.log();
        } else {
            nav.current.style.height = null;
        }
    }


    {/* <li><ToggleNavigation handleToggle={handleToggle} /></li> */ }

    return (
        <nav style={{ position, animation }} className="navigation" ref={nav}>            
        <li id="website-name"><h1>KDSG.LIVE</h1></li>

            <Links />
        </nav>
    )

}

const Links = () => {
    return (
        <React.Fragment>
            <li><Link className="nav-link" spy={true} smooth={true} offset={-70} duration={800} to="home">HOME</Link></li>
            <li><Link className="nav-link" spy={true} smooth={true} offset={-70} duration={800} to="projects">PROJECTS</Link></li>
            <li><Link className="nav-link" spy={true} smooth={true} offset={-70} duration={800} to="about">ABOUT</Link></li>
            <li><Link className="nav-link" spy={true} smooth={true} offset={-70} duration={800} to="contact">Contact</Link></li>
        </React.Fragment>
    )
}

export default Navigation;


