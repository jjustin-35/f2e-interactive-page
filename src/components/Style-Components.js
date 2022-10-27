import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Spotlight = () => {
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
      <div>
        <div className="light light-sm light-start-bottom light-position-st-md fadein" ref={lights.lightRef1}></div>
        <div className="light light-md light-end-bottom light-position-e-md fadein" ref={lights.lightRef2}></div>
        <div className="light light-lg light-start-top light-position-e-b fadein" ref={lights.lightRef3}></div>
    </div>
  )
}

export const Fadein = ({ from = {}, to = {}, children }) => {
    useEffect(() => {
        const fadein = document.querySelectorAll(".fadein");
        const tl = gsap.timeline();

        fadein.forEach(element => {
            tl.fromTo(element, {
                ...from,
                opacity: 0
            }, {
                ...to,
                opacity: 1,
                duration: 1
            })
        })
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}