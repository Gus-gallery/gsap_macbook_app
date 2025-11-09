import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useMediaQuery } from 'react-responsive'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger) 

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
    const showcaseRef = useRef();
    const maskRef = useRef();
    const contentRef = useRef();


    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: showcaseRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true,
                }
            });

            timeline.to(maskRef.current, {
                transform: 'scale(1.1)'
                });
            timeline.to(contentRef.current, { 
                opacity: 1, y: 0, ease: 'power1.in' });
        }
    }, [isTablet])

  return (
    <section ref={showcaseRef} id="showcase" className="relative min-h-screen">
        <div className="relative lg:overflow-hidden">
            <video src="/videos/game.mp4" className="w-full object-cover object-center" loop muted autoPlay playsInline/>
            <div className="absolute h-full top-0 lg:-top-20 xl:top-0">
                <img ref={maskRef} src="/mask-logo.svg" className="h-full scale-150 lg:scale-100" style={{
                    transform: isTablet
                    ? 'matrix(1, 0, 0, 1, 0, 0)'
                    : 'matrix(80, 0, 0, 80, 0, 0)',
                }}/>
            </div>
        
        </div>

        <div ref={contentRef} className="relative z-10 my-5 lg:-mt-40 bg-black font-semibold text-xl text-dark-100 lg:opacity-0">
            <div className="container mx-auto px-5 pb-20 2xl:px-0 flex flex-col lg:flex-row justify-center gap-20"> 
                <div className="lg:max-w-md">
                    <h2 className="font-semibold text-3xl lg:text-7xl text-white">Rocket Chip</h2>

                    <div className="space-y-5 mt-7 pe-10">
                        <p>
                            Introducing {" "}
                            <span className="text-white">
                                M4, the next generation of Apple silicon 
                            </span>
                            . M4 powers
                        </p>
                        <p>
                            It drives Apple Intelligence on iPad Pro, so you can write, create and accomplish more with ease. All in a design that's extremely thin, light and powerful.
                        </p>
                        <p>
                            A brand-new display engine delivers breathtaking precision, colour accuracy and brightness. And a next-generation GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                        </p>
                        <p className="text-primary">
                            Learn more about Apple Intelligence
                        </p>
                    </div>
                </div>

                <div className="max-w-3xs space-y-14">
                    <div className="space-y-2">
                        <p>Up to</p>
                        <h3 className="font-semibold text-xl lg:text-5xl text-white">
                            4x faster
                        </h3>
                        <p>rendering performance than the M2 chip.</p>
                    </div>
                    <div className="space-y-2">
                        <p>Up to</p>
                        <h3 className="font-semibold text-xl lg:text-5xl text-white">
                            1.5x faster
                        </h3>
                        <p>CPU performance than the M2 chip.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Showcase