import { Canvas } from "@react-three/fiber";
import Container from "./componetsh/Container";
import Golf from "./componetsh/Golf";
import { Suspense, useEffect, useState } from "react";
import './App.css';


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
      <Canvas style={{ width: "100%", position: "fixed" }} >
        <ambientLight />
        <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} />
        <directionalLight position={[100,100, 100]} castShadow shadow-mapSize={1024} />
        <directionalLight position={[220,20, 200]} castShadow shadow-mapSize={1024} />
        <directionalLight position={[320,300, 300]} castShadow shadow-mapSize={1024} />
        <directionalLight position={[420,400, 400]} castShadow shadow-mapSize={1024} />
        <Suspense fallback={null}>
          <Golf value={value} />
        </Suspense>
      </Canvas>
      <Container value={value}/>

    </>
  );
}

export default App;
