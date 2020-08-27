import React, { Component } from 'react';
import{TimelineLite} from 'gsap'
import './func.js'
import './style.css'
class NavBar extends Component {
    state = {  }
    componentDidMount(){
        const MenuDrop = ()=>{
            const menuDrop1 = document.querySelector('.burger')
            const LinksDrops = document.getElementById('nav-link')
            menuDrop1.addEventListener('click',()=>{
                LinksDrops.classList.toggle('nav-link')
                menuDrop1.style.cssText = "display: none"
            })
        }
        MenuDrop()

        const AnimateHeader = ()=>{
            const logo = document.querySelector('.logo')
            const brakeLine = document.querySelector('.logo hr')
            const navBar = document.querySelector('.mainNavBar')
            const navLink = document.querySelector('.navLink ')
            const headerTl = new TimelineLite()
            headerTl.from(navBar,{opacity: 0, duration: 2,  ease: "bounce.out",x: '-400', delay: 1 })
            headerTl.from(logo,{opacity: 0, duration: 2, color: 'white',width: 0,ease: "slow(0.7, 0.7, false)",x: '500' , })
            headerTl.from(brakeLine,{ duration: 2, ease: "power2.in", x: '-500',})
            headerTl.from(navLink,{opacity: 0, duration: 2.5,ease: "sine.out",  })
        }
        AnimateHeader()
    }
    render() { 
      
        return ( 
           
            <div className='navBar'>
                <div className='container'>
                    <header>
                        <nav className='mainNavBar'>
                            <div className='logo'>
                                <h1>COCOA GHANA</h1>
                                <hr className='brakeLine'/>
                            </div>
                                <div className='info'>
                                        <div className='burger' >
                                            <div className='line1'></div>
                                            <div className='line2'></div>
                                            <div className='line3'></div>
                                        </div>
                                <ul id='nav-link' className='nav-link navLink'>
                                    <li><a href='#'>HOME</a></li>
                                    <li><a href='#'>ABOUT</a></li>
                                    <li><a href='#'>SERVICES</a></li>
                                    <li><a href='#'>CONTENT-US</a></li>
                                </ul>
                               
                            </div>
                           
                        </nav>
                    </header>
                </div>
                
            </div>
         );
    }
}
 
export default NavBar;