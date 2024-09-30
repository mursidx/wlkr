import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination} from "swiper/modules";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

const Shoes = () => {
  const [seventySix, setseventySix] = useState([
    {borderColor: "#7E8368", src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-kaki.41175d1d470cc18fea4039d9d4a2bdca.webp", shoeName: "Kaki", btnbg: "#7E8368"},
    {borderColor: "#C6BEA4", src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-white.e88209e1cebbe8c106738c487b070a47.webp", shoeName: "Beige", btnbg: "#C6BEA4"},
    {borderColor: "#A092B2", src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-pink.e3719fc3c6d1c689598c81a224cdb41f.webp", shoeName: "Violet", btnbg: "#A092B2"},
  ])

  const pagination = {
    clickable: true,
  };

  const child1 = useRef();
  const fstImg = useRef();
  const fstImg2 = useRef();
  const fstImg3 = useRef();
  const secImg = useRef();
  const secImg2 = useRef();
  const secImg3 = useRef();
  const contain = useRef();
  const loader = useRef();
  const slide1 = useRef();
  const slide2 = useRef();
  const slide3 = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: child1.current,
        start: "top top",
        end: "bottom 210vh",
        scrub: 2,
      },
    });
    tl.to(fstImg.current, {
      width: "49.31vw",
      ease: [0.16, 1, 0.3, 1],
    });
    tl.to(secImg.current, {
      y: "-50%",
      ease: [0.16, 1, 0.3, 1],
    });
    tl.to(loader.current, {
      width: "100vw",
      scrollTrigger: {
        trigger: contain.current,
        start: "top top",
        end: "top -3500vh",
        scrub: 2,
        pin: true,
      },
    });
    tl.to(loader.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: loader.current,
        end: "top -3500vh",
        scrub: 2,
      },
    })
    tl.to(fstImg2.current, {
        width: "49.31vw",
        ease: [0.16, 1, 0.3, 1],
        scrollTrigger: {
          trigger: loader.current,
          start: "top 100vh",
          scrub: 1,
        },
      }, "2");
      tl.to(secImg2.current,{
        x: "-50%",
        ease: [0.16, 1, 0.3, 1],
        scrollTrigger: {
          trigger: loader.current,
          start: "top 100vh",
          scrub: 1,
        },
      }, "2");
    tl.to(fstImg3.current, {
        width: "49.31vw",
        ease: [0.16, 1, 0.3, 1],
        scrollTrigger: {
          trigger: loader.current,
          start: "top -1100vh",
          scrub: 1,
        },
      }, "3");
    tl.to(secImg3.current,{
        x: "-50%",
        ease: [0.16, 1, 0.3, 1],
        scrollTrigger: {
          trigger: loader.current,
          start: "top -1100vh",
          scrub: 1,
        },
      }, "3");
  });

  useEffect(() => {
    if (slide1.current, slide2.current, slide3.current) {
      console.log("SwiperSlide element:", slide1.current, slide2.current, slide3.current);
    }
  }, []);

  const [hover, sethover] = useState(null);

  return (
    <div className="w-full  mx-auto">
      <div className="w-full overflow-hidden">
      <div ref={child1} className="hidden relative w-full h-screen bg-white lg:flex pt-[105px] justify-center gap-14">
        {seventySix.map((items, index)=>{
          return <div key={index} className="relative left h-[80vw] w-[24vw] flex flex-col items-center gap-[5.4vw]">
          <div onMouseEnter={()=>sethover(index)} onMouseLeave={()=>sethover(null)} className="76kiki relative mt-[2.5vw] w-full h-52">
            <svg
              // width="248"
              // height="128"
              viewBox="0 0 311 191"
              fill="none"
              className="absolute w-[16.3vw] top-0 left-1/2 -translate-x-1/2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="path-2-outside-1_437_107"
                maskUnits="userSpaceOnUse"
                x="22"
                y="13"
                // width="248"
                // height="128"
                fill="black"
              >
                <rect fill="white" x="22" y="13" />
                <path d="M43.959 173L92.4062 59.4551H23.7637V16.5938H149.125V55.9102L102.289 173H43.959ZM159.223 109.943V98.2344C159.223 72.4531 167.709 52.043 184.682 37.0039C201.726 21.9648 225.896 14.4453 257.191 14.4453H271.693V58.0586H259.447C244.193 58.0586 232.807 61.4245 225.287 68.1562C217.839 74.8164 214.115 89.6406 214.115 112.629V114.777C214.115 126.236 215.082 133.254 217.016 135.832C218.949 138.339 221.42 139.592 224.428 139.592C227.292 139.592 229.584 138.518 231.303 136.369C233.093 134.221 233.988 127.668 233.988 116.711C233.988 110.767 233.236 106.398 231.732 103.605C230.3 100.812 227.973 99.416 224.75 99.416C221.742 99.416 219.2 100.562 217.123 102.854C215.118 105.074 214.115 108.296 214.115 112.521L208.852 112.414C208.852 98.8789 212.79 88.6738 220.668 81.7988C228.617 74.9238 237.712 71.4863 247.953 71.4863C260.056 71.4863 269.939 75.4251 277.602 83.3027C285.264 91.1087 289.096 102.854 289.096 118.537C289.096 136.441 282.794 150.37 270.189 160.324C257.585 170.207 242.188 175.148 223.998 175.148C203.874 175.148 188.048 169.813 176.518 159.143C164.988 148.4 159.223 132.001 159.223 109.943Z" />
              </mask>
              <path
                d="M43.959 173L43.0392 172.608L42.4451 174H43.959V173ZM92.4062 59.4551L93.326 59.8475L93.9202 58.4551H92.4062V59.4551ZM23.7637 59.4551H22.7637V60.4551H23.7637V59.4551ZM23.7637 16.5938V15.5938H22.7637V16.5938H23.7637ZM149.125 16.5938H150.125V15.5938H149.125V16.5938ZM149.125 55.9102L150.053 56.2815L150.125 56.1027V55.9102H149.125ZM102.289 173V174H102.966L103.218 173.371L102.289 173ZM44.8788 173.392L93.326 59.8475L91.4865 59.0626L43.0392 172.608L44.8788 173.392ZM92.4062 58.4551H23.7637V60.4551H92.4062V58.4551ZM24.7637 59.4551V16.5938H22.7637V59.4551H24.7637ZM23.7637 17.5938H149.125V15.5938H23.7637V17.5938ZM148.125 16.5938V55.9102H150.125V16.5938H148.125ZM148.197 55.5388L101.361 172.629L103.218 173.371L150.053 56.2815L148.197 55.5388ZM102.289 172H43.959V174H102.289V172ZM184.682 37.0039L184.02 36.2541L184.018 36.2555L184.682 37.0039ZM271.693 14.4453H272.693V13.4453H271.693V14.4453ZM271.693 58.0586V59.0586H272.693V58.0586H271.693ZM225.287 68.1562L225.954 68.9017L225.954 68.9013L225.287 68.1562ZM217.016 135.832L216.216 136.432L216.224 136.443L217.016 135.832ZM231.303 136.369L230.535 135.729L230.528 135.737L230.522 135.744L231.303 136.369ZM231.732 103.605L230.843 104.062L230.847 104.071L230.852 104.08L231.732 103.605ZM217.123 102.854L216.382 102.182L216.381 102.183L217.123 102.854ZM214.115 112.521L214.095 113.521L215.115 113.542V112.521H214.115ZM208.852 112.414H207.852V113.394L208.831 113.414L208.852 112.414ZM220.668 81.7988L220.014 81.0425L220.01 81.0454L220.668 81.7988ZM277.602 83.3027L276.885 84L276.888 84.0033L277.602 83.3027ZM270.189 160.324L270.806 161.111L270.809 161.109L270.189 160.324ZM176.518 159.143L175.836 159.874L175.838 159.877L176.518 159.143ZM160.223 109.943V98.2344H158.223V109.943H160.223ZM160.223 98.2344C160.223 72.6958 168.617 52.5746 185.345 37.7524L184.018 36.2555C166.801 51.5114 158.223 72.2104 158.223 98.2344H160.223ZM185.343 37.7537C202.146 22.9278 226.047 15.4453 257.191 15.4453V13.4453C225.744 13.4453 201.306 21.0018 184.02 36.2541L185.343 37.7537ZM257.191 15.4453H271.693V13.4453H257.191V15.4453ZM270.693 14.4453V58.0586H272.693V14.4453H270.693ZM271.693 57.0586H259.447V59.0586H271.693V57.0586ZM259.447 57.0586C244.069 57.0586 232.397 60.4489 224.62 67.4112L225.954 68.9013C233.216 62.4001 244.317 59.0586 259.447 59.0586V57.0586ZM224.621 67.4108C220.688 70.9274 217.825 76.5157 215.938 84.0259C214.049 91.5468 213.115 101.089 213.115 112.629H215.115C215.115 101.18 216.043 91.8164 217.878 84.5132C219.715 77.1991 222.438 72.0452 225.954 68.9017L224.621 67.4108ZM213.115 112.629V114.777H215.115V112.629H213.115ZM213.115 114.777C213.115 120.528 213.357 125.198 213.85 128.771C214.335 132.292 215.082 134.921 216.216 136.432L217.816 135.232C217.016 134.165 216.313 131.996 215.831 128.498C215.356 125.053 215.115 120.485 215.115 114.777H213.115ZM216.224 136.443C218.335 139.18 221.092 140.592 224.428 140.592V138.592C221.748 138.592 219.563 137.497 217.807 135.221L216.224 136.443ZM224.428 140.592C227.582 140.592 230.166 139.391 232.084 136.994L230.522 135.744C229.002 137.645 227.003 138.592 224.428 138.592V140.592ZM232.071 137.009C232.64 136.327 233.08 135.371 233.433 134.227C233.79 133.07 234.08 131.649 234.308 129.979C234.764 126.638 234.988 122.209 234.988 116.711H232.988C232.988 122.169 232.765 126.496 232.326 129.708C232.107 131.314 231.836 132.619 231.522 133.637C231.204 134.668 230.861 135.337 230.535 135.729L232.071 137.009ZM234.988 116.711C234.988 110.722 234.238 106.149 232.613 103.131L230.852 104.08C232.235 106.648 232.988 110.811 232.988 116.711H234.988ZM232.622 103.149C231.834 101.613 230.775 100.414 229.427 99.6059C228.081 98.7982 226.508 98.416 224.75 98.416V100.416C226.214 100.416 227.417 100.732 228.398 101.321C229.378 101.909 230.198 102.805 230.843 104.062L232.622 103.149ZM224.75 98.416C221.451 98.416 218.642 99.6879 216.382 102.182L217.864 103.525C219.757 101.436 222.033 100.416 224.75 100.416V98.416ZM216.381 102.183C214.152 104.651 213.115 108.15 213.115 112.521H215.115C215.115 108.442 216.083 105.496 217.865 103.524L216.381 102.183ZM214.136 111.522L208.872 111.414L208.831 113.414L214.095 113.521L214.136 111.522ZM209.852 112.414C209.852 99.0769 213.726 89.1849 221.326 82.5523L220.01 81.0454C211.855 88.1628 207.852 98.6809 207.852 112.414H209.852ZM221.322 82.5552C229.095 75.8328 237.959 72.4863 247.953 72.4863V70.4863C237.465 70.4863 228.14 74.0148 220.014 81.0425L221.322 82.5552ZM247.953 72.4863C259.816 72.4863 269.43 76.3365 276.885 84L278.318 82.6055C270.447 74.5137 260.296 70.4863 247.953 70.4863V72.4863ZM276.888 84.0033C284.3 91.5542 288.096 103.002 288.096 118.537H290.096C290.096 102.706 286.228 90.6632 278.315 82.6022L276.888 84.0033ZM288.096 118.537C288.096 136.175 281.904 149.798 269.57 159.539L270.809 161.109C283.683 150.941 290.096 136.707 290.096 118.537H288.096ZM269.572 159.537C257.168 169.264 241.996 174.148 223.998 174.148V176.148C242.38 176.148 258.003 171.15 270.806 161.111L269.572 159.537ZM223.998 174.148C204.053 174.148 188.494 168.864 177.197 158.409L175.838 159.877C187.601 170.762 203.696 176.148 223.998 176.148V174.148ZM177.199 158.411C165.943 147.924 160.223 131.837 160.223 109.943H158.223C158.223 132.164 164.032 148.877 175.836 159.874L177.199 158.411Z"
                fill={items.borderColor}
                mask="url(#path-2-outside-1_437_107)"
              />
            </svg>
            <motion.svg
              initial = {{opacity: 0}}
              animate = {hover === index ? ({opacity: 1}) : ({opacity: 0})}
              // width="248"
              // height="128"
              viewBox="0 0 311 191"
              fill="none"
              className="absolute w-[16.3vw] top-0 left-1/2 -translate-x-1/2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="path-2-outside-1_437_107"
                maskUnits="userSpaceOnUse"
                x="20"
                y="11"
                // width="273"
                // height="168"
                fill="black"
              >
                <rect fill="white" x="20" y="11" />
                <path d="M43.959 173L92.4062 59.4551H23.7637V16.5938H149.125V55.9102L102.289 173H43.959ZM159.223 109.943V98.2344C159.223 72.4531 167.709 52.043 184.682 37.0039C201.726 21.9648 225.896 14.4453 257.191 14.4453H271.693V58.0586H259.447C244.193 58.0586 232.807 61.4245 225.287 68.1562C217.839 74.8164 214.115 89.6406 214.115 112.629V114.777C214.115 126.236 215.082 133.254 217.016 135.832C218.949 138.339 221.42 139.592 224.428 139.592C227.292 139.592 229.584 138.518 231.303 136.369C233.093 134.221 233.988 127.668 233.988 116.711C233.988 110.767 233.236 106.398 231.732 103.605C230.3 100.812 227.973 99.416 224.75 99.416C221.742 99.416 219.2 100.562 217.123 102.854C215.118 105.074 214.115 108.296 214.115 112.521L208.852 112.414C208.852 98.8789 212.79 88.6738 220.668 81.7988C228.617 74.9238 237.712 71.4863 247.953 71.4863C260.056 71.4863 269.939 75.4251 277.602 83.3027C285.264 91.1087 289.096 102.854 289.096 118.537C289.096 136.441 282.794 150.37 270.189 160.324C257.585 170.207 242.188 175.148 223.998 175.148C203.874 175.148 188.048 169.813 176.518 159.143C164.988 148.4 159.223 132.001 159.223 109.943Z" />
              </mask>
              <path
                d="M43.959 173L41.1997 171.823L39.4173 176H43.959V173ZM92.4062 59.4551L95.1656 60.6324L96.948 56.4551H92.4062V59.4551ZM23.7637 59.4551H20.7637V62.4551H23.7637V59.4551ZM23.7637 16.5938V13.5938H20.7637V16.5938H23.7637ZM149.125 16.5938H152.125V13.5938H149.125V16.5938ZM149.125 55.9102L151.91 57.0243L152.125 56.4879V55.9102H149.125ZM102.289 173V176H104.32L105.074 174.114L102.289 173ZM46.7183 174.177L95.1656 60.6324L89.6469 58.2777L41.1997 171.823L46.7183 174.177ZM92.4062 56.4551H23.7637V62.4551H92.4062V56.4551ZM26.7637 59.4551V16.5938H20.7637V59.4551H26.7637ZM23.7637 19.5938H149.125V13.5938H23.7637V19.5938ZM146.125 16.5938V55.9102H152.125V16.5938H146.125ZM146.34 54.796L99.5036 171.886L105.074 174.114L151.91 57.0243L146.34 54.796ZM102.289 170H43.959V176H102.289V170ZM184.682 37.0039L182.697 34.7544L182.692 34.7585L184.682 37.0039ZM271.693 14.4453H274.693V11.4453H271.693V14.4453ZM271.693 58.0586V61.0586H274.693V58.0586H271.693ZM225.287 68.1562L227.287 70.3925L227.288 70.3914L225.287 68.1562ZM217.016 135.832L214.616 137.632L214.628 137.648L214.64 137.664L217.016 135.832ZM231.303 136.369L228.998 134.449L228.979 134.472L228.96 134.495L231.303 136.369ZM231.732 103.605L229.063 104.974L229.077 105.001L229.091 105.028L231.732 103.605ZM217.123 102.854L214.9 100.839L214.897 100.843L217.123 102.854ZM214.115 112.521L214.054 115.521L217.115 115.583V112.521H214.115ZM208.852 112.414H205.852V115.353L208.79 115.413L208.852 112.414ZM220.668 81.7988L218.705 79.5297L218.695 79.5386L220.668 81.7988ZM277.602 83.3027L275.451 85.3945L275.461 85.4043L277.602 83.3027ZM270.189 160.324L272.041 162.685L272.049 162.679L270.189 160.324ZM176.518 159.143L174.473 161.338L174.48 161.344L176.518 159.143ZM162.223 109.943V98.2344H156.223V109.943H162.223ZM162.223 98.2344C162.223 73.1812 170.433 53.6378 186.671 39.2493L182.692 34.7585C164.985 50.4481 156.223 71.725 156.223 98.2344H162.223ZM186.667 39.2534C202.986 24.8539 226.351 17.4453 257.191 17.4453V11.4453C225.441 11.4453 200.466 19.0758 182.697 34.7544L186.667 39.2534ZM257.191 17.4453H271.693V11.4453H257.191V17.4453ZM268.693 14.4453V58.0586H274.693V14.4453H268.693ZM271.693 55.0586H259.447V61.0586H271.693V55.0586ZM259.447 55.0586C243.821 55.0586 231.578 58.4977 223.286 65.9211L227.288 70.3914C234.035 64.3513 244.566 61.0586 259.447 61.0586V55.0586ZM223.287 65.92C218.938 69.8097 215.934 75.8323 213.999 83.5386C212.055 91.2772 211.115 100.999 211.115 112.629H217.115C217.115 101.271 218.038 92.0861 219.818 85.0004C221.606 77.8825 224.189 73.163 227.287 70.3925L223.287 65.92ZM211.115 112.629V114.777H217.115V112.629H211.115ZM211.115 114.777C211.115 120.571 211.359 125.343 211.868 129.044C212.357 132.589 213.149 135.676 214.616 137.632L219.416 134.032C218.949 133.41 218.291 131.699 217.812 128.225C217.355 124.909 217.115 120.442 217.115 114.777H211.115ZM214.64 137.664C217.107 140.862 220.435 142.592 224.428 142.592V136.592C222.405 136.592 220.791 135.815 219.391 134L214.64 137.664ZM224.428 142.592C228.16 142.592 231.331 141.137 233.645 138.243L228.96 134.495C227.837 135.899 226.424 136.592 224.428 136.592V142.592ZM233.607 138.29C234.419 137.316 234.956 136.075 235.344 134.817C235.744 133.52 236.052 131.984 236.289 130.249C236.763 126.78 236.988 122.25 236.988 116.711H230.988C230.988 122.129 230.766 126.354 230.345 129.437C230.134 130.979 229.882 132.169 229.611 133.047C229.328 133.965 229.082 134.348 228.998 134.449L233.607 138.29ZM236.988 116.711C236.988 110.634 236.24 105.649 234.374 102.183L229.091 105.028C230.233 107.148 230.988 110.9 230.988 116.711H236.988ZM234.402 102.237C233.471 100.421 232.171 98.9201 230.456 97.8909C228.745 96.8644 226.802 96.416 224.75 96.416V102.416C225.92 102.416 226.752 102.666 227.369 103.036C227.981 103.403 228.562 103.997 229.063 104.974L234.402 102.237ZM224.75 96.416C220.869 96.416 217.527 97.9399 214.9 100.839L219.346 104.868C220.872 103.184 222.616 102.416 224.75 102.416V96.416ZM214.897 100.843C212.221 103.805 211.115 107.859 211.115 112.521H217.115C217.115 108.734 218.015 106.342 219.349 104.864L214.897 100.843ZM214.176 109.522L208.913 109.415L208.79 115.413L214.054 115.521L214.176 109.522ZM211.852 112.414C211.852 99.473 215.596 90.2069 222.641 84.0591L218.695 79.5386C209.985 87.1408 205.852 98.2848 205.852 112.414H211.852ZM222.63 84.0679C230.05 77.6508 238.453 74.4863 247.953 74.4863V68.4863C236.971 68.4863 227.184 72.1968 218.706 79.5297L222.63 84.0679ZM247.953 74.4863C259.336 74.4863 268.413 78.1594 275.451 85.3945L279.752 81.2109C271.464 72.6909 260.776 68.4863 247.953 68.4863V74.4863ZM275.461 85.4043C282.372 92.4452 286.096 103.298 286.096 118.537H292.096C292.096 102.409 288.156 89.7722 279.742 81.2011L275.461 85.4043ZM286.096 118.537C286.096 135.643 280.125 148.655 268.33 157.97L272.049 162.679C285.463 152.085 292.096 137.239 292.096 118.537H286.096ZM268.338 157.963C256.333 167.377 241.613 172.148 223.998 172.148V178.148C242.764 178.148 258.837 173.037 272.041 162.685L268.338 157.963ZM223.998 172.148C204.41 172.148 189.388 166.966 178.555 156.941L174.48 161.344C186.707 172.66 203.339 178.148 223.998 178.148V172.148ZM178.563 156.948C167.853 146.97 162.223 131.51 162.223 109.943H156.223C156.223 132.492 162.122 149.831 174.473 161.338L178.563 156.948Z"
                fill={items.borderColor}
                mask="url(#path-2-outside-1_437_107)"
              />
            </motion.svg>
            <img
              className="absolute -top-6 left-1/2 -translate-x-1/2"
              src={items.src}
              alt=""
            />
          </div>

          <h1 className="font-[Roboto_Mono] text-[12px] tracking-widest text-center -mt-[2.1vw]">
            WLKR 76
            <p className="text-[12px] tracking-widest">{items.shoeName}</p>
            <p className="text-[12px] tracking-widest pt-6">76€</p>
          </h1>


          <button style={{backgroundColor: items.btnbg}} className="tracking-tighter py-[9px] px-10 rounded-full text-white font-[900] hover:px-[45px] hover:py-[10px] hover:transition-all hover:duration-200">
            AJOUTER AU PANIER
          </button>
        </div>
        })}
      </div>

      <div ref={contain} className="hidden lg:flex relative w-full h-[100vh] bg-white overflow-hidden">
        <div className="">
          <div className="left_side">
            <div>
              <img
                ref={fstImg}
                className="absolute left-0 top-0 w-[0vw] h-[100vh] object-cover"
                src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-1-full.81784bff1664822c59280a8487bf463a.jpg"
                alt=""
              />
              <img
                ref={fstImg2}
                className="absolute left-0 top-0 w-[0vw] h-[100vh] object-cover"
                src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-3-full.750da9b9b4ec1f5b019dfd122bc69eda.jpg"
                alt=""
              />
              <img
                ref={fstImg3}
                className="absolute left-0 top-0 w-[0vw] h-[100vh] object-cover"
                src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-2-full.bf5f6ea7392b571275b788ffca5dbf03.jpg"
                alt=""
              />
            </div>

            <div>
              <img ref={secImg} className="absolute z-10 w-[33.1vw] lg:h-[77vh] xl:h-[96vh] object-cover left-1/2 -translate-x-1/2 top-[50vh] -translate-y-[-10%]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-1-zoom.1f2b13036e579fbda39ce2f8595e717e.jpg"
                alt=""
              />
              <img ref={secImg2} className="absolute z-[99] w-[33.1vw] lg:h-[77vh] xl:h-[96.65vh] object-cover left-1/2 translate-x-1/2 top-1/2 -translate-y-1/2"
                src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-3-zoom.6953b561b929aa19c4eab6c65c8adac6.jpg"
                alt=""
              />
              <img ref={secImg3} className="absolute z-[100] w-[33.2vw] lg:h-[77vh] xl:h-[97vh] object-cover left-1/2 translate-x-1/2 top-1/2 -translate-y-1/2" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-2-zoom.e1e6e3435afcff175ea2c09bcda0b543.jpg" alt=""
              />
            </div>
          </div>

          <div className="right-side">
            <Swiper
              pagination={pagination}
              modules={[Autoplay, Pagination]}
              loop={[true]}
              autoplay = {{
                delay: 9000,
              }}
              className="right_side absolute w-[33.3%] h-screen bg-white right-0 top-0 z-[999]"
            >
              <SwiperSlide ref={slide1} className="relative w-[33.3%] h-full flex flex-col items-center">
                <div className="mt-[21%] flex flex-col">
                  <h1 className="font-[Roboto_Flex_Thin] font-[900] text-7xl text-[#E8D2AC] tracking-[-4px] ml-6">
                    01
                  </h1>

                  <h1 className="text-md text-[#7E8368] tracking-tighter font-[900] bg-white py-2 -mt-5">
                    CRAMPONS EN X
                  </h1>
                </div>
                <img
                  className="w-[70%] mt-[21.2%]"
                  src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-shoe.bafd538f127edd461229eea3f1ab7a99.png"
                  alt=""
                />

                <h1 className="font-[sans_serif] text-sm tracking-wider lg:w-[42%] xl:w-[35%] text-center mt-10">
                  Semelle extérieure en caoutchouc avec crapmons pour une accroche sur toutes les surfaces
                </h1>
              </SwiperSlide>

              <SwiperSlide ref={slide2} className="w-[33.3%] h-full flex flex-col items-center">
                  <div className="mt-[21.5%] flex flex-col">
                    <h1 className="font-[Roboto_Flex_Thin] font-[900] text-[13vh] text-[#E8D2AC] tracking-[-4px] ml-10">
                      02
                    </h1>

                    <h1 className="text-md text-[#7E8368] tracking-tighter font-[900] bg-white py-4 -mt-10">
                      COMPOSANT RIPSTOP
                    </h1>
                  </div>
                  <img
                    className="w-[70%] mt-[11.7%]"
                    src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-shoe.bafd538f127edd461229eea3f1ab7a99.png"
                    alt=""
                  />

                  <h1 className="font-[sans_serif] text-sm tracking-wider lg:w-[42%] xl:w-[35%] text-center mt-[17.3%]">
                    Naturellement résistant
                  </h1>
              </SwiperSlide>

              <SwiperSlide ref={slide3} className="w-[33.3%] h-full flex flex-col items-center">
                  <div className="mt-[20%] flex flex-col">
                    <h1 className="font-[Roboto_Flex_Thin] font-[900] text-[13vh] text-[#E8D2AC] tracking-[-4px] ml-5">
                      03
                    </h1>

                    <h1 className="text-md text-[#7E8368] tracking-tighter font-[900] bg-white py-4 -mt-10">
                      MOUSSE M FOAM
                    </h1>
                  </div>
                  <img
                    className="w-[70%] mt-[13.2%]"
                    src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-shoe.bafd538f127edd461229eea3f1ab7a99.png"
                    alt=""
                  />

                  <h1 className="font-[sans_serif] text-sm tracking-wider lg:w-[42%] xl:w-[35%] text-center mt-[15%]">
                    Semelle intermédiaier avec un amorti moelleux et durable
                  </h1>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div ref={loader} className="hidden lg:flex absolute z-[9999] w-0 h-[6px] bg-[#545841] left-0 top-[99vh] overflow-hidden"></div>
      </div>

      <div className="relative flex lg:hidden mobShowSwiperSection w-full h-screen">
        <div className="absolute w-full h-[17.1vh] text-center">
          <img className="w-full h-full object-cover" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-1-full.81784bff1664822c59280a8487bf463a.jpg" alt="" />
        </div>

        <Swiper
              pagination={pagination}
              modules={[Autoplay, Pagination]}
              loop={[true]}
              autoplay = {{
                delay: 9000,
              }}
              className="absolute w-full h-[60vw] bg-white top-[24vh]"
            >
              <SwiperSlide ref={slide1} className="w-[33.3vw] h-full flex flex-col items-center">
              <h1 className="text-sm font-[900] tracking-tighter text-[#7E8368]">CRAMPONS EN X</h1>
                <img
                  className="w-[60%] mt-5"
                  src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-shoe.bafd538f127edd461229eea3f1ab7a99.png"
                  alt=""
                />

                <h1 className="font-[sans_serif] text-xs tracking-[0.8px] w-[60vw] text-center mt-7">
                  Semelle extérieure en caoutchouc avec crapmons
                  pour une accroche sur toutes les surfaces
                </h1>
              </SwiperSlide>

              <SwiperSlide ref={slide2} className="w-[33.vw] h-full flex flex-col items-center">
              <h1 className="text-sm font-[900] tracking-tighter text-[#7E8368]">COMPOSANT RIPSTOP</h1>
                <img
                  className="w-[60%] mt-5"
                  src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-shoe.bafd538f127edd461229eea3f1ab7a99.png"
                  alt=""
                />

                <h1 className="font-[sans_serif] text-xs tracking-[0.8px] w-[80%] text-center mt-7">
                  Naturellement résistant
                </h1>
              </SwiperSlide>

              <SwiperSlide ref={slide3} className="w-[33.3vw] h-full flex flex-col items-center">
              <h1 className="text-sm font-[900] tracking-tighter text-[#7E8368]">MOUSSE M FOAM</h1>
                <img
                  className="w-[60%] mt-5"
                  src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/specs/specs-shoe.bafd538f127edd461229eea3f1ab7a99.png"
                  alt=""
                />

                <h1 className="font-[sans_serif] text-xs tracking-[0.8px] w-[80%] text-center mt-7">
                  Semelle intermédiaire avec un amorti moelleux <br /> et durable
                </h1>
              </SwiperSlide>
        </Swiper>
      </div>
    </div>
    </div>
  );
};

export default Shoes;