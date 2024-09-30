import { useGSAP } from "@gsap/react";
import gsap, { Linear, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

import "swiper/swiper-bundle.css";
import "swiper/css/pagination";

// import required modules
import { Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Video = () => {
  // step 1: Current Index & Maximum Index
  const [val, setval] = useState({
    currentIndex: 1,
    maxIndex: 650,
  });

  const imageObject = useRef([]);
  const canvasRef = useRef(null);
  const imagesLoader = useRef(0);

  // step 2: Preload Images
  const preload = () => {
    for (let i = 0; i <= val.maxIndex; i++) {
      const imagesURL = `./wlkrImg/${i.toString().padStart(3, "0")}.jpg`;
      const img = new Image();
      img.src = imagesURL;

      img.onload = () => {
        imagesLoader.current++;
        if (imagesLoader.current === val.maxIndex) {
          showImg(val.currentIndex);
        }
      };
      imageObject.current.push(img);
    }
  };

  // Call the preload
  useEffect(() => {
    preload();
  });

  // step 3: Show Image / Load Images on Screen

  // const showImg = (index) => {
  //   if (index >= 0 && index <= val.maxIndex) {
  //     const img = imageObject.current[index];
  //     const canvas = canvasRef.current;

  //     if (canvas && img) {
  //       let ctx = canvas.getContext("2d");
  //       if (ctx) {
  //         canvas.width = window.innerWidth;
  //         canvas.height = window.innerHeight;

  //         // images ko screen ke barabar set kiya hai
  //         const scaleX = canvas.width / img.width;
  //         const scaleY = canvas.height / img.height;

  //         // X & Y ki total / final length
  //         const scale = Math.max(scaleX, scaleY);

  //         const newWidth = canvas.width - scale + 1;
  //         const newHeight = canvas.height - scale + 125;

  //         // images ko center krne ke liye
  //         const offsetX = (canvas.width - newWidth) / 2;
  //         const offsetY = (canvas.height - newHeight) / 2;

  //         // clear the canvas
  //         ctx.clearRect(0, 0, canvas.width, canvas.height);

  //         // for high smoothing / quality of image
  //         ctx.imageSmoothingEnabled = true;
  //         ctx.imageSoothingQuality = "high";

  //         // Ab final image draw hogi🫡
  //         ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

  //         setval((prev) => ({
  //           ...prev,
  //           currentIndex: index,
  //         }));
  //       }
  //     }
  //   }
  // };

  const getResponsiveCanvasDimensions = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    // Define breakpoints for mobile, tablet, and desktop
    if (width <= 768) { // Mobile
      return { canvasWidth: width, canvasHeight: height };
    } else if (width <= 1024) { // Tablet
      return { canvasWidth: width, canvasHeight: height };
    } else { // Desktop
      return { canvasWidth: width, canvasHeight: height };
    }
  };
  
  const showImg = (index) => {
    if (index >= 0 && index <= val.maxIndex) {
      const img = imageObject.current[index];
      const canvas = canvasRef.current;
  
      if (canvas && img) {
        let ctx = canvas.getContext("2d");
        if (ctx) {
          // Get responsive canvas dimensions
          const { canvasWidth, canvasHeight } = getResponsiveCanvasDimensions();
  
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
  
          // Adjust the scale based on the responsive dimensions
          const scaleX = canvas.width / img.width;
          const scaleY = canvas.height / img.height;
  
          // Choose the scaling strategy
          const scale = Math.max(scaleX, scaleY);
  
          const newWidth = img.width * scale;
          const newHeight = img.height * scale;
  
          // Center the image on the canvas
          const offsetX = (canvas.width - newWidth) / 2;
          const offsetY = (canvas.height - newHeight) / 2;
  
          // Clear canvas before drawing
          ctx.clearRect(0, 0, canvas.width, canvas.height);
  
          // Enable high-quality image rendering
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
  
          // Draw the image on the canvas
          ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);
  
          setval((prev) => ({
            ...prev,
            currentIndex: index,
          }));
        }
      }
    }
  };
  

  const parentDiv = useRef(null);
  const shade = useRef();
  const parentRail = useRef();
  const roll1 = useRef();
  const roll2 = useRef();
  const roll3 = useRef();
  const roll4 = useRef();

  const head1 = useRef();
  const head2 = useRef();
  const head3 = useRef();
  const head4 = useRef();

  useGSAP(() => {

    gsap.to(shade.current, {
      opacity: 0,
      scrollTrigger:{
        trigger: parentDiv.current,
        start: "top -30%",
        end: "top 40%",
        scrub: 3,
      }
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentDiv.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    tl.to(val, {
      currentIndex: val.maxIndex,
      onUpdate: () => {
        showImg(Math.floor(val.currentIndex));
      },
    });

    const tlrail = gsap.timeline();

    tlrail.to(parentRail.current, {
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 60%",
        end: "top 200%",
        scrub: 2,
      }
    }, "a")
    tlrail.to(head1.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
      }
    }, "a, b")
    tlrail.to(roll1.current, {
      x: 90,
      ease: Linear,
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -20%",
        scrub: 2,
      }
    }, "a, b")
    tlrail.to(head2.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 70%",
        end: "top -40%",
        scrub: 2,
      }
    }, "a,b")
    tlrail.to(roll2.current, {
      x: -220,
      ease: Linear,
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -40%",
        scrub: 2,
      }
    }, "a, b")
    tlrail.to(head3.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 55%",
        end: "top -60%",
        scrub: 2,
      }
    }, "b,c")
    tlrail.to(roll3.current, {
      x: 130,
      ease: Linear,
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -70%",
        scrub: 2,
      }
    }, "b,c")
    tlrail.to(head4.current, {
      fontWeight: 700,
      letterSpacing: 1,
      ease: [0.85, 0, 0.15, 1],
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 45%",
        end: "top -100%",
        scrub: 2,
      }
    }, "c, d")
    tlrail.to(roll4.current, {
      x: -155,
      ease: Linear,
      scrollTrigger:{
        trigger: parentRail.current,
        start: "top 80%",
        end: "top -100%",
        scrub: 2,
      }
    }, "c, d")
  });

  return (
    <div className="w-full  mx-auto">
      <div ref={parentDiv} className="w-full h-[1600vh]">
        <div className="w-full h-screen sticky top-0 left-0">
          <canvas ref={canvasRef} className="w-full h-screen"></canvas>
          <span ref={shade} className="inline-block absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-transparent opacity-1"></span>
        </div>
      </div>

      <div ref={parentRail} className="relative w-full min-h-screen bg-white overflow-hidden">
        <img className="flex lg:hidden w-full h-full mt-[13.9vh] object-cover" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/tagline-mobile.a34c5e76765c666f291b6b7750af1bc2.png" alt="" />
        <div ref={roll1} className="hidden w-full h-[25vh] lg:flex items-center gap-10 -ml-28">
          <img
            className="w-[24vw] h-[17.6vh] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-1.f27f2e44f0b09b5b4e3864bb35fe99a4.jpg"
            alt=""
          />
          <h1 ref={head1} className="text-[110px] font-[100] tracking-[-7px] font-[Roboto_Flex_Thin]">
            ÉDITION
          </h1>

          <img
            className="w-[24vw] h-[17.6vh] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-2.b1d4272156170297d10a5a60965dbb82.jpg"
            alt=""
          />

          <img
            className="w-[24vw] h-[17.6vh] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-3.b9bc6bbef9f511fb5352eb2b628f82e3.jpg"
            alt=""
          />

          <img
            className="w-[24vw] h-[17.6vh] object-cover flex-shrink-0"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/typo/rail-4.8dd753c719d788ed76ef6b6acbd776ff.jpg"
            alt=""
          />
        </div>

        <div ref={roll2} className="hidden w-full h-[25vh] lg:flex items-center gap-10 ml-[41.5px]">
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

        <div ref={roll3} className="hidden w-full h-[25vh] lg:flex items-center gap-10 -ml-[63px]">
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

        <div ref={roll4} className="hidden w-full h-[25vh] lg:flex items-center gap-10 -ml-2">
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

      <div className="flex relative items-center justify-center w-full h-screen lg:hidden overflow-hidden">
          <svg
              viewBox="0 0 311 191"
              fill="none"
              className="w-[67.5vw] absolute top-[29.35vw] md:top-[27.5vw] left-1/2 -translate-x-1/2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="path-2-outside-1_437_107"
                maskUnits="userSpaceOnUse"
                x="22"
                y="13"
                width="269"
                height="164"
                fill="black"
              >
                <rect fill="white" x="22" y="13" width="269" height="164" />
                <path d="M43.959 173L92.4062 59.4551H23.7637V16.5938H149.125V55.9102L102.289 173H43.959ZM159.223 109.943V98.2344C159.223 72.4531 167.709 52.043 184.682 37.0039C201.726 21.9648 225.896 14.4453 257.191 14.4453H271.693V58.0586H259.447C244.193 58.0586 232.807 61.4245 225.287 68.1562C217.839 74.8164 214.115 89.6406 214.115 112.629V114.777C214.115 126.236 215.082 133.254 217.016 135.832C218.949 138.339 221.42 139.592 224.428 139.592C227.292 139.592 229.584 138.518 231.303 136.369C233.093 134.221 233.988 127.668 233.988 116.711C233.988 110.767 233.236 106.398 231.732 103.605C230.3 100.812 227.973 99.416 224.75 99.416C221.742 99.416 219.2 100.562 217.123 102.854C215.118 105.074 214.115 108.296 214.115 112.521L208.852 112.414C208.852 98.8789 212.79 88.6738 220.668 81.7988C228.617 74.9238 237.712 71.4863 247.953 71.4863C260.056 71.4863 269.939 75.4251 277.602 83.3027C285.264 91.1087 289.096 102.854 289.096 118.537C289.096 136.441 282.794 150.37 270.189 160.324C257.585 170.207 242.188 175.148 223.998 175.148C203.874 175.148 188.048 169.813 176.518 159.143C164.988 148.4 159.223 132.001 159.223 109.943Z" />
              </mask>
              <path
                d="M43.959 173L43.0392 172.608L42.4451 174H43.959V173ZM92.4062 59.4551L93.326 59.8475L93.9202 58.4551H92.4062V59.4551ZM23.7637 59.4551H22.7637V60.4551H23.7637V59.4551ZM23.7637 16.5938V15.5938H22.7637V16.5938H23.7637ZM149.125 16.5938H150.125V15.5938H149.125V16.5938ZM149.125 55.9102L150.053 56.2815L150.125 56.1027V55.9102H149.125ZM102.289 173V174H102.966L103.218 173.371L102.289 173ZM44.8788 173.392L93.326 59.8475L91.4865 59.0626L43.0392 172.608L44.8788 173.392ZM92.4062 58.4551H23.7637V60.4551H92.4062V58.4551ZM24.7637 59.4551V16.5938H22.7637V59.4551H24.7637ZM23.7637 17.5938H149.125V15.5938H23.7637V17.5938ZM148.125 16.5938V55.9102H150.125V16.5938H148.125ZM148.197 55.5388L101.361 172.629L103.218 173.371L150.053 56.2815L148.197 55.5388ZM102.289 172H43.959V174H102.289V172ZM184.682 37.0039L184.02 36.2541L184.018 36.2555L184.682 37.0039ZM271.693 14.4453H272.693V13.4453H271.693V14.4453ZM271.693 58.0586V59.0586H272.693V58.0586H271.693ZM225.287 68.1562L225.954 68.9017L225.954 68.9013L225.287 68.1562ZM217.016 135.832L216.216 136.432L216.224 136.443L217.016 135.832ZM231.303 136.369L230.535 135.729L230.528 135.737L230.522 135.744L231.303 136.369ZM231.732 103.605L230.843 104.062L230.847 104.071L230.852 104.08L231.732 103.605ZM217.123 102.854L216.382 102.182L216.381 102.183L217.123 102.854ZM214.115 112.521L214.095 113.521L215.115 113.542V112.521H214.115ZM208.852 112.414H207.852V113.394L208.831 113.414L208.852 112.414ZM220.668 81.7988L220.014 81.0425L220.01 81.0454L220.668 81.7988ZM277.602 83.3027L276.885 84L276.888 84.0033L277.602 83.3027ZM270.189 160.324L270.806 161.111L270.809 161.109L270.189 160.324ZM176.518 159.143L175.836 159.874L175.838 159.877L176.518 159.143ZM160.223 109.943V98.2344H158.223V109.943H160.223ZM160.223 98.2344C160.223 72.6958 168.617 52.5746 185.345 37.7524L184.018 36.2555C166.801 51.5114 158.223 72.2104 158.223 98.2344H160.223ZM185.343 37.7537C202.146 22.9278 226.047 15.4453 257.191 15.4453V13.4453C225.744 13.4453 201.306 21.0018 184.02 36.2541L185.343 37.7537ZM257.191 15.4453H271.693V13.4453H257.191V15.4453ZM270.693 14.4453V58.0586H272.693V14.4453H270.693ZM271.693 57.0586H259.447V59.0586H271.693V57.0586ZM259.447 57.0586C244.069 57.0586 232.397 60.4489 224.62 67.4112L225.954 68.9013C233.216 62.4001 244.317 59.0586 259.447 59.0586V57.0586ZM224.621 67.4108C220.688 70.9274 217.825 76.5157 215.938 84.0259C214.049 91.5468 213.115 101.089 213.115 112.629H215.115C215.115 101.18 216.043 91.8164 217.878 84.5132C219.715 77.1991 222.438 72.0452 225.954 68.9017L224.621 67.4108ZM213.115 112.629V114.777H215.115V112.629H213.115ZM213.115 114.777C213.115 120.528 213.357 125.198 213.85 128.771C214.335 132.292 215.082 134.921 216.216 136.432L217.816 135.232C217.016 134.165 216.313 131.996 215.831 128.498C215.356 125.053 215.115 120.485 215.115 114.777H213.115ZM216.224 136.443C218.335 139.18 221.092 140.592 224.428 140.592V138.592C221.748 138.592 219.563 137.497 217.807 135.221L216.224 136.443ZM224.428 140.592C227.582 140.592 230.166 139.391 232.084 136.994L230.522 135.744C229.002 137.645 227.003 138.592 224.428 138.592V140.592ZM232.071 137.009C232.64 136.327 233.08 135.371 233.433 134.227C233.79 133.07 234.08 131.649 234.308 129.979C234.764 126.638 234.988 122.209 234.988 116.711H232.988C232.988 122.169 232.765 126.496 232.326 129.708C232.107 131.314 231.836 132.619 231.522 133.637C231.204 134.668 230.861 135.337 230.535 135.729L232.071 137.009ZM234.988 116.711C234.988 110.722 234.238 106.149 232.613 103.131L230.852 104.08C232.235 106.648 232.988 110.811 232.988 116.711H234.988ZM232.622 103.149C231.834 101.613 230.775 100.414 229.427 99.6059C228.081 98.7982 226.508 98.416 224.75 98.416V100.416C226.214 100.416 227.417 100.732 228.398 101.321C229.378 101.909 230.198 102.805 230.843 104.062L232.622 103.149ZM224.75 98.416C221.451 98.416 218.642 99.6879 216.382 102.182L217.864 103.525C219.757 101.436 222.033 100.416 224.75 100.416V98.416ZM216.381 102.183C214.152 104.651 213.115 108.15 213.115 112.521H215.115C215.115 108.442 216.083 105.496 217.865 103.524L216.381 102.183ZM214.136 111.522L208.872 111.414L208.831 113.414L214.095 113.521L214.136 111.522ZM209.852 112.414C209.852 99.0769 213.726 89.1849 221.326 82.5523L220.01 81.0454C211.855 88.1628 207.852 98.6809 207.852 112.414H209.852ZM221.322 82.5552C229.095 75.8328 237.959 72.4863 247.953 72.4863V70.4863C237.465 70.4863 228.14 74.0148 220.014 81.0425L221.322 82.5552ZM247.953 72.4863C259.816 72.4863 269.43 76.3365 276.885 84L278.318 82.6055C270.447 74.5137 260.296 70.4863 247.953 70.4863V72.4863ZM276.888 84.0033C284.3 91.5542 288.096 103.002 288.096 118.537H290.096C290.096 102.706 286.228 90.6632 278.315 82.6022L276.888 84.0033ZM288.096 118.537C288.096 136.175 281.904 149.798 269.57 159.539L270.809 161.109C283.683 150.941 290.096 136.707 290.096 118.537H288.096ZM269.572 159.537C257.168 169.264 241.996 174.148 223.998 174.148V176.148C242.38 176.148 258.003 171.15 270.806 161.111L269.572 159.537ZM223.998 174.148C204.053 174.148 188.494 168.864 177.197 158.409L175.838 159.877C187.601 170.762 203.696 176.148 223.998 176.148V174.148ZM177.199 158.411C165.943 147.924 160.223 131.837 160.223 109.943H158.223C158.223 132.164 164.032 148.877 175.836 159.874L177.199 158.411Z"
                fill = "#897460"
                mask="url(#path-2-outside-1_437_107)"
              />
          </svg>

          <div className="hidden z-[10] w-full md:flex lg:hidden px-[8.9vw] mt-[32.5vw]">
            <div className="black w-[29.5vw] flex flex-col items-center">
              <img className="w-[21vw]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-kaki.41175d1d470cc18fea4039d9d4a2bdca.webp" alt="" />

              <h1 className="text-sm mt-3">WLKR 76</h1>
              <p className="text-sm tracking-wider">Kaki</p>

              <p className="text-xs mt-5">76€</p>
            </div>

            <div className="white w-[29.5vw] flex flex-col items-center">
              <img className="w-[21vw]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-white.e88209e1cebbe8c106738c487b070a47.webp" alt="" />

              <h1 className="text-sm mt-3">WLKR 76</h1>
              <p className="text-sm tracking-wider">Beige</p>

              <p className="text-xs mt-5">76€</p>
            </div>

            <div className="purple w-[29.5vw] flex flex-col items-center">
              <img className="w-[21vw]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-pink.e3719fc3c6d1c689598c81a224cdb41f.webp" alt="" />
              <h1 className="text-sm mt-3">WLKR 76</h1>
              <p className="text-sm tracking-wider">Violet</p>

              <p className="text-xs mt-5">76€</p>
            </div>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={-130}
            loop = {[true]}
            pagination={{clickable: true}}
            modules={[Pagination]}
            className="flex md:hidden absolute w-full top-[40vw] mySwiper"
            >
            <SwiperSlide className="ml-[25vw]">
              <img className="w-[100vh]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-pink.e3719fc3c6d1c689598c81a224cdb41f.webp" alt="" />
              <h1 className="ml-[17vw] text-sm pt-6">WLKR 76</h1>
              <p className="ml-[18.1vw] text-sm tracking-wider">Violet</p>

              <p className="text-xs pt-6 ml-[20.5vw]">76€</p>
            </SwiperSlide>

            <SwiperSlide className="ml-[25vw]">
              <img className="w-[100vw]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-kaki.41175d1d470cc18fea4039d9d4a2bdca.webp" alt="" />

              <h1 className="ml-[17vw] text-sm pt-6">WLKR 76</h1>
              <p className="ml-[19.5vw] text-sm tracking-wider">Kaki</p>

              <p className="text-xs pt-6 ml-[20.5vw]">76€</p>
            </SwiperSlide>

            <SwiperSlide className="ml-[26vw]">
              <img className="w-[100vw]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-white.e88209e1cebbe8c106738c487b070a47.webp" alt="" />

              <h1 className="ml-[17vw] text-sm pt-6">WLKR 76</h1>
              <p className="ml-[18.8vw] text-sm tracking-wider">Beige</p>

              <p className="text-xs pt-6 ml-[20.5vw]">76€</p>
            </SwiperSlide>

            <SwiperSlide className="ml-[25.5vw]">
              <img className="w-[100vw]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-pink.e3719fc3c6d1c689598c81a224cdb41f.webp" alt="" />
              <h1 className="ml-[17vw] text-sm pt-6">WLKR 76</h1>
              <p className="ml-[18.1vw] text-sm tracking-wider">Violet</p>

              <p className="text-xs pt-6 ml-[20.5vw]">76€</p>
            </SwiperSlide>

            <SwiperSlide className="ml-[25.5vw]">
              <img className="w-[100vw]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-kaki.41175d1d470cc18fea4039d9d4a2bdca.webp" alt="" />

              <h1 className="ml-[17vw] text-sm pt-6">WLKR 76</h1>
              <p className="ml-[19.5vw] text-sm tracking-wider">Kaki</p>

              <p className="text-xs pt-6 ml-[20.5vw]">76€</p>
            </SwiperSlide>

            <SwiperSlide className="ml-[25vw]">
              <img className="w-[100vw]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/buy/recirc-product-white.e88209e1cebbe8c106738c487b070a47.webp" alt="" />

              <h1 className="ml-[17vw] text-sm pt-6">WLKR 76</h1>
              <p className="ml-[18.8vw] text-sm tracking-wider">Beige</p>

              <p className="text-xs pt-6 ml-[20.5vw]">76€</p>
            </SwiperSlide>

          </Swiper>
      </div>
    </div>
  );
};

export default Video;