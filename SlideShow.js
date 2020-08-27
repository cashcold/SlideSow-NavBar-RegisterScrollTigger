import React, { Component } from 'react'
import './style.css'
import { Slide } from 'react-toastify';
class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){

        let SlideIndex = 0;
        const SlideSowNow = ()=>{
            var i;
            var Slides = document.querySelectorAll(".box")
            var dots = document.querySelectorAll(".dot")
            for(i = 0; i < Slides.length; i++){
                Slides[i].style.display = "none"
            }
            SlideIndex++;
            if(SlideIndex > Slides.length){SlideIndex = 1}
            for(i = 0; i < dots.length; i++){
                dots[i].className = dots[i].className.replace(" active", "");
            }
            Slides[SlideIndex-1].style.display = "block";
            dots[SlideIndex-1].className += " active";
            
            setTimeout(SlideSowNow, 5000)
           
        }
        SlideSowNow()
    }
    render() { 
        return ( 
            <div className='slideShow'>
                <div className='container'>
                    <div className='box-1 box'>
                        <div className='about'>
                            <img src={require('../../images/fruit-3247447_1280.jpg')}/>
                        </div>
                        <div className='about-Text'>
                            <h1>Premium Product from 100% Ghana Cocoa Beans</h1>
                            <p>We produce semi-finished cocoa products which include: conventional and specialized cocoa liquor, natural cocoa butter, and natural cocoa cake.</p>
                        </div>
                    </div>
                    <div className='box-2 box'>
                    <div className='about'>
                            <img src={require('../../images/Cocoa-production-requires-no-drilling-refinery-and-no-subsidy..jpg')}/>
                        </div>
                        <div className='about-Text'>
                            <h1>TRADE IN COCOA GHANA</h1>
                            <p>We produce semi-finished cocoa products which include: conventional and specialized cocoa liquor, natural cocoa butter, and natural cocoa cake.</p>
                        </div>
                    </div>
                    <div className='box-3 box'>
                    <div className='about'>
                            <img src={require('../../images/ghana-woman-farmerfjonahill.jpg')}/>
                        </div>
                        <div className='about-Text'>
                            <h1>REAL COCOA </h1>
                            <p>We produce semi-finished cocoa products which include: conventional and specialized cocoa liquor, natural cocoa butter, and natural cocoa cake.</p>
                        </div>
                    </div>
                    <div >
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                        <span className="dot"></span> 
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SlideShow;