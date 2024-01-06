'use client'

import { useGLTF, useTexture,Decal } from "@react-three/drei";
import {useFrame} from '@react-three/fiber'
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";

const Shirt = () => {

  const snap = useSnapshot(state)
  const stateString = JSON.stringify(snap)

  const {nodes,materials} = useGLTF('./shirt_baked.glb')
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)

  useFrame((state,delta)=>
    easing.dampC(materials.lambert1.color,snap.color, 0.25,delta)
  )

  return (
    <group key={stateString}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
          {snap.isFullTexture && (
            <Decal
              position={[0 ,0 ,0]}
              rotation={[0 ,0 ,0]}
              scale={1}
              map={fullTexture}
            />
          )}

          {snap.isLogoTexture && (
            <Decal
              position={[0.09 ,0.07 ,0.11]}
              rotation={[0 ,0 ,0]}
              scale={0.05}
              map={logoTexture}
              depthTest={false}
              depthWrite={true}
            />
          )}
      </mesh>
    </group>
  );
}
 
export default Shirt;