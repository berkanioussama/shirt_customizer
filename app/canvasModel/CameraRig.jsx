'use client'

import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

import { snapshot, useSnapshot } from "valtio";
import state from "../store";
import { useRef } from "react";

const CameraRig = ({children}) => {

    const group = useRef()
    const snap = useSnapshot(state)

    useFrame((state,delta)=>{

        const isBreakpoint = window.innerWidth <= 1260
        const isMobile = window.innerWidth <= 600

        // set initial position of the shirt
        let targetPosition = [-0.4, 0, 2]
        if(snap.intro){
            if(isBreakpoint) targetPosition = [0, 0, 2]
            if(isMobile) targetPosition = [0, 0.2, 3]
        }else{
            if(isMobile) targetPosition = [0 , 0, 3]
            else targetPosition = [0, 0 ,2]
        }

        // set camera position
        easing.damp3(state.camera.position, targetPosition,0.8,delta)


        // set the shirt rotation smoothly with maath
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 5 , -state.pointer.x *3 , 0],
            0.8,
            delta
        )
    })

    return (
        <group ref={group}>
            
            {children}
        </group>
    );
}
 
export default CameraRig;