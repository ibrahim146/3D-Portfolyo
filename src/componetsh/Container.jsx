import React from 'react';
import "./clip.css";
import Typewriter from "typewriter-effect";
import Clip_path from './clip_path/Clip_path';
import { motion } from "framer-motion";
function Container(props) {
    
    const {value} = props;
    return (<>
        <div className='me_container'>
            <div className='Html_container'>
                <motion.h1 className='hi'
                     initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 1.5,
                      }}
                      >
                    hi , I am
                    <motion.div 
                     initial={{
                        opacity: 0,
                        y: 25,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 1,
                        delay: 2,
                      }}
                      >ibrahim akyel</motion.div>
                </motion.h1>
                <motion.h1 className='hi'
                 initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 2.5,
                  }}>
                    I am a  <Typewriter
                        options={{
                            deleteSpeed: 0.1,
                            pauseFor: 3000,
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: ["fron-end devoloper", " web devoloper", "javascript-react devoloper", "3D devoloper"]
                        }}
                    /></motion.h1>
                <motion.div className='contack'
                 initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: 3,
                  }}
                  >
                    <button className="button">
                        <div className="icon">
                            <span className="text-icon hide">message</span>
                            <svg
                                className="css-i6dzq1"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                fill="none"
                                strokeWidth="2"
                                stroke="currentColor"
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                            </svg>
                        </div>
                        <span className="title"> CONTACK ME </span>
                        <div className="padding-left hide">
                            <div className="padding-left-line">
                                <span className="padding-left-text">arama</span>
                            </div>
                        </div>
                        <div className="padding-right hide">
                            <div className="padding-right-line">
                                <span className="padding-right-text">bilgi</span>
                            </div>
                        </div>
                        <div className="background hide">
                            <span className="background-text">Background</span>
                        </div>
                        <div className="border hide">
                            <span className="border-text">Border Radius</span>
                        </div>
                    </button>
                </motion.div>
            </div>

        </div>
        
        <Clip_path  value={value}/>
           
    </>

    )
}

export default Container