import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Row, Col } from 'react-bootstrap';

gsap.registerPlugin(ScrollTrigger);

export const Sect8 = () => {
  const [isMouseIn, setIsMouseIn] = useState([false, false, false, false]);
  const ref = useRef();

    useEffect(() => {
      const lessons = ref.current.querySelectorAll(".sect8-lesson");
      
      lessons.forEach((element, index) => {
        element.addEventListener('mouseover', () => {
          let newArray = [...isMouseIn];
          newArray[index] = true;
          setIsMouseIn(newArray);
        });
        element.addEventListener('mouseout', () => {
          let newArray = [...isMouseIn];
          newArray[index] = false;
          setIsMouseIn(newArray);
        });

      })

      return lessons.forEach((element, index) => {
        element.removeEventListener('mouseenter', () => {
          let newArray = [...isMouseIn];
          newArray[index] = true;
          setIsMouseIn(newArray);
        });

        element.removeEventListener('mouseleave', () => {
          let newArray = [...isMouseIn];
          newArray[index] = false;
          setIsMouseIn(newArray);
        });
      })

    },[])
  return (
    <Container ref={ref}>
      <div className="sect8 py-3">
        <Row>
          <Col md={{ span: 10, offset: 1 }} className="d-flex mb-md-5 flex-md-nowrap flex-wrap justify-content-center justify-content-md-start">
            <div className="sect8-lesson border border-secondary border-3 position-relative me-md-5 mx-2 mb-md-0 mb-3 mb-md-0 mb-3" id="1">
              <div className={"sect8-lesson-block-1 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95 d-flex justify-content-center align-items-center " + (isMouseIn[0] ? "hide" : "show")}>
                <div className={"sect8-lesson-title "}>各界</div>
              </div>
              <div className={"sect8-lesson-block-1 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95 d-flex justify-content-center align-items-center bg-secondary text-dark " + (isMouseIn[0] ? "show" : "hide")}>
                <div className="sect8-lesson-content">
                <h3 className="fs-md-1-5 fs-1">網站的動態趨勢</h3>
                <p className="mb-0 fs-md-1 fs-0-75">
                  11/3（四）20:00 ~ 21:30
                  <br />李明
                  <br />版塊設計創辦人暨設計總監
                </p>
                </div>
              </div>
              <div className="sect8-lesson-block-2 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95"></div>
            </div>
            <div className="sect8-lesson border border-secondary border-3 position-relative me-md-5 mx-2 mb-md-0 mb-3" id="2">
              <div className={"sect8-lesson-block-1 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95 d-flex justify-content-center align-items-center " + (isMouseIn[1] ? "hide" : "show")}>
                <div className={"sect8-lesson-title "}>大神</div>
              </div>
              <div className={"sect8-lesson-block-1 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95 d-flex justify-content-center align-items-center bg-secondary text-dark px-md-3 px-1 " + (isMouseIn[1] ? "show" : "hide")}>
                <div className="sect8-lesson-content">
                <h3 className="fs-md-1-5 fs-1">jQuery 也可以做到的互動效果</h3>
                  <p className="mb-0 fs-md-1 fs-0-75">
                    11/10（四）20:00 ~ 21:30
                    <br />Leo
                    <br />Angular Taiwan 傳教士
                </p>
                </div>
              </div>
              <div className="sect8-lesson-block-2 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95"></div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 2 }} className="d-flex flex-md-nowrap flex-wrap justify-content-center justify-content-md-start">
            <div className="sect8-lesson border border-secondary border-3 position-relative me-md-5 mx-2 mb-md-0 mb-3" id="3">
              <div className={"sect8-lesson-block-1 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95 d-flex justify-content-center align-items-center " + (isMouseIn[2] ? "hide" : "show")}>
                <div className={"sect8-lesson-title "}>接力</div>
              </div>
              <div className={"sect8-lesson-block-1 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95 d-flex justify-content-center align-items-center bg-secondary text-dark px-md-3 px-1 " + (isMouseIn[2] ? "show" : "hide")}>
                <div className="sect8-lesson-content">
                <h3 className="fs-md-1-5 fs-1">做事不能拖拖拉拉，但網頁可以：draggable.js 介紹</h3>
                  <p className="mb-0 fs-md-1 fs-0-75">
                    11/17（四）20:00 ~ 21:30
                    <br />邱繼緯
                    <br />前端工程師
                </p>
                </div>
              </div>
              <div className="sect8-lesson-block-2 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95"></div>
            </div>
            <div className="sect8-lesson border border-secondary border-3 position-relative me-md-5 mx-2 mb-md-0 mb-3" id="4">
              <div className={"sect8-lesson-block-1 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95 d-flex justify-content-center align-items-center " + (isMouseIn[3] ? "hide" : "show")}>
                <div className={"sect8-lesson-title "}>分享</div>
              </div>
              <div className={"sect8-lesson-block-1 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95 d-flex justify-content-center align-items-center bg-secondary text-dark px-md-3 px-1 " + (isMouseIn[3] ? "show" : "hide")}>
                <div className="sect8-lesson-content">
                <h3 className="fs-md-1-5 fs-1">互動式網頁設計工程師該具備哪些技能？</h3>
                  <p className="mb-0 fs-md-1 fs-0-75">
                    11/24（四）20:00 ~ 21:30
                    <br />吳哲宇
                    <br />墨雨互動設計 創辦人、生成式藝術家
                </p>
                </div>
              </div>
              <div className="sect8-lesson-block-2 border border-secondary border-3 position-absolute w-md-90 w-95 h-md-90 h-95"></div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
