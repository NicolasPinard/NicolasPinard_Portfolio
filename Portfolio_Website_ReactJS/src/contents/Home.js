import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/NicolasP.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['My name is Nicolas Pinard','I am a passionate developer','My main interests are Big Data, Cloud Infrastructure and Full Stack Development']} speed={100} eraseDelay={1000}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    