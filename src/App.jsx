import { Suspense, useEffect, useState } from "react";
import { Environment, useEnvironment } from "@react-three/drei";
import Golfscene from "./componetsh/Golfscene";
import Container from "./componetsh/Container";
import { Canvas } from "@react-three/fiber";
import Menü from "./componetsh/Menü";
import './App.css';
import Tolanding from "./componetsh/Tolanding";


function App() {
  const [value, setvalue] = useState(0);
  const [character, setcharacter] = useState(0);
  const [characteranimasyon, setcharacteranimasyon] = useState(false);
  const [displaynone, setdisplaynone] = useState("");
  const [golfsceneright, setgolfsceneright] = useState(0.504);
  const [golfscencar, setgolfscencar] = useState(-1.154);
  const [golfscenwomen, setgolfscenwomen] = useState(-2.684);

  useEffect(() => {
    console.log(characteranimasyon);
    if (character >= 2540) {
      setcharacteranimasyon(true);
      setdisplaynone("displaynone");
      setgolfsceneright(1000);
      setgolfscencar(1000);
      setgolfscenwomen(1000)
    } else {
      setcharacteranimasyon(false)
      setdisplaynone("");
      setgolfsceneright(0.7);
      setgolfscencar(-1.154)
      setgolfscenwomen(-2.684)
    }
  }, [character])

  let envmap = useEnvironment({ files: "/sunflowers_puresky_2k.hdr" })
  useEffect(() => {
    const handleScroll = () => {
      setvalue(window.scrollY);
      setcharacter(window.scrollY);

    };
    window.addEventListener('scroll', handleScroll);
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
          {characteranimasyon == false ? <Golfscene value={value} golfsceneright={golfsceneright} golfscencar={golfscencar} golfscenwomen={golfscenwomen} /> : <Tolanding value={value} />}
        </Suspense>
      </Canvas>
      <Container value={value} displaynone={displaynone} />

    </>
  );
}
export default App;
