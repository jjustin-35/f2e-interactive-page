import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Row, Col } from 'react-bootstrap';

gsap.registerPlugin(ScrollTrigger);

export const Sect8 = () => {
    const ref = useRef();

    useEffect(() => {
        
    })
  return (
    <Container ref={ref}>
          <div className="sect8">
              <Row>
                  <Col xs={{ span: 10, offset: 1 }} className="d-flex justify-content-between">
                      <div className="border border-secondary border-3">
                        
                      </div>
                  </Col>
              </Row>
        </div>
    </Container>
  )
}
