import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)'});

  useGSAP(() => {
    gsap.to(['.masonry'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'top 90%' : 'top top'
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power1.inOut'
    });
  }, [isMobile]);


  return (
    <section id="highlights" className="container mx-auto lg:py-40 max-lg:px-5">
      <h2 className="text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">There's never been a better time to upgrade.</h2>
      <h3 className="text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10">Here's what you get with the new MacBook Pro.</h3>
    
      <div className="masonry grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 text-[#F5F5F7] opacity-0">
        {/*VENSTRE SIDE*/}
        <div className="flex flex-col justify-between gap-5 opacity-100 -translate-y-5">
          <div className="h-full bg-[url(/highlight-bg.png)] bg-no-repeat bg-cover p-10 2xl:pt-32 lg:pt-20 rounded-3xl">
            <img src="/laptop.png" alt="Laptop" />
            <p className="font-semibold text-4xl max-w-2xs">Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div className="bg-[#1D1D1F] p-10 rounded-3xl flex items-center gap-7">
            <img src="/sun.png" alt="Sun" />
            <p className="font-semibold lg:text-2xl 2xl:text-3xl">
              A stunning <br />
              Liquid Retina XDR <br />
              display.</p>
          </div>
        </div>
        {/*HØJRE SIDE*/}
        <div className="flex flex-col justify-between gap-5 opacity-100 -translate-y-5">
          <div className="p-10 flex items-center gap-7 relative bg-[#1d1d1f] border-4 border-transparent rounded-3xl bg-clip-padding">
            <img src="/ai.png" alt="AI" />
            <p className="font-semibold text-4xl max-w-2xs">
              Built for <br /> 
              <span>Apple Intelligence.</span></p>
          </div>
          <div className="h-full bg-[#1D1D1F] p-10 2xl:pt-32 lg:pt-20 rounded-3xl">
            <img src="/battery.png" alt="Battery" />
            <p className="font-semibold lg:text-2xl 2xl:text-3xl">
              Up to 14 more hours battery life. (Up to 24 hours total.)</p>
          </div>
        </div>
        
      </div>
   
   </section>
  )
}

export default Highlights