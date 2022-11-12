import React, { useEffect, useRef } from 'react';
import { mobileContext } from '../provider/IsMobileProvider';
import { useIsMobile } from '../provider/IsMobileProvider';
import { Container} from 'react-bootstrap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const local = process.env.PUBLIC_URL;

export const Sect4 = () => {
  const isMobile = useIsMobile();
  const ref = useRef();

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sect4",
          toggleActions: "play none resume reset",
        }
      })

      tl1
        .fromTo(".sect4-title", {
          visibility: "hidden",
          opacity: 0,
          y: 50,
        }, {
          visibility: "visible",
          opacity: 1,
          y: 0,
          duration: 2,
        })
        .fromTo(".sect4-themes", {
          visibility: "hidden",
          opacity: 0,
          x: -100
        }, {
          visibility: "visible",
          opacity: 1,
          x: 0,
        })
      
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sect4",
          pin: true,
          scrub: true,
          start: "top top",
          end: "top top-=2500",
          toggleActions: "play reverse resume reset",
        }
      })

      tl2
        .to(".sect4-themes-space", {
          rotateX: 90,
          ease: "ease-in",
          delay: 0.5
        })
        .to(".sect4-themes-space", {
          rotateX: 180,
          ease: "ease-in",
        })

    }, ref)

    return () => ctx.revert();
  }, [])

  return (
    <Container className='' ref={ref}>
      <div className='sect4 py-2-5'>
        <h2 className="sect4-title text-primary fs-2-25 fw-bold text-center mb-1">年度最強合作，三大主題來襲</h2>
        <div className="sect4-themes mx-auto">
          <div className="sect4-themes-space">
            <div className="sect4-theme sect4-theme-w1 pb-1">
          <img src={local +( isMobile ? ("/img/sect4-w1-mobile.png") : ("/img/Week1_picweek1.png"))} alt="week 1" className='w-100 d-block'/>
          </div>
          <div className="sect4-theme sect4-theme-w2 pb-1">
            <img src={local + (isMobile ? ("/img/sect4-w2-mobile.png") : ("/img/Week2_picweek2.png"))} alt="week 2" className='w-100 d-block'/>
          </div>
          <div className="sect4-theme sect4-theme-w3 pb-1">
            <img src={local + (isMobile ? ("/img/sect4-w3-mobile.png") : ("/img/Week3_picwee3.png"))} alt="week 3" className='w-100 d-block'/>
          </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
