import React from 'react';
import { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

export const Index = () => {
    // animate
    const [isLight, setIsLight] = useState(false);
    const makeStarter = () => {
        const starter = Math.random() * 1000;

        setTimeout(() => {
            setIsLight(true);
        }, starter)
    }

    useEffect(() => {
        makeStarter();
    }, []);

    return (
        <>
            <Container className='position-relative'>
                <div>
                    <div className={"light light-sm light-start-bottom light-position-st-md" + (isLight ? " light-animate" : "")}></div>
                    <div className="light light-md light-end-bottom light-position-e-md"></div>
                    <div className="light light-lg light-start-top light-position-e-b"></div>
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
