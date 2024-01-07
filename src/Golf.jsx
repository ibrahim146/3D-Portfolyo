import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Golf = (props) => {
  const { value } = props;
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/golfkayıt_2.glb')
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => void (actions[names[0]].reset().play().paused = true), [])
  useFrame(() => (actions[names[0]].time = actions[names[0]].getClip().duration * value / 7000))

  return (
    <group ref={group} {...props}  >
      <group name="Scene" position={[0.7, -2.9, -5]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="Fabrice_drive-180-01_108" position={[0.504, 0.002, -0.025]} scale={10}>
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Object_11.skeleton} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default Golf
useGLTF.preload('/golfkayıt_2.glb')
