import { Suspense, useEffect, useState } from "react";
import { Environment, useEnvironment } from "@react-three/drei";
import Golfscene from "./componetsh/Golfscene";
import Container from "./componetsh/Container";
import { Canvas } from "@react-three/fiber";
import Menü from "./componetsh/Menü";
import './App.css';


function App() {
  const [value, setvalue] = useState(0);
  let envmap = useEnvironment({ files: "/sunflowers_puresky_2k.hdr" })
  useEffect(() => {
    const handleScroll = () => {
      setvalue(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    console.log(value);
  }, [value]);
  return (
    <>
      <Menü />
      <Canvas style={{ width: "100%", height: "100%", position: "fixed" }} >
        <ambientLight />
        <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <Golfscene value={value} />
          <Environment map={envmap} background />
        </Suspense>
      </Canvas>
      <Container value={value} />
     
      
    </>
  );
}
export default App;
