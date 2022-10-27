import React, { useEffect } from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Sect2 = () => {
    const ref = useRef();

    useEffect(() => {

        //gsap.context: ref 中的元素都能取得
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".scroll-trigger",
                    pin: true,
                    scrub: true,
                    // markers: true,
                    start: "top top",
                    end: "top top-=2000"
                }
            });
        
            tl
                .fromTo(".scroll-box1", {
                xPercent: "-100"
            }, {
                xPercent: "0",
                duration: 10
            })
                .fromTo(".scroll-box3", {
                position: "absolute",
                bottom: "0",
                right: "-100%"
            }, {
                position: "absolute",
                bottom: "0",
                right: "0",
                duration: 10
            }, "<")
                .fromTo('.scroll-content1', {
                    opacity: 0,
                    yPercent: 100,
                }, {
                    opacity: 1,
                    yPercent: 0,
                    duration: 15
                })
                .fromTo('.scroll-content2', {
                    opacity: 0,
                    yPercent: 100,
                }, {
                    opacity: 1,
                    yPercent: 0,
                    duration: 15
                })
                .fromTo('.scroll-content3', {
                    opacity: 0,
                    yPercent: 100,
                }, {
                    opacity: 1,
                    yPercent: 0,
                    duration: 15
                })
        }, ref);

        // 清除 ctx
        return () => ctx.revert();
    }, [])

  return (
      <div className='position-relative' ref={ref}>
          <div className="scroll-trigger vh-100 w-100">
              <div className="scroll-box scroll-box1 bg-primary w-100 d-flex justify-content-center align-items-center">
                  <div className="scroll-content1 fs-3 text-dark">羨慕別人的酷酷網頁動畫？</div>
            </div>
              <div className='scroll-box scroll-box2 d-flex justify-content-center align-items-center'>
                  <div className="scroll-content2 fs-3 text-primary">滿足不了同事的許願？</div>
              </div>
              <div className="scroll-box scroll-box3 bg-primary w-100 d-flex justify-content-center align-items-center">
                  <div className="scroll-content3 fs-3 text-dark">動畫技能樹太雜無從下手？</div>
              </div>
          </div>
    </div>
  )
}
