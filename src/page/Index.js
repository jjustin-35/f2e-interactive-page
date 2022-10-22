import React from 'react';
import { useEffect, useState, useRef } from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

export const Index = () => {
    // animate
    const lights = {
        lightRef1: useRef(),
        lightRef2: useRef(),
        lightRef3: useRef()
    }

    const makeStarter = (light) => {
        const starter = Math.random() * 4000;

        setTimeout(() => {
            light.classList.add("light-animate")
        }, starter)
    }

    useEffect(() => {
        for (let light in lights) {
            makeStarter(lights[light].current);
        }
    }, []);

    return (
        <>
            <Container className='position-relative'>
                <div>
                    <div className="light light-sm light-start-bottom light-position-st-md" ref={lights.lightRef1}></div>
                    <div className="light light-md light-end-bottom light-position-e-md" ref={lights.lightRef2}></div>
                    <div className="light light-lg light-start-top light-position-e-b" ref={lights.lightRef3}></div>
                </div>
                <Row className="title">
                    <Col xs={{ offset: 1 }}>
                        <h1 className='title-fs text-hollow  title-hover title-hover-main'>The F2E 4th
                        <span className='text-primary title-fs'>The F2E 4th</span>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={11}>
                        <h2 className='w-fit ms-auto text-hollow fw-bold title-fs-sub title-hover title-hover-sub'>互動式網頁設計
                        <span className='text-primary fw-bold title-fs-sub'>互動式網頁設計</span>
                    </h2>
                    </Col>
                </Row>
            </Container>
        </>
  )
}
