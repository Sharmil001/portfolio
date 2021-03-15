import React from 'react'

//Styled 
import { About } from './style';
import styled from 'styled-components';


const FaqSection = ()=>{
    return(
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How you starte ?</h4>
                <div className="awnser">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        orem ipsum dolor sit amet consectetur adipisicing elit. Porro, provident!
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
         
            <div className="question">
                <h4>Daily schedule</h4>
                <div className="awnser">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        orem ipsum dolor sit amet consectetur adipisicing elit. Porro, provident!
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
        
            <div className="question">
                <h4>Payment methods</h4>
                <div className="awnser">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        orem ipsum dolor sit amet consectetur adipisicing elit. Porro, provident!
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
      
            <div className="question">
                <h4>What products do you offers.</h4>
                <div className="awnser">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        orem ipsum dolor sit amet consectetur adipisicing elit. Porro, provident!
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
          
        </Faq>
    )
}
const Faq = styled(About)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;