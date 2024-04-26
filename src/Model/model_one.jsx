import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Stage, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import mo from '../assets/model/unit1.glb';


function Model_3() {
    const { scene } = useGLTF(mo);
    return <primitive object={scene} />;
}

function Model() {
    const cameraRef = useRef();
return (
        <div style={{ width: '100%', height: '100vh' }}>
           <Canvas
                dpr={[1, 2]}
                shadows
                camera={{ position: [0, 2, 10], fov: 45 }}
            >
                <color attach="background" args={["#202020"]} />
                {/* Use an ambient light to provide overall illumination */}
                <ambientLight intensity={0.5} />
                {/* Add a directional light representing the sun */}
                <directionalLight position={[5, 10, 5]} intensity={1} color="#202020" />
                {/* Add a point light to simulate local light sources */}
                <pointLight position={[-5, 5, 5]} intensity={0.5} color="#202020" />
                {/* Use OrbitControls to enable user interaction */}
                <OrbitControls />
                <Stage environment="city">
                    <Model_3 />
                </Stage>
            </Canvas>
           
           
            
        </div>
    );
}

export default Model;
