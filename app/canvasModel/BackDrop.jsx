import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";

const BackDrop = () => {

    const shadows = useRef()

    return (
        <AccumulativeShadows
            ref={shadows}
            temporal
            frames={60}
            alphaTest={0.02}
            scale={1.5}
            rotation={[Math.PI/2 , 0.5, 0]}
            position={[0, 0, -0.15]}
        >
            <RandomizedLight
                amount={4}
                radius={9}
                intensity={0.55}
                ambient={0.25}
                position={[10, 30, -20]}
            />
        </AccumulativeShadows>
    );
}
 
export default BackDrop;