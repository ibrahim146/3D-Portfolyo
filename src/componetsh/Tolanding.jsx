import { motion } from "framer-motion-3d";
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Tolanding = (props) => {
  const { value } = props;
  const group = useRef();
  const [playvalue, setplayvalue] = useState(0);
  const { nodes, materials, animations } = useGLTF('/tolanding.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (value >= 2401) {
      setplayvalue(false)
    } else {
      setplayvalue(true)
    }
  }, [value])

  useEffect(() => {
    actions[names[0]].reset().play().paused = playvalue;
    actions[names[0]].setLoop()
  }, [playvalue])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" >
        <motion.group name="tolanding" rotation={[Math.PI / 2, 0, 0]} scale={0.01}
          position={[-1, 3, 0]}
          animate={{
            z: 3,
            y: -1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <primitive object={nodes.mixamorig7Hips} />
          <skinnedMesh name="Ch33_Belt" geometry={nodes.Ch33_Belt.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Belt.skeleton} />
          <skinnedMesh name="Ch33_Body" geometry={nodes.Ch33_Body.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Body.skeleton} />
          <skinnedMesh name="Ch33_Eyelashes" geometry={nodes.Ch33_Eyelashes.geometry} material={materials.Ch33_hair} skeleton={nodes.Ch33_Eyelashes.skeleton} />
          <skinnedMesh name="Ch33_Hair" geometry={nodes.Ch33_Hair.geometry} material={materials.Ch33_hair} skeleton={nodes.Ch33_Hair.skeleton} />
          <skinnedMesh name="Ch33_Pants" geometry={nodes.Ch33_Pants.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Pants.skeleton} />
          <skinnedMesh name="Ch33_Shirt" geometry={nodes.Ch33_Shirt.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Shirt.skeleton} />
          <skinnedMesh name="Ch33_Shoes" geometry={nodes.Ch33_Shoes.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Shoes.skeleton} />
          <skinnedMesh name="Ch33_Suit" geometry={nodes.Ch33_Suit.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Suit.skeleton} />
          <skinnedMesh name="Ch33_Tie" geometry={nodes.Ch33_Tie.geometry} material={materials.Ch33_body} skeleton={nodes.Ch33_Tie.skeleton} />
        </motion.group>
      </group>
    </group >
  )
}
export default Tolanding
useGLTF.preload('/tolanding.glb')
