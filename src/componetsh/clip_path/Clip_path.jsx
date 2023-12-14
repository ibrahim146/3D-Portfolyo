import React, { useEffect } from 'react'
import "./clip_path.css"
import { useState } from 'react';
import { motion } from "framer-motion";
import "./skils.css"

function Clip_path(props) {
    const { value } = props;
    const [nevvalue, setnevvalue] = useState(0)
    useEffect(() => {
        if (value >= 1410) {
            setnevvalue(value - 1410)
        } else {
            setnevvalue(10)
        }

    }, [value]);
    const skills = [
        {
            title: "Threejs / React Three Fiber",
            level: 80,
        },
        {
            title: " Javascript / React",
            level: 90,
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
    const languages = [
        {
            title: "🇺🇸 English",
            level: 90,
        },
        {
            title: "🇫🇷 Germany",
            level: 30,
        },

    ];

    return (
        <>
            <h2 style={{ left: `${100 - nevvalue / 6}%` }} className="text">ibrahim akyel</h2>
            <section style={{ clipPath: `circle(${nevvalue}px at center 69%)` }}>
                <h2 style={{ left: `${100 - nevvalue / 6}%` }} className="innerText">ibrahim akyel</h2>
            </section>
            <div className="container">
                <motion.div whileInView={"visible"}>
                    <h2 className="skill_h2">Skills</h2>
                    <div className="skill_item">
                        {skills.map((skill, index) => (
                            <div style={{ width: "16rem" }} key={index}>
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
                    <div whileInView={"visible"}>
                        <h2 className="skill_lang">Languages</h2>
                        <div className="skill_div4">
                            {languages.map((lng, index) => (
                                <div className="w-64" key={index}>
                                    <motion.h3
                                        className="skill_lang_h3"
                                        initial={{
                                            opacity: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                opacity: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 2 + index * 0.2,
                                                },
                                            },
                                        }}
                                    >
                                        {lng.title} - {lng.level}%
                                    </motion.h3>
                                    <div className="skill_lang_h32">
                                        <motion.div
                                            className="skill_lang_div4"
                                            style={{ width: `${lng.level}%` }}
                                            initial={{
                                                scaleX: 0,
                                                originX: 0,
                                            }}
                                            variants={{
                                                visible: {
                                                    scaleX: 1,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 2 + index * 0.2,
                                                    },
                                                },
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default Clip_path