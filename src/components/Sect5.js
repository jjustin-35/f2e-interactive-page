import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsMobile } from '../provider/IsMobileProvider';

gsap.registerPlugin(ScrollTrigger);

const publicUrl = process.env.PUBLIC_URL;

export const Sect5 = () => {
    const isMobile = useIsMobile();
    const ref = useRef();
    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo(".sect5-tl", {
                opacity: 0,
                xPercent: -100,
            }, {
                opacity: 1,
                xPercent: 0,
                delay: 0.5,
                scrollTrigger: {
                    trigger: ".sect5",
                    toggleActions: "play none resume reset"
                }
            })

            const animated = (element, delay = 0) => {
                let xPercent = 0;
                if (element.classList.contains("from-right")) {
                    xPercent = 100;
                } else if (element.classList.contains("from-left")) {
                    xPercent = -100;
                }

                element.style.transform = `translate(${xPercent}, 0)`;

                gsap.fromTo(element, {
                    xPercent,
                    opacity: 0,
                    visibility: "hidden"
                }, {
                    xPercent: 0,
                    opacity: 1,
                    visibility: "visible",
                })
            }

            const hide = element => {
                gsap.set(element, {
                    opacity: 0,
                    visibility: "hidden"
                })
            }

            const intro = gsap.utils.toArray(".sect5-intro-content");

            intro.forEach((element, index) => {
                let delay = index <= 1 ? 1 : 0;

                gsap.set(element, { opacity: 0 , visibility: "hidden"});

                ScrollTrigger.create({
                    trigger: element.parentElement,
                    // markers: true,
                    start: "top 50%",
                    end: "top",
                    onEnter: () => animated(element, delay),
                    onLeaveBack: () => hide(element)
                })
            })
            
        }, ref)
    }, [])
  return (
      <Container className='py-3 position-relative' ref={ref}>
          <Row className="sect5 text-primary flex-nowrap">
              <Col xs={2} className="text-end sect5-tl">
                  <img src={publicUrl + (isMobile ? "/img/timeline-mobile.png" : "/img/timeline.png")} alt="" className='sect5-tl-line' />
              </Col>
              <Col className="position-relative">
                  <div className="sect5-intro sect5-intro-1 d-flex justify-content-between align-items-center flex-wrap flex-md-nowrap w-100 position-relative">
                      <div className="sect5-intro-content from-left">
                          <h3 className="fs-1-25 fs-md-2">報名時間：10/13~10/30</h3>
                          <p className="fs-1 fs-md-1-5">截止前可修改報名組別</p>
                      </div>
                      <div className="sect5-intro-content from-right w-100 w-md-auto">
                          <img src={publicUrl+"/img/sect5-paper.png"} alt="paper" className='sect5-intro-1-img position-absolute position-md-relative'/>
                      </div>
                  </div>
                  <div className="sect5-intro sect5-intro-2 d-flex justify-content-between flex-wrap flex-md-nowrap w-100">
                      <div className="sect5-intro-content from-left">
                          <h3 className="fs-1-25 fs-md-2 mb-0-5">
                          登錄作品：10/31~11/28
                          </h3>
                          <ul className="fs-1 fs-md-1-5 pb-0">
                              <li>依賽程登錄作品</li>
                              <li>UI、團體組開賽：10/31(一)</li>
                              <li>1/7(一) 前端組開賽</li>
                          </ul>
                      </div>
                      <div className="sect5-intro-content from-right position-relative w-md-40 w-100">
                          <img src={publicUrl + "/img/sect5-check.png"} alt="checked" className=' position-absolute sect5-intro-2-img' />
                      </div>
                  </div>
                  <div className="sect5-intro sect5-intro-3 d-flex justify-content-between flex-wrap flex-md-nowrap w-100">
                      <div className="sect5-intro-content from-left">
                          <h3 className="fs-1-25 fs-md-2">額外競賽：主題豐厚獎金等著你</h3>
                      </div>
                      <div className="sect5-intro-content from-right w-100 w-md-40 position-relative">
                        <img src={publicUrl + "/img/sect5-coin.png"} alt="coin" className=" position-absolute sect5-intro-3-img"/>
                      </div>
                  </div>
                  <div className="sect5-intro sect5-intro-4 d-flex justify-content-between">
                      <div className="sect5-intro-content from-left">
                          <h3 className="fs-1-25 fs-md-2">開賽時間：</h3>
                          <p className="fs-1-25 fs-md-2">10/31(一) UI、團體組開賽<br />11/7(一) 前端組開賽</p>
                          <p className="fs-1 fs-md-1-5">活動採用 UI、前端接力合作形式，前端工程師可採用 UI 設計師的設計稿，一同產出完整作品。</p>
                    </div>
                  </div>
              </Col>
              <div className="sect5-intro sect5-intro-banner position-absolute w-100 end-0 start-0">
                <div className="sect5-intro-content">
                    <img src={publicUrl + "/img/sect5-f2e.png"} alt="f2e" className='w-100'/>
                </div>
              </div>
          </Row>
    </Container>
  )
}
