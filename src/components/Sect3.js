import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Sect3 = () => {

  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sect3",
          pin: true,
          markers: true,
          scrub: true,
          start: "top top",
          end: "top top-=2000"
        }
      });

      tl
        .from(".sect3-title", {
          opacity: 0,
          yPercent: 150
        })
        .fromTo(".sect3-half-circle-s", {
          visibility: "hidden",
          xPercent: -100,
          opacity: 0,
        }, {
          visibility: "visible",
          xPercent: 1,
          opacity: 1,
          duration: 10,
        })
        .fromTo(".sect3-half-circle-e", {
          visibility: "hidden",
          xPercent: 100,
          opacity: 0,
        }, {
          visibility: "visible",
          xPercent: 0,
          opacity: 1,
          duration: 10
        }, "<")
        .to(".sect3-circle", {
          rotation: "90deg"
        })
        .to(".sect3-half-circle", {
          backgroundColor: "#FFF0A4",
          borderColor: "#FFF0A4",
        })
        .from(".sect3-intro-1", {
          opacity: 0,
          left: 0,
          duration: 5,
        })
        .from(".sect3-intro-2", {
          opacity: 0,
          right: 0,
          duration: 5
        })
      
    }, ref);
    
    return ()=>ctx.revert()
  }, [])

  return (
    <section className='position-relative' ref={ref}>
      <div className="sect3 vh-100 py-5">
        <h2 className="sect3-title fw-bold text-primary fs-2 text-center mb-3">
        以下兩個角色進行攜手合作
        </h2>
        <div className="sect3-circle d-flex justify-content-center align-items-center">
          <div className="sect3-half-circle sect3-half-circle-s"></div>
          <div className="sect3-half-circle sect3-half-circle-e"></div>
        </div>
        <div className="">
          <p className="sect3-intro sect3-intro-1 text-primary fs-2 with-italic-line line-top-end">UI 設計師</p>
          <p className="sect3-intro sect3-intro-2 text-primary fs-2 with-italic-line line-top-start">前端工程師</p>
        </div>
      </div>
    </section>
  )
}
