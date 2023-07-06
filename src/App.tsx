import { useRef, useState } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
// import { CustomMaterial } from "./materials/CustomMaterial/CustomMaterial";

function Box(props: ThreeElements["mesh"]) {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((_, delta) => {
        mesh.current.rotation.x += delta;
        mesh.current.rotation.y += delta;
    });

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
            {/* uncomment to start using custom material */}
            {/* <CustomMaterial /> */}
        </mesh>
    );
}

export default function App() {
    return (
        <Canvas>
            <Scene />
        </Canvas>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Box position={[0, 0, 0]} />
        </>
    );
}
