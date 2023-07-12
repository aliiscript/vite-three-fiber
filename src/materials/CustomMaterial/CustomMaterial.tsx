import frag from "./fragment.glsl";
import vert from "./vertex.glsl";
import * as THREE from "three";
import { useRef, forwardRef, useImperativeHandle } from "react";
import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";

type matProps = {
    color?: string;
};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            myMaterial: matProps & JSX.IntrinsicElements["shaderMaterial"];
        }
    }
}

export const MyMaterial = shaderMaterial(
    { u_time: 0, u_color: new THREE.Color(0.2, 0.0, 0.1) },
    vert,
    frag
);
extend({ MyMaterial });

export const CustomMaterial = forwardRef((props, ref) => {
    const customMat = useRef<THREE.ShaderMaterial>(null!);

    useFrame(({ clock }) => {
        if (customMat.current) {
            customMat.current.uniforms.u_time.value = clock.getElapsedTime();
        }
    });

    // expose the custom material instance through the `ref` prop
    useImperativeHandle(ref, () => customMat.current);

    return (
        <myMaterial
            ref={customMat}
            key={MyMaterial.key}
            color="blue"
            {...props}
        />
    );
});
