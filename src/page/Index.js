import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';

// components
import { Fadein, Spotlight } from '../components/Style-Components';
import { Sect2 } from '../components/Sect2';
import { Sect3 } from '../components/Sect3';
import { Sect4 } from '../components/Sect4';
import { Sect5 } from '../components/Sect5';
import { Sect6 } from '../components/Sect6';
import { Sect7 } from '../components/Sect7';
import { Sect8 } from '../components/Sect8';

export const Index = () => {
    return (
        <>
            <Container className='position-relative py-3 sect1'>
                <Fadein from={{x: -100}} to={{x: 0}}>
                <Row className="title">
                    <Col xs={{ offset: 1 }}>
                        <h1 className='title-fs text-hollow title-hover title-hover-main fadein fadein-1 w-md-auto w-fit mx-auto mx-md-0'>The<br className="d-md-none"/> F2E 4th
                        <span className='text-primary title-fs'>The <br className="d-md-none"/> F2E 4th</span>
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={11}>
                        <h2 className='w-fit ms-auto text-hollow fw-bold title-fs-sub title-hover title-hover-sub fadein fadein-2'>互動式網頁設計
                        <span className='text-primary fw-bold title-fs-sub'>互動式網頁設計</span>
                        </h2>
                    </Col>
                    </Row>
                    <Spotlight />
                </Fadein>
            </Container>

            <Sect2 />
            <Sect3 />
            <Sect4 />
            <Sect5 />
            <Sect6 />
            <Sect7 />
            <Sect8 />
        </>
  )
}
