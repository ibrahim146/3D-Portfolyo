import { Environment } from "@react-three/drei";
import './App.css';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import Golf from "./Golf"
import Clip_path from "./Clip_path";
import Skill from "./Skill";
import Languages from "./Languages";
import Typewriter from "typewriter-effect";
import Menü from "./Menü";
import Experience from "./Experience";
import Mecontainer from "./Mecontainer";
import Projeck from "./Projeck";
import Contact from "./Contact";

function App() {
  const [value, setvalue] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setvalue(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    console.log(value);
  }, [value]);

  return (
    <>
      <div className="mecontainer">
        <Mecontainer />
        <Menü />
        <div className="fixed_container img">
          <div className="">
            <Canvas style={{ width: "100vw", height: "100vh", position: "fixed" }} >
              <ambientLight />
              <Environment preset="sunset" />
              <Suspense fallback={null}>
                <Golf value={value} />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <Clip_path value={value} />
        <div className="down_container">
          <div className="overview_container">
            <h1 id="overview" style={{ paddingBottom: "1%", fontSize: "50px", color: "#00ffff" }}>overview</h1>
            <div style={{ zIndex: 5 }} className="text_overview">
              <p style={{ width: "70%", zIndex: 5, fontSize: "20px" }}>
                <Typewriter
                  options={{
                    deleteSpeed: 999999,
                    autoStart: true,
                    loop: false,
                    stop: true,
                    delay: 20,
                    strings: ["I m a skilled software developer with experience in JavaScript and expertise in frameworks like React, Node.js, and Three.js.I m a quick learner and collaborate closely with clients to create efficient,scalable, and user-friendly solutions that solve real-world problems.Let's work together to bring your ideas to life!"]
                  }}
                />
              </p>
            </div>
            <div className="style_container">
              <div className="skill_style">
                <Skill />
              </div>
              <div className="languages_style">
                <Languages />
              </div>
            </div>
          </div>
        </div>
        <div className="experience_container">
          <Experience />
        </div>
        <Projeck />
        <Contact />
      </div>
    </>
  );
}

export default App;
