import React from 'react'
import useMacbookStore from '../store'
import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import MacbookModel14 from './models/Macbook-14';

import StudioLights from './three/StudioLights';
import ModelSwitcher from './three/ModelSwitcher';
import { useMediaQuery } from 'react-responsive';

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});

  return (
    <section className="container relative min-h-[93vh] mx-auto px-5 2xl:px-0 mt-40">
        <h2 className="text-white font-semibold text-3xl lg:text-6xl">Take a closer look.</h2>

        <div className="absolute z-50 bottom-40 lg:bottom-40 2xl:bottom-52 left-1/2 -translate-x-1/2">
            <p className="opacity-70 text-xs text-white bg-black/20 px-2 py-1 rounded-lg">
            Macbook Pro | available in 14" & 16" in Silver & Space Gray</p>

            <div className="flex-center gap-5 mt-5">
                <div className="flex-between bg-neutral-800 rounded-full px-6 py-3 gap-4">
                    <div 
                        onClick={() => setColor('#adb5bd')} 
                        className={clsx('size-7 rounded-full cursor-pointer bg-neutral-300', color === '#adb5bd' && 'ring-3 size-3 ring-light-100')}
                    />
                    <div 
                        onClick={() => setColor('#2e2c2e')} 
                        className={clsx('size-7 rounded-full cursor-pointer bg-neutral-900', color === '#2e2c2e' && 'ring-3 size-3 ring-light-100')}
                    />
                </div>

                <div className="small-medium flex-between bg-neutral-800 rounded-full px-6 py-2.5 gap-2">
                    <div 
                        onClick={() => setScale(0.06)} 
                        className={clsx('size-8 rounded-full cursor-pointer text-stone-800 flex-center', scale === 0.06 ? 'bg-white text-stone-800' : 'bg-transparent text-white')}
                    >
                        <p>14"</p>
                    </div>
                    <div 
                        onClick={() => setScale(0.08)} 
                        className={clsx('size-8 rounded-full cursor-pointer text-stone-800 flex-center', scale === 0.08 ? 'bg-white text-stone-800' : 'bg-transparent text-white')}
                    >
                        <p>16"</p>
                    </div>
                </div>
            </div>
        </div>

        <Canvas id="canvas" className="w-full! h-[80vh]! lg:h-dvh! relative z-40" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
            <StudioLights />
            
            <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile}/>
        
        </Canvas>
    </section>
    )
}

export default ProductViewer