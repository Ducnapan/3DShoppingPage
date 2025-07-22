import { Canvas } from '@react-three/fiber';
import {useGLTF } from '@react-three/drei';
import {useRef,Suspense,useEffect, useState} from 'react';
import { useFrame } from '@react-three/fiber';
import { AnimationMixer} from 'three';
import './styles/Banner3D.css'
import FeatureItem from './FeatureItem';
import data from './tempstore.json';

const baseUrl = import.meta.env.VITE_APP_BASE_URL
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
     
    }
  });

  return (
    
     <primitive ref={group} object={scene} />
    
  
);
}

  
  function BannerCollection3D() {
    const [popUp,setPopUp] = useState(false);
    const [randNum,setRandNum] = useState(0)
    
    useEffect(()=>{
      if (popUp) {
        setRandNum(Math.floor(Math.random() * 30));
    }
}, [popUp]); 

    return (
      <div className='d-flex justify-content-center align-self-center align-items-center m-5'>
      <div className='border-rounded rounded' style={{background: 'linear-gradient(159deg, rgba(0,71,171,1) 0%, rgba(28,169,201,1) 100%)',width:'60%', height:'50%'}}>
     
       

      <div className='d-flex justify-content-center align-self-center'>
      <div className='mt-5' style={{ width: '30vw', height: '40vh',position:'relative',overflow:'hidden'}}>
        <FeatureItem
          
          name={data.at(randNum).name}
          rates = {5}
          img = {data.at(randNum).img}
          show = {popUp}
          />
        <Canvas 
               
               style={{width:'100%',height:'100%'}}
               camera={{ position: [50,5,50], fov: 6 }}>
          <Suspense fallback={null}>
            <Lighting />
            <AnimatedModel path={`${baseUrl}/Models/TestRoom.glb`}/>
            
          </Suspense>
        </Canvas>
        </div>
      </div>
      </div>
      </div>
    );
  }
  export default BannerCollection3D;