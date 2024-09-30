import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const first = useRef();
  const second = useRef();
  const third = useRef();
  const shade = useRef();
  const cloud = useRef();
  const dark = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(
      dark.current,
      {
        opacity: 1,
        scrollTrigger: {
          trigger: parent.current,
          start: "top -0.1%",
          end: "top 1%",
          scrub: 1,
        },
      },
      "b"
    );
    tl.to(
      shade.current,
      {
        opacity: 1,
        scrollTrigger: {
          trigger: parent.current,
          start: "top -0.1%",
          end: "top 1%",
          scrub: 3,
        },
      },
      "b"
    );
    tl.to(cloud.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: parent.current,
        start: "top -1%",
        scrub: 3,
      },
    });
    tl.to(
      first.current,
      {
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        repeat: -1,
        yoyo: true,
      },
      "a"
    );
    tl.to(
      second.current,
      {
        opacity: 0,
        duration: 0.7,
        delay: 0.5,
        repeat: -1,
        yoyo: true,
      },
      "a"
    );
    tl.to(
      third.current,
      {
        opacity: 0,
        repeat: -1,
        delay: 0.7,
        duration: 0.7,
        yoyo: true,
      },
      "a"
    );
  });

  return (
    <div className="w-full">
      <div className=" mx-auto relative w-full h-screen">
        <div className="absolute bottom-[32.5vh] lg:top-[70.5vh] leading-5 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {["DÉCOUVREZ NOTRE", "NOUVELLE SNEAKER"].map((item, index) => {
            return (
              <h1
                key={index}
                className="text-white font-[900] tracking-tighter text-[17px]"
              >
                {item}
              </h1>
            );
          })}
        </div>

        <button className="flex items-center justify-center lg:hidden fixed bottom-[15px] z-[10000000] left-1/2 -translate-x-1/2 bg-[#897460] text-white py-[11.5px] px-[100px] w-[94.5vw] font-[800] rounded-full text-[18px] tracking-tighter">
          ACHETER
        </button>

        <span
          ref={dark}
          className="inline-block absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent opacity-0"
        ></span>
        <span
          ref={shade}
          className="inline-block absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-white to-transparent opacity-0"
        ></span>
        <img
          ref={cloud}
          className="absolute w-full h-full top-[0%] left-1/2 -translate-x-1/2 opacity-0"
          src="https://gplclub.co/wp-content/uploads/2024/09/clouds-scaled.webp"
          alt=""
        />

        <div className="absolute flex flex-col left-1/2 -translate-x-1/2 bottom-[140px] lg:bottom-[58px] text-white text-2xl">
          <span ref={first}>
            <IoIosArrowDown className="-mb-2" />
          </span>
          <span ref={second}>
            <IoIosArrowDown className="-mb-2" />
          </span>
          <span ref={third}>
            <IoIosArrowDown className="" />
          </span>
        </div>
        <span className="absolute inline-block bg-white bottom-0 left-1/2 -translate-x-1/2 w-[1.3px] xl:w-[1px] h-[130px] md:h-[130px] lg:h-[52px]"></span>
        <img
          className="hidden sm:flex  w-full h-screen object-cover"
          src="https://gplclub.co/wp-content/uploads/2024/09/splash_home-scaled.jpg"
          alt=""
        />
        <img
          className="flex xl:hidden w-full h-screen object-cover"
          src="https://gplclub.co/wp-content/uploads/2024/09/splash-mobile.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
