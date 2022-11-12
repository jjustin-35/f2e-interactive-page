import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Sect7 = () => {

    const ref = useRef();
    useEffect(() => {
        gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect7",
                    pin: true,
                    start: "top top",
                    end: "top top-=2000",
                    markers: true,
                    toggleActions: "play none resume reset"
                }
            })

            tl.fromTo(".sect7-circle", {
                strokeDasharray: "1000",
                strokeDashoffset: "1000",
            }, {
                strokeDashoffset: 0,
                duration: 3,
            }).fromTo(".sect7-company", {
                yPercent: 100,
                opacity: 0,
                visibility: "hidden"
            }, {
                yPercent: 0,
                opacity: 1,
                visibility: "visible"
            })
        }, ref)
    })
    
  return (
      <div ref={ref}>
          <div className="sect7 vh-100 d-flex justify-content-center align-items-center">
          <svg width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg" className='sect7-circle'>
            <mask id="path-1-inside-1_290_4" fill="white">
            <path d="M192 96C192 149.019 149.019 192 96 192C42.9807 192 0 149.019 0 96C0 42.9807 42.9807 0 96 0C149.019 0 192 42.9807 192 96ZM19.7654 96C19.7654 138.103 53.8968 172.235 96 172.235C138.103 172.235 172.235 138.103 172.235 96C172.235 53.8968 138.103 19.7654 96 19.7654C53.8968 19.7654 19.7654 53.8968 19.7654 96Z"/>
            </mask>
            <path d="M192 96C192 149.019 149.019 192 96 192C42.9807 192 0 149.019 0 96C0 42.9807 42.9807 0 96 0C149.019 0 192 42.9807 192 96ZM19.7654 96C19.7654 138.103 53.8968 172.235 96 172.235C138.103 172.235 172.235 138.103 172.235 96C172.235 53.8968 138.103 19.7654 96 19.7654C53.8968 19.7654 19.7654 53.8968 19.7654 96Z" stroke="#FFF8D4" strokeWidth="10" mask="url(#path-1-inside-1_290_4)" />
              </svg>
              <h2 className="sect7-company sect7-company-1">鈦坦科技</h2>
              <h2 className="sect7-company sect7-company-2">凱鈿科技</h2>
              <h2 className="sect7-company sect7-company-3">版塊設計</h2>
          </div>
    </div>
  )
}
