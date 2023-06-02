import frag from "./fragment.glsl";
import vert from "./vertex.glsl";
import * as THREE from "three";
import { useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";

type matProps = {
    time: number;
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
    { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
    vert,
    frag
);
extend({ ColorShiftMaterial });

export function CustomMaterial() {
    const customMat = useRef<THREE.ShaderMaterial>(null!);

    useFrame(({ clock }) => {
        if (customMat.current) {
            customMat.current.uniforms.time.value = clock.getElapsedTime();
        }
    });

    return (
        <colorShiftMaterial
            ref={customMat}
            key={ColorShiftMaterial.key}
            color="blue"
            time={5}
        />
    );
}
