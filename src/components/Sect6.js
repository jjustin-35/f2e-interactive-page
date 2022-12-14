import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Row, Col } from 'react-bootstrap';

gsap.registerPlugin(ScrollTrigger);

export const Sect6 = () => {
    const ref = useRef();
    useEffect(() => {
        gsap.context(() => {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect6",
                    start: "top 40%",
                    end: "top",
                    toggleActions: "play none resume reset"
                }
            })

            tl1
                .fromTo(".sect6-title", {
                    yPercent: 100,
                    opacity: 0,
                    visibility: "hidden",
                }, {
                    yPercent: 0,
                    opacity: 1,
                    visibility: "visible"
                })
                .fromTo(".sect6-intro-block-1", {
                    xPercent: -100,
                    opacity: 0,
                    visibility: "hidden"
                }, {
                    xPercent: 0,
                    opacity: 1,
                    visibility: "visible",
                    duration: 1
                })
                .fromTo(".sect6-intro-block-2", {
                    xPercent: 100,
                    opacity: 0,
                    visibility: "hidden"
                }, {
                    xPercent: 0,
                    opacity: 1,
                    visibility: "visible",
                    duration: 1
                })
            
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sect6-prize",
                    start: "top 40%",
                    end: "top",
                    toggleActions: "play none resume reset"
                }
            });

            tl2
                .fromTo(".sect6-prize", {
                    opacity: 0,
                }, {
                    opacity: 1,
                    duration: 1
                })
                .fromTo(".sect6-prize-content", {
                    yPercent: 100,
                    opacity: 0,
                    visibility: "hidden"
                }, {
                    yPercent: 0,
                    opacity: 1,
                    visibility: "visible"
            })
        }, ref)

    }, [])

  return (
      <div ref={ref}>
          <div className="sect6 py-2">
              <h2 className="sect6-title fs-md-2-5 fs-1-25 text-center fw-bold mb-5">???????????????????????????????????????????????????????????????</h2>
              <Container className="sect6-intro">
                  <Row className="mb-1">
                      <Col md={{ span: 9, offset: 1 }} xs={9}>
                          <div className="bg-primary p-md-3 p-0-75 text-center align-middle text-dark fw-bold d-flex justify-content-center align-items-center fs-md-1-5 fs-1 sect6-intro-block sect6-intro-block-1">
                            ????????????????????????????????????UI ??????????????????????????????
                          </div>
                      </Col>
                </Row>
                  <Row>
                      <Col md={{ span: 8, offset: 3}} xs={{span: 9, offset: 3}}>
                        <div className="bg-secondary p-md-3 p-0-75 text-center d-flex justify-content-center align-items-center text-dark fw-bold fs-md-1-5 fs-1 sect6-intro-block sect6-intro-block-2">
                            ??????????????????????????????????????????????????????????????????<br/>?????? 12/30(???) ????????????????????????????????????
                        </div>
                      </Col> 
                  </Row>
              </Container>
              <div className="sect6-prize bg-primary py-md-5 py-1-25">
                  <Container>
                      <Row className="justify-content-center mb-md-3 mb-1">
                          <Col md={10} className="d-flex justify-content-between fw-bold fs-md-1-5 fs-0-75 text-secondary text-center">
                              <div className="w-30 d-flex justify-content-center align-items-center bg-dark border border-secondary rounded-3 sect6-prize-block">
                                  <div className="sect6-prize-content">
                                  ????????????<br /><br />
                                  ????????????<br /><br />
                                  ????????????
                                  </div>
                              </div>
                              <div className="w-30 d-flex justify-content-center align-items-center bg-dark border border-2 border-secondary rounded-3 sect6-prize-block">
                                  <div className="sect6-prize-content">
                                    ???????????????<br /><br />
                                    ?????????<br /><br />
                                    NTD 3,000/???
                                </div>
                              </div>
                              <div className="w-30 d-flex justify-content-center align-items-center bg-dark border border-secondary rounded-3 sect6-prize-block">
                                  <div className="sect6-prize-content">
                                  ???????????????<br /><br />
                                ?????????<br /><br />
                                NTD 10,000/???
                                </div>
                              </div>
                          </Col>
                      </Row>
                      <p className="text-dark fs-1-5 text-center mb-0 fw-bold sect6-prize-content">?????????????????????????????????</p>
                  </Container> 
              </div>
          </div>
      </div>
  )
}
