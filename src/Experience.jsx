import React from "react";
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./experience.css"
import javascript from "./images/javascript.png";
import reactjs from "./images/reactjs.png";
import html from "./images/html.png";
import threejs from "./images/threejs.svg";

const Experience = () => {
    const experiences = [
        {
            title: "React.js Developer",
            company_name: "Freelancer",
            icon: reactjs,
            iconBg: "#383E56",
            date: "March 2020 - April 2021",
            points: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers.",
            ],
        },
        {
            title: "Javascript Developer",
            company_name: "Freelancer",
            icon: javascript,
            iconBg: "#E6DEDD",
            date: "Jan 2021 - Feb 2023",
            points: [
                "Developing and maintaining web applications using Javascript and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers.",
            ],
        },
        {
            title: "Web Developer",
            company_name: "Freelancer",
            icon: html,
            iconBg: "#383E56",
            date: "Jan 2021 - Jan 2023",
            points: [
                "Developing and maintaining web applications using React.js and other related technologies.",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers.",
            ],
        },
        {
            title: "3D Models",
            company_name: "Freelancer",
            icon: threejs,
            iconBg: "#E6DEDD",
            date: "Jan 2023 - Present",
            points: [
                "Developing and maintaining web applications using Three.js and other related technologies",
                "Collaborating with cross-functional teams including designers, product managers, and other developers to create 3D  products.",
                "Implementing responsive design and ensuring cross-browser compatibility.",
                "Participating in code reviews and providing constructive feedback to other developers."
            ],
        },
    ];
    return (
        <>
            <div className="vertical">
                <VerticalTimeline >
                    {experiences.map((experience) => (
                        <VerticalTimelineElement

                            contentStyle={{
                                background: "#00ffff",
                                color: "black",
                            }}
                            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
                            date={experience.date}
                            iconStyle={{ background: experience.iconBg }}
                            icon={<div className="experience_icon">
                                <img
                                    src={experience.icon}
                                    alt={experience.company_name}
                                    className="img_icon" />
                            </div>}
                        >
                            <div>
                                <h3 className="experience_h3">{experience.title}</h3>
                                <p
                                    className="experience_p"
                                    style={{ margin: 0 }}
                                >
                                    {experience.company_name}
                                </p>
                            </div>

                            <ul className="experience_ul">
                                {experience.points.map((point, index) => (
                                    <li
                                        key={`experience-point-${index}`}
                                        className="experience_li"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
}

export default Experience;
