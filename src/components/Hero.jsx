import { useEffect, useRef } from "react"

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if(videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
        <div>
            <h1 className=" text-3xl text-center text-white">MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>

        <video className="mx-auto lg:translate-y-5 2xl:translate-y-0" ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

        <button className="relative z-10 bg-primary text-white py-2 px-6 mt-10 lg:mt-0 mb-5 rounded-full font-semibold text-lg cursor-pointer hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          Buy
        </button>

        <p className="text-white opacity-70 font-thin">From $1599</p>
    </section>
  )
}

export default Hero