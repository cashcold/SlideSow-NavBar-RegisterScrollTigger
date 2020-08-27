import React, { Component } from 'react';
import './style.css'
import {TimelineLite} from 'gsap'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
class GSAP extends Component {
    state = {  }

    componentDidMount(){
        const CheckFunction = ()=>{
            gsap.registerPlugin(ScrollTrigger)
            const box1 = document.querySelector('.box-3 img')
            const box2 = document.querySelector('.box-2 img')
            const box1Tl = new TimelineLite({
                scrollTrigger: {
                    trigger: box1,
                    start: "10px 65%",
                    scrub: false,
                
                    toggleActions: "restart none none none",
                    
                }
            })
            box1Tl.to(box1,{x:'400', rotation: '360', duration: 3})
            
        }
        CheckFunction()

    }
    render() { 
        return ( 
            <div className='gsap'>
                <div className='box-1'><img src={require('../../images/icons8-edit-64.png')}/></div>
                <div className='box-2'><img src={require('../../images/icons8-password-1-60.png')}/></div>
                <div className='box-3'><img src={require('../../images/icons8-website-60.png')}/></div>
                <div className='box-4'><img src={require('../../images/icons8-website-60.png')}/></div>
            </div>
         );
    }
}
 
export default GSAP;