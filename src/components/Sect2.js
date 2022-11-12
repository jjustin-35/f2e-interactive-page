import React, { useEffect} from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { mobileContext } from '../provider/IsMobileProvider';
import { useIsMobile } from "../provider/IsMobileProvider";

gsap.registerPlugin(ScrollTrigger);
const local = process.env.PUBLIC_URL;

export const Sect2 = () => {
    const isMobile = useIsMobile();
    const ref = useRef();

    useEffect(() => {

        //gsap.context: ref 中的元素都能取得
        let ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".scroll-trigger",
                    pin: true,
                    scrub: 1,
                    // markers: true,
                    start: "top top",
                    end: "top top-=2500",
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
                
                if (!isMobile) {
                    tl.fromTo(".bubble", {
                        opacity: 0,
                        xPercent: -100,
                    }, {
                        css: {
                            opacity: 1,
                            xPercent: 0,
                            duration: 5
                        }
                    })
                } else {
                    tl.fromTo(".bubble", {
                        opacity: 0,
                        xPercent: -100,
                    }, {
                        css: {
                            opacity: 1,
                            xPercent: -60,
                            duration: 5
                        }
                    })
                }
        }, ref);

        // 清除 ctx
        return () => ctx.revert();
    }, [])

  return (
      <div className='position-relative' ref={ref}>
          <div className="scroll-trigger vh-100 w-100 sect2">
            <div className="scroll-box scroll-box1 bg-primary w-100 d-flex justify-content-center align-items-center">
                <div className="scroll-content1 fs-3 text-dark">羨慕別人的酷酷網頁動畫？</div>
            </div>
              <div className='scroll-box scroll-box2 d-flex justify-content-center align-items-center'>
                  <div className="scroll-content2 fs-3 text-primary">滿足不了同事的許願？</div>
              </div>
              <div className="scroll-box scroll-box3 bg-primary w-100 d-flex justify-content-center align-items-center">
                  <div className="scroll-content3 fs-3 text-dark">動畫技能樹太雜無從下手？</div>
              </div>
              <div className="bubble">
                  <img src={local + "/img/Allbuble.png"} alt="bubble" className="vh-100" />
              </div>
          </div>
    </div>
  )
}
