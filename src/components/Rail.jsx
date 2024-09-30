import { useGSAP } from "@gsap/react";
import gsap, { Linear, ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Rail = () => {
  const parent = useRef();
  const roll1 = useRef();
  const roll2 = useRef();
  const roll3 = useRef();
  const roll4 = useRef();

  const head1 = useRef();
  const head2 = useRef();
  const head3 = useRef();
  const head4 = useRef();

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(parent.current, {
      scrollTrigger:{
        trigger: parent.current,
        start: "top 80%",
        end: "top -100%",
        scrub: 2,
      }
    }, "a")
    tl.to(head1.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parent.current,
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
      }
    }, "a, b")
    tl.to(roll1.current, {
      x: 90,
      ease: Linear,
      scrollTrigger:{
        trigger: parent.current,
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
      }
    }, "a, b")
    tl.to(head2.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parent.current,
        start: "top 70%",
        end: "top -40%",
        scrub: 2,
      }
    }, "a,b")
    tl.to(roll2.current, {
      x: -220,
      ease: Linear,
      scrollTrigger:{
        trigger: parent.current,
        start: "top 80%",
        end: "top -40%",
        scrub: 2,
      }
    }, "a, b")
    tl.to(head3.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parent.current,
        start: "top 55%",
        end: "top -60%",
        scrub: 2,
      }
    }, "b,c")
    tl.to(roll3.current, {
      x: 130,
      ease: Linear,
      scrollTrigger:{
        trigger: parent.current,
        start: "top 80%",
        end: "top -70%",
        scrub: 2,
      }
    }, "b,c")
    tl.to(head4.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parent.current,
        start: "top 45%",
        end: "top -100%",
        scrub: 2,
      }
    }, "c, d")
    tl.to(roll4.current, {
      x: -155,
      ease: Linear,
      scrollTrigger:{
        trigger: parent.current,
        start: "top 80%",
        end: "top -100%",
        scrub: 2,
      }
    }, "c, d")
  })

  return (
    <div ref={parent} className="w-full h-screen bg-white overflow-hidden">
      <div ref={roll1} className="w-full h-[25%] flex items-center gap-10 -ml-28">
        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg"
          alt=""
        />
        <h1 ref={head1} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin]">
          ÉDITION
        </h1>

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-2.b1d4272156170297d10a5a60965dbb82.jpg"
          alt=""
        />

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-3.b9bc6bbef9f511fb5352eb2b628f82e3.jpg"
          alt=""
        />

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-4.8dd753c719d788ed76ef6b6acbd776ff.jpg"
          alt=""
        />
      </div>

      <div ref={roll2} className="w-full h-[25%] flex items-center gap-10 ml-[41.5px]">
        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-5.c7be62540b36c08bcbfde656ea89f089.jpg"
          alt=""
        />

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-6.904f5249c01d47b75251b2cfa978bccf.jpg"
          alt=""
        />

        <h1 ref={head2} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin] ">
          LIMITÉE
        </h1>

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-7.da0e2ec9042a307a847c6209bac0e027.jpg"
          alt=""
        />
      </div>

      <div ref={roll3} className="w-full h-[25%] flex items-center gap-10 -ml-[63px]">
        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-9.ad839066400db0785d319a39aeb54b96.jpg"
          alt=""
        />
        <h1 ref={head3} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin]">
          1500
        </h1>

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-10.852d26e1734f0094f91e42e2c96e7f76.jpg"
          alt=""
        />

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-11.7e82065e51b1ddd0fdd38fd4b5c82636.jpg"
          alt=""
        />

        <img
          className="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-11.7e82065e51b1ddd0fdd38fd4b5c82636.jpg"
          alt=""
        />

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-12.4e8c5e78b1276aba7a8133e96df58712.jpg"
          alt=""
        />
      </div>

      <div ref={roll4} className="w-full h-[25%] flex items-center gap-10 -ml-2">
        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-13.31c04c133654910233f64dec54f5520f.jpg"
          alt=""
        />

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-14.0a64339771fee89ad9c31aede58819a4.jpg"
          alt=""
        />

        <h1 ref={head4} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin]">
          PIÉCES
        </h1>

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-15.b76806546845786fbf166dffd00520a7.jpg"
          alt=""
        />

        <img
          className="w-[307px] h-[103px] object-cover flex-shrink-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Rail;
