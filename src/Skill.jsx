import React from 'react'
import "./skill.css";
import { motion } from "framer-motion";
const Skill = () => {

    const skills = [
        {
            title: " Javascript / React",
            level: 90,
        },
        {
            title: "Threejs / React Three Fiber",
            level: 80,
        },
        
        {
            title: "Nodejs / Socket.io",
            level: 90,
        },
        {
            title: "Typescript",
            level: 60,
        },
        {
            title: "3D Modeling",
            level: 60,
        },
    ];


    return (
        <>
            <motion.div whileInView={"visible"} id="skil" className="skill.skilll">
                    <h2 className="skill_h2">Skills</h2>
                    <div className="skill_item">
                        {skills.map((skill, index) => (
                            <div style={{ width: "25rem" }} key={index}>
                                <motion.h3
                                    className="skill_h3"
                                    initial={{
                                        opacity: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            },
                                        },
                                    }}
                                >
                                    {skill.title} - {skill.level}%
                                </motion.h3>
                                <div className="skill_div2">
                                    <motion.div
                                        className="skill_skill"
                                        style={{ width: `${skill.level}%` }}
                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 1 + index * 0.2,
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                   
                </motion.div>
        </>
    )
}

export default Skill