import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Golf = (props) => {
  const { value } = props;
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/golf.glb')
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
                <group name="golf_course_142" position={[108.444, 6.158, 2.372]} rotation={[0, 0, -2.746]}>
                  <group name="Sketchfab_model_143">
                    <group name="Object_2_144">
                      <group name="_146">
                        <group name="_145">
                          <mesh name="Object_160" geometry={nodes.Object_160.geometry} material={materials.model} />
                        </group>
                      </group>
                    </group>
                    <group name="Object_3_147">
                      <group name="_149">
                        <group name="_148">
                          <mesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials.model} />
                        </group>
                      </group>
                    </group>
                    <group name="Object_4_150">
                      <group name="_152">
                        <group name="_151">
                          <mesh name="Object_168" geometry={nodes.Object_168.geometry} material={materials.model} />
                        </group>
                      </group>
                    </group>
                    <group name="Object_5_153">
                      <group name="_155">
                        <group name="_154">
                          <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.model} />
                        </group>
                      </group>
                    </group>
                    <group name="Object_6_156">
                      <group name="_158">
                        <group name="_157">
                          <mesh name="Object_176" geometry={nodes.Object_176.geometry} material={materials.model} />
                        </group>
                      </group>
                    </group>
                    <group name="Object_7_159">
                      <group name="_161">
                        <group name="_160">
                          <mesh name="Object_180" geometry={nodes.Object_180.geometry} material={materials.model} />
                        </group>
                      </group>
                    </group>
                    <group name="Object_8_162">
                      <group name="_164">
                        <group name="_163">
                          <mesh name="Object_184" geometry={nodes.Object_184.geometry} material={materials.model} />
                        </group>
                      </group>
                    </group>
                    <group name="Object_9_165">
                      <group name="_167">
                        <group name="_166">
                          <mesh name="Object_188" geometry={nodes.Object_188.geometry} material={materials.model} />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group name="GolfBall-V2018_120" position={[-0.732, -0.512, 0.017]} scale={0.1}>
                  <group name="golf_ball_121" position={[0.151, -0.786, 1.083]} scale={0.025}>
                    <group name="Sketchfab_model_122" position={[0, 0, 39.37]} rotation={[Math.PI / 2, 0, 0]} scale={0.079}>
                      <group name="3DGeom-1_123" position={[0, 0, 144.663]}>
                        <group name="_125">
                          <group name="_124">
                            <mesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials.initialShadingGroup} />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
                <group name="Standing_Arguing-Golf-180_115" position={[-2.684, 1.481, 0.001]} rotation={[0, 0, 0.456]} scale={10}>
                  <group name="Assembly-16_116" scale={0.001}>
                    <group name="GLTF_created_1">
                      <primitive object={nodes.GLTF_created_1_rootJoint} />
                      <skinnedMesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.Wolf3D_Avatar_0} skeleton={nodes.Object_76.skeleton} />
                    </group>
                  </group>
                </group>
                <group name="Voiturette-V2018_126" position={[-1.154, 9.396, -0.087]} rotation={[0, 0, 1.693]} scale={2}>
                  <group name="Assembly-1_127" position={[-1.717, -0.927, 0]} scale={0.025}>
                    <group name="area_9_golf_cart_132" position={[63.273, 36.505, 0.067]} scale={0.028}>
                      <group name="Sketchfab_model_133">
                        <group name="golfcart_0_134" scale={4.828}>
                          <group name="3DGeom-2_135">
                            <group name="_137">
                              <group name="_136">
                                <mesh name="Object_149" geometry={nodes.Object_149.geometry} material={materials.golfcart} />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="golfcart_1_138" scale={1.923}>
                          <group name="3DGeom-3_139">
                            <group name="_141">
                              <group name="_140">
                                <mesh name="Object_154" geometry={nodes.Object_154.geometry} material={materials.golfcart_glass} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                    <group name="Part-2_128" position={[98.447, 70.701, 15.001]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={4.324}>
                      <group name="3DGeom-1_129">
                        <group name="_131">
                          <group name="_130">
                            <mesh name="Object_142" geometry={nodes.Object_142.geometry} material={materials.Color_M09} />
                          </group>
                        </group>
                      </group>
                    </group>
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
useGLTF.preload('/golf.glb')
