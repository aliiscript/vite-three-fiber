import frag from "./fragment.glsl";
import vert from "./vertex.glsl";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

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
    return (
        <colorShiftMaterial
            key={ColorShiftMaterial.key}
            color="blue"
            time={5}
        />
    );
}
