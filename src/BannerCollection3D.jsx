import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef, Suspense, useEffect, useState } from 'react';
import { AnimationMixer } from 'three';
import './styles/Banner3D.css';
import FeatureItem from './FeatureItem';
import data from './tempstore.json';

const baseUrl = import.meta.env.VITE_APP_BASE_URL;

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
    </>
  );
}

function AnimatedModel({ path }) {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const mixer = useRef();

  useEffect(() => {
    if (animations.length) {
      mixer.current = new AnimationMixer(scene);
      animations.forEach(clip => mixer.current.clipAction(clip).play());
    }
    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  useFrame((_, delta) => mixer.current?.update(delta));

  return <primitive ref={group} object={scene} />;
}

function BannerCollection3D() {
  const [randNum] = useState(() => Math.floor(Math.random() * 30));

  return (
    <div className="d-flex justify-content-center align-self-center align-items-center m-5">
      <div
        className="border-rounded rounded"
        style={{
          background: 'linear-gradient(159deg, rgba(0,71,171,1) 0%, rgba(28,169,201,1) 100%)',
          width: '60%',
          height: '50%'
        }}
      >
        <div className="d-flex justify-content-center align-self-center overflow-hidden">
          <div
            style={{
              marginTop: '5em',
              marginBottom: '-5em',
              width: '22vw',
              height: '40vh',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <FeatureItem
              name={data[randNum].name}
              rates={5}
              img={data[randNum].img}
            />
            <Canvas style={{ width: '100%', height: '100%' }} camera={{ position: [50, 5, 50], fov: 6 }}>
              <Suspense fallback={null}>
                <Lighting />
                <AnimatedModel path={`${baseUrl}/Models/TestRoom.glb`} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCollection3D;
