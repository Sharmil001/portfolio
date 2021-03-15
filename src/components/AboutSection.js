import React from 'react'
import home1 from '../img/home1.png'
import { About, Description, Image, Hide } from './style'

const AboutSection = () => {
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>I Am </h2>
                    </Hide>
                    <Hide>
                        <h2><span>Sharmil Adroja</span></h2>
                    </Hide>
                    <Hide>
                        <h2>A Developer</h2>
                    </Hide>
                </div>
                <p>Contact us for any webdevelopment work</p>
                <button>Contact US</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with camera"/>
            </Image>
        </About>
    )
}


export default AboutSection;