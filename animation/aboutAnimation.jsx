import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export function AboutAnimation() {

    tl.to("#animate h1", {
        x: "-200%",
        scrollTrigger: {
            scroller: "body",
            trigger: "#animate",
            start: "top 0%",
            end: "top -400%",
            pin: true,
            scrub: 2,
            markers: true,
        }
    })
}
