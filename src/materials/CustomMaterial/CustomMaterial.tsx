import frag from "./fragment.glsl";
import vert from "./vertex.glsl";
import * as THREE from "three";
import { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";

type matProps = {
    color?: string;
};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            colorShiftMaterial: matProps &
                JSX.IntrinsicElements["shaderMaterial"];
        }
    }
}

const ColorShiftMaterial = shaderMaterial(
    { u_time: 0, u_color: new THREE.Color(0.2, 0.0, 0.1) },
    vert,
    frag
);
extend({ ColorShiftMaterial });

export function CustomMaterial() {
    const customMat = useRef<THREE.ShaderMaterial>(null!);

    useFrame(({ clock }) => {
        if (customMat.current) {
            customMat.current.uniforms.u_time.value = clock.getElapsedTime();
        }
    });

    return (
        <colorShiftMaterial
            ref={customMat}
            key={ColorShiftMaterial.key}
            color="blue"         
        />
    );
}
