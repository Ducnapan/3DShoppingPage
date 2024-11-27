import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import {useRef,Suspense,useEffect, useState} from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer} from 'three';
import './styles/Banner3D.css'
import FeatureItem from './FeatureItem';


// Lighting and environment setup
function Lighting() {
    return (
      <>
        {/* Ambient light for general illumination */}
        <ambientLight intensity={0.3} />
  
        {/* Directional light to simulate sunlight */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
  
        {/* Point light for extra emphasis */}
        <pointLight position={[5, 5, 5]} intensity={1} />
      </>
    );
  }
  


  // Model component to load and animate the .glb file
function AnimatedModel({ path, onTriggerPopUp }) {
  const group = useRef();
  const { scene, animations } = useGLTF(path);
  const mixer = useRef();

  useEffect(() => {
    if (animations) {
      // Initialize the AnimationMixer
      mixer.current = new AnimationMixer(scene);
      animations.forEach((clip) => 
      mixer.current.clipAction(clip).play(),
      );
      
    }
    

    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  useFrame((_, delta) => {
    // Update the animation on each frame
    if (mixer.current) {
        mixer.current.update(delta);
      // Check animation time condition
      mixer.current._actions.forEach((action) => {
        if (Math.abs(action.time - 3) < delta) {
          onTriggerPopUp(true);
        }
        else if(Math.abs(action.time) < delta){
          onTriggerPopUp(false);
        }

      });
    }
  });

  return (
    
     <primitive ref={group} object={scene} />
    
  
);
}

  
  function Banner3D() {
    const [popUp,setPopUp] = useState(false);
    useEffect(()=>{
      console.log(popUp);

    })
    return (
      <div style={{ width: '75vw', height: '100vh' }}>
        <h1 style={{position:'absolute', top:'40%',right:'35%'}} className="slogan">Always on time</h1>
        <FeatureItem
          
          name={"Chair"}
          rates = {3.5}
          img = {"none"}
          show = {popUp}
          />
        <Canvas camera={{ position: [60, 20, 100], fov: 45 }}>
          <Suspense fallback={null}>
            <Lighting />
            <AnimatedModel path="/Models/House.glb" onTriggerPopUp = {setPopUp} />
            
          </Suspense>
        </Canvas>
      </div>
    );
  }
  export default Banner3D;