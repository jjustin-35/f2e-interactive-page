import React from 'react';
import { useEffect, useState } from 'react';
import {
    Navbar,
    Container,
    Row,
    Col,
    Nav,
} from 'react-bootstrap';
export const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const [lastTop, setLastTop] = useState(0);

  const controlNav = () => {
    if (typeof window !== undefined) {
      if (window.scrollY > lastTop) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastTop(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', controlNav)
    }

    return () => {
      window.removeEventListener('scroll', controlNav);
    }
  }, [lastTop])

  return (
      <div>
          <Navbar bg="dark" variant="dark" expand="lg" className={"py-0 fs-1-5 sticky-top nav " + (show ? "" : "hideup")}>
              <Container>
                  <Row className="w-100">
                  <Col>
                      <Navbar.Brand href="#" className="pt-0"><svg width="165" height="34" viewBox="0 0 165 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.426 33.5997L0 34L19.7929 9.50386H11.8752V1.88124H36.3437V9.50386H28.426V33.5997ZM22.8729 8.27425L7.35202 31.9534C7.35202 31.9534 22.2603 31.5379 22.8729 30.9356C23.1777 30.6359 25.3236 8.3455 25.3236 8.3455L35.1183 8.27425V3.11085H13.1006V8.27425H22.8729ZM46.4351 0V7.57379C46.4351 8.36501 46.4153 9.13205 46.3754 9.87472C47.1179 9.36226 47.9295 8.98113 48.8047 8.73229C49.722 8.47149 50.6929 8.3455 51.7114 8.3455C53.4623 8.3455 55.0504 8.65748 56.4419 9.3234C57.8824 9.99903 59.0006 11.0732 59.7838 12.5021C60.5813 13.9436 60.9342 15.7301 60.9342 17.7805L63.3896 34L52.4007 33.5997V19.3015C52.4007 17.8168 52.1235 16.9115 51.7547 16.3985C51.4523 15.9778 50.9645 15.6879 50.0362 15.6879C48.9964 15.6879 48.3373 15.9311 47.9164 16.2738L47.9109 16.2782L47.9054 16.2826C47.4579 16.6384 47.0762 17.2148 46.833 18.1356L46.832 18.1392C46.5759 19.097 46.4351 20.3236 46.4351 21.8432V33.5997H37.9017V0H46.4351ZM58.7116 13.0974C58.0468 11.8833 57.1161 10.996 55.9195 10.4357C54.7229 9.86196 53.3202 9.57511 51.7114 9.57511C50.794 9.57511 49.9364 9.68852 49.1387 9.91533C48.341 10.1421 47.6097 10.4957 46.9449 10.976C46.7055 11.1525 46.4778 11.3488 46.2618 11.5649C45.8898 11.937 45.5525 12.3678 45.2497 12.8573H44.9306C44.9361 12.8002 44.9419 12.7375 44.9479 12.6693C44.9711 12.4055 44.9981 12.0583 45.0289 11.6277C45.0418 11.4472 45.0553 11.2522 45.0696 11.0425C45.0763 10.9435 45.0831 10.8413 45.0901 10.7359C45.1699 9.73521 45.2098 8.68119 45.2098 7.57379V1.22961H39.127V32.3701H45.2098V21.8432C45.2098 20.2555 45.3561 18.9146 45.6486 17.8205C45.9411 16.7131 46.4397 15.8793 47.1443 15.3189C47.849 14.7452 48.8129 14.4583 50.0362 14.4583C51.2594 14.4583 52.1635 14.8653 52.7485 15.6791C53.3335 16.493 53.626 17.7005 53.626 19.3015V32.3701H57.3866L59.7088 17.7805C59.7088 15.8592 59.3764 14.2982 58.7116 13.0974ZM83.9004 31.1893C82.7969 31.7364 81.6402 32.1366 80.4302 32.3901C79.2336 32.6436 77.7777 32.7704 76.0626 32.7704C73.8289 32.7704 71.8478 32.3568 70.1194 31.5296C68.4042 30.7024 67.0547 29.4415 66.0708 27.7471C65.1003 26.0526 64.615 23.9179 64.615 21.3429C64.615 18.7278 65.0537 16.553 65.9312 14.8186C66.822 13.0707 68.0585 11.7632 69.6407 10.896C71.2229 10.0154 73.0644 9.57511 75.1651 9.57511C77.226 9.57511 79.001 9.97537 80.4901 10.7759C81.9792 11.5631 83.1293 12.7105 83.9403 14.2182C84.7514 15.7258 85.1569 17.567 85.1569 19.7418V22.7038H70.7775C70.7943 23.1369 70.8392 23.5467 70.9123 23.9334C71.1298 25.0832 71.5968 26.0276 72.3132 26.7664C73.2838 27.7404 74.6267 28.2274 76.3418 28.2274C77.7645 28.2274 79.0674 28.0806 80.2508 27.7871C81.0439 27.5904 81.8521 27.3277 82.6751 26.999C83.0799 26.8374 83.4884 26.6598 83.9004 26.4662V31.1893ZM73.1856 25.9029C73.872 26.5883 74.8703 26.9978 76.3418 26.9978C77.6814 26.9978 78.884 26.8595 79.9567 26.5934C81.0531 26.3215 82.1942 25.91 83.381 25.3526L85.1258 24.533V31.9534L84.4431 32.2918C83.2467 32.8849 81.9921 33.319 80.6816 33.5936C79.3764 33.8699 77.8309 34 76.0626 34C73.6766 34 71.5104 33.5576 69.5919 32.6394L69.5886 32.6378C67.6465 31.7011 66.1158 30.2668 65.0121 28.3661L65.0103 28.363L65.0085 28.3598C63.9024 26.4289 63.3896 24.0667 63.3896 21.3429C63.3896 18.5979 63.8491 16.2178 64.8386 14.2619L64.8403 14.2587C65.8324 12.312 67.2346 10.8149 69.0493 9.8191C70.8401 8.8231 72.8914 8.3455 75.1651 8.3455C77.3829 8.3455 79.3646 8.77655 81.0662 9.69069C82.7713 10.5933 84.0947 11.9167 85.0186 13.6341C85.9487 15.3631 86.3822 17.4168 86.3822 19.7418V23.9334H72.1641C72.3575 24.7688 72.7102 25.4104 73.1856 25.9029ZM79.3297 17.4115C79.4056 17.7986 79.4467 18.2085 79.453 18.6411L75.1651 15.5581L70.9171 18.6411C70.9496 18.1993 71.0061 17.7894 71.0866 17.4115C71.3026 16.397 71.6915 15.6128 72.2534 15.0587C73.0378 14.2982 74.0217 13.918 75.205 13.918C76.1623 13.918 76.9468 14.1248 77.5584 14.5384C78.1833 14.952 78.6486 15.5124 78.9544 16.2195C79.1213 16.5894 79.2464 16.9868 79.3297 17.4115ZM108.5 33.5997H91.2876L99.9662 1.88124H119.13V9.42381H108.5V14.5096H118.392V22.0321H108.5V33.5997ZM107.274 15.7392V8.1942H117.904V3.11085H101.192L104.358 17.7805L107.274 32.3701V20.8025H117.166V15.7392H107.274ZM143.182 33.5997H120.349V27.5619L128.015 19.7846C128.017 19.7832 128.018 19.7818 128.019 19.7804C129.486 18.2686 130.653 17.0186 131.524 16.0268L131.525 16.026C132.385 15.048 132.959 14.2103 133.291 13.5094L133.295 13.5023L133.298 13.4952C133.625 12.8279 133.791 12.1136 133.791 11.3363C133.791 10.4046 133.536 9.92763 133.23 9.65876L133.221 9.64997L133.211 9.64097C132.85 9.30929 132.314 9.08358 131.466 9.08358C130.531 9.08358 129.617 9.29728 128.712 9.73976C127.756 10.2077 126.727 10.889 125.626 11.8032L124.691 12.5796L119.773 6.73398L120.697 5.93974C121.568 5.18992 122.488 4.48268 123.454 3.81789L123.457 3.81559L123.46 3.81332C124.515 3.09793 125.715 2.53603 127.049 2.1183C128.45 1.67006 130.077 1.46096 131.905 1.46096C133.963 1.46096 135.803 1.83379 137.38 2.63226C138.943 3.4164 140.184 4.50924 141.059 5.91829C141.936 7.31658 142.364 8.89444 142.364 10.6158C142.364 12.3974 142.011 14.0559 141.286 15.5708C140.584 17.0395 139.574 18.4624 138.283 19.8429C137.048 21.177 135.565 22.6441 133.837 24.2435C133.836 24.245 133.834 24.2465 133.832 24.248L132.045 25.9371H143.182V33.5997ZM121.574 28.0673L129.252 26.8865L133.002 23.3442C134.717 21.7565 136.179 20.3088 137.389 19.0013C138.612 17.6938 139.543 16.3729 140.181 15.0387C140.82 13.7045 141.139 12.2302 141.139 10.6158C141.139 9.10813 140.766 7.76058 140.022 6.57313C139.277 5.37234 138.214 4.42505 136.831 3.73126C135.461 3.03747 133.819 2.69057 131.905 2.69057C130.163 2.69057 128.667 2.8907 127.417 3.29097C126.181 3.67789 125.091 4.19156 124.147 4.83198C123.559 5.23607 122.991 5.6561 122.441 6.09206C122.238 6.25253 122.038 6.41516 121.84 6.57995C121.724 6.677 121.609 6.77479 121.494 6.87333L124.845 10.856C126.001 9.89532 127.112 9.15483 128.175 8.63449C129.239 8.11415 130.336 7.85397 131.466 7.85397C132.543 7.85397 133.401 8.1475 134.039 8.73455C134.69 9.30827 135.016 10.1755 135.016 11.3363C135.016 12.2969 134.81 13.1975 134.398 14.038C133.999 14.8786 133.347 15.8126 132.443 16.8399C131.552 17.8539 130.369 19.1214 128.893 20.6424L121.574 28.0673V32.3701H141.956V27.1667L121.574 28.0673ZM165 33.5997H145.757V1.88124H165V9.42381H154.39V15.0387L164.262 13.3888V20.9314L154.39 17.7805V26.0171H165V33.5997Z" fill="#FFF8D4" /></svg>
                      </Navbar.Brand>
                      </Col>
                      <Navbar.Toggle aria-controls='collapse' className="w-fit"/>
                      <Col lg={6}>
                    <Navbar.Collapse id='collapse' className=''>
                    <Nav className='w-100'>
                        <Nav.Link href='' className="text-primary w-100 text-center hover hover-link">競賽關卡</Nav.Link>
                        <Nav.Link href='' className='text-primary w-100 text-center hover hover-link'>競賽資源</Nav.Link>
                        <Nav.Link href='' className='bg-secondary w-100 text-center text-dark hover hover-link-reverse'>點我報名</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Col>
                </Row>
              </Container>
          </Navbar>
          {children}
    </div>
  )
}
