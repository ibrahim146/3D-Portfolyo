import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

 const T_2 = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/golfkayıt_2.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} position={[0,0,0]}>
      <group name="Scene" position={[0,0,0]}>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} position={[0,0,0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="_0" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="Fabrice_drive-180-01_108" position={[0,0,0]} scale={10}>
                  <group name="GLTF_created_0" scale={1.069}>
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Object_11.skeleton} />
                  </group>
                </group>



                <group name="golf_course_142" position={[0,0,0]} rotation={[0, 0, -2.746]}>
                  <group name="Sketchfab_model_143">
                    <group name="Object_2_144">
                      <group name="_146">
                        <group name="_145" />
                      </group>
                    </group>
                    <group name="Object_3_147">
                      <group name="_149">
                        <group name="_148" />
                      </group>
                    </group>
                    <group name="Object_4_150">
                      <group name="_152">
                        <group name="_151" />
                      </group>
                    </group>
                    <group name="Object_5_153">
                      <group name="_155">
                        <group name="_154" />
                      </group>
                    </group>
                    <group name="Object_6_156">
                      <group name="_158">
                        <group name="_157" />
                      </group>
                    </group>
                    <group name="Object_7_159">
                      <group name="_161">
                        <group name="_160" />
                      </group>
                    </group>
                    <group name="Object_8_162">
                      <group name="_164">
                        <group name="_163" />
                      </group>
                    </group>
                    <group name="Object_9_165">
                      <group name="_167">
                        <group name="_166" />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="GolfBall-V2018_120" position={[0,0,0]} scale={0.1}>
                  <group name="golf_ball_121" position={[0,0,0]} scale={0.025}>
                    <group name="Sketchfab_model_122" position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.079}>
                      <group name="3DGeom-1_123" position={[0,0,0]}>
                        <group name="_125">
                          <group name="_124" />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Standing_Arguing-Golf-180_115" position={[0,0,0]} rotation={[0, 0, 0.456]} scale={10}>
                  <group name="Assembly-16_116" scale={0.001} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
export default T_2
useGLTF.preload('/golfkayıt_2.glb')
