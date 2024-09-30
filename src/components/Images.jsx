import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

const Images = () => {
  const parentmobile = useRef();
  const mainImgmobile = useRef();
  const middleImgmobile = useRef();
  const lastImgmobile = useRef();
  const head1mobile = useRef();
  const head2mobile = useRef();
  const head3mobile = useRef();
  const head4mobile = useRef();
  const head5mobile = useRef();
  const head6mobile = useRef();

  const parentdesk = useRef();
  const mainImg = useRef();
  const middleImg = useRef();
  const lastImg = useRef();
  const head1 = useRef();
  const head2 = useRef();
  const head3 = useRef();
  const head4 = useRef();
  const head5 = useRef();
  const head6 = useRef();


  useGSAP(() => {
    const tl1 = gsap.timeline();

    tl1.to(mainImgmobile.current, {
      y: "-50%",
      width: "100%",
      height: "100%",
      scrollTrigger: {
        trigger: parentmobile.current,
        start: "top 65%",
        end: "top 10%",
        scrub: 2,
      },
    });
    tl1.to(parentmobile.current,{
      scrollTrigger:{
        trigger: parentmobile.current,
        start: "top top",
        end: "top -450%",
        pin: true,
        scrub: 2,
      }
    })
    tl1.to(middleImgmobile.current, {
      top: "17%",
      scrollTrigger:{
        trigger: parentmobile.current,
        scrub: 1,
        start: "top 0%",
      }
    })
    tl1.to(head1mobile.current, {
      x: '157%',
      fontWeight: "700",
      letterSpacing: "-1px",
      duration: 10,
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parentmobile.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      }
    }, "h")
    tl1.to(head2mobile.current, {
      x: '-160%',
      fontWeight: "700",
      letterSpacing: "-1px",
      duration: 10,
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parentmobile.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      }
    }, "h")
    tl1.to(head3mobile.current, {
      x: '203.5%',
      duration: 10,
      fontWeight: "700",
      letterSpacing: "-1px",
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parentmobile.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 2,
      }
    }, "h")
    tl1.to(middleImgmobile.current, {
      scale: [2],
      duration: 9000,
      scrollTrigger:{
        trigger: middleImgmobile.current,
        start: "top 30%",
        end: "top 0%",
        scrub: 4,
      }
    })
    tl1.to(lastImgmobile.current, {
      top: "17%",
      // duration: 10000,
      scrollTrigger:{
        trigger: middleImgmobile.current,
        start: "top 50%",
        scrub: 2,
      }
    }, "i")
    tl1.to(head4mobile.current, {
      x: '310%',
      fontWeight: "700",
      letterSpacing: "-1px",
      duration: 10,
      scrollTrigger:{
        trigger: lastImgmobile.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 2,
      }
    }, "i")
    tl1.to(head5mobile.current, {
      x: '-260%',
      fontWeight: "700",
      letterSpacing: "-1px",
      duration: 10,
      scrollTrigger:{
        trigger: lastImgmobile.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 2,
      }
    }, "i")
    tl1.to(head6mobile.current, {
      x: '257%',
      duration: 10,
      fontWeight: "700",
      letterSpacing: "-1px",
      scrollTrigger:{
        trigger: lastImgmobile.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 2,
      }
    }, "i")

    const tl2 = gsap.timeline();

    tl2.to(mainImg.current, {
      y: "-50%",
      width: "100%",
      height: "100%",
      scrollTrigger: {
        trigger: parentdesk.current,
        start: "top 65%",
        end: "top 10%",
        scrub: 2,
      },
    });
    tl2.to(parentdesk.current,{
      scrollTrigger:{
        trigger: parentdesk.current,
        start: "top top",
        end: "top -450%",
        pin: true,
        scrub: 2,
      }
    })
    tl2.to(middleImg.current, {
      top: "5%",
      scrollTrigger:{
        trigger: parentdesk.current,
        scrub: 1,
        start: "top 0%",
      }
    }, "h")
    tl2.to(head1.current, {
      x: '133%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10000,
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parentdesk.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 5,
      }
    }, "h")
    tl2.to(head2.current, {
      x: '-115%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10000,
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parentdesk.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 5,
      }
    }, "h")
    tl2.to(head3.current, {
      x: '140%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10000,
      repeat: 1,
      yoyo: true,
      scrollTrigger:{
        trigger: parentdesk.current,
        start: "top 0%",
        end: "top -200%",
        scrub: 5,
      }
    }, "h")
    tl2.to(middleImg.current, {
      scale: [2.49],
      duration: 9000,
      scrollTrigger:{
        trigger: middleImg.current,
        start: "top 30%",
        end: "top 0%",
        scrub: 4,
      }
    })
    tl2.to(lastImg.current, {
      top: "5.5%",
      // duration: 10000,
      scrollTrigger:{
        trigger: middleImg.current,
        start: "top 50%",
        scrub: 2,
      }
    }, "i")
    tl2.to(head4.current, {
      x: '200%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10000,
      scrollTrigger:{
        trigger: lastImg.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 5,
      }
    }, "i")
    tl2.to(head5.current, {
      x: '-135%',
      fontWeight: "700",
      letterSpacing: "-8px",
      duration: 10000,
      scrollTrigger:{
        trigger: lastImg.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 5,
      }
    }, "i")
    tl2.to(head6.current, {
      x: '180%',
      duration: 10000,
      fontWeight: "700",
      letterSpacing: "-8px",
      scrollTrigger:{
        trigger: lastImg.current,
        start: "top -50%",
        end: "top -200%",
        scrub: 5,
      }
    }, "i")
  });

  return (
    <div className="w-full">
      <div className="relative mx-auto w-full h-full bg-white overflow-hidden">
        <div ref={parentmobile} className="flex lg:hidden relative w-full h-[100vh] overflow-hidden">
          <img ref={mainImgmobile} className="absolute w-[29.5vw] h-[50vh] object-cover left-1/2 -translate-x-1/2 top-1/2 -translate-y-[-10%]"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-1.b140c7aa360fee7b7b6af5ba73560924.webp"
            alt=""
          />
          <img ref={middleImgmobile} className="absolute w-[49.6vw] h-[66vh] object-cover left-1/2 -translate-x-1/2 top-[150%]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-2.cfe8225bd6e52170e551f8a5739b3492.webp"
            alt=""
          />
          <h1 ref={head1mobile} className="absolute top-40 left-[-600px] text-[68px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            EXPLOREZ DE
          </h1>
          <h1 ref={head2mobile} className="absolute top-[42%] right-[-500px] text-[68px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            NOUVEAUX
          </h1>
          <h1 ref={head3mobile} className="absolute bottom-20 left-[-600px] text-[68px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            HORIZONS
          </h1>
          <img ref={lastImgmobile} className="absolute w-[49.6vw] h-[66vh] object-cover left-1/2 -translate-x-1/2 top-[120%]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-3.6e5425847547c4b4bf037ca5d760fa5f.webp"
            alt=""
          />
          <h1 ref={head4mobile} className="absolute top-40 left-[-800px] text-[68px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            DANS UN
          </h1>
          <h1 ref={head5mobile} className="absolute top-[42%] right-[-700px] text-[68px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            CONFORT
          </h1>
          <h1 ref={head6mobile} className="absolute bottom-20 left-[-600px] text-[68px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            ABSOLU
          </h1>
        </div>

        <div ref={parentdesk} className="hidden relative w-full lg:flex h-[100vh] overflow-hidden">
          <img ref={mainImg} className="absolute w-[29.5vw] h-[50vh] object-cover left-1/2 -translate-x-1/2 top-1/2 -translate-y-[-10%]"
            src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-1.b140c7aa360fee7b7b6af5ba73560924.webp"
            alt=""
          />
          <img ref={middleImg} className="absolute w-[33.57vw] h-[90vh] object-cover left-1/2 -translate-x-1/2 top-[150%]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-2.cfe8225bd6e52170e551f8a5739b3492.webp"
            alt=""
          />
          <h1 ref={head1} className="absolute -top-20 left-[-800px] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            ÉXPLOREZ DE
          </h1>
          <h1 ref={head2} className="absolute top-[30%] right-[-700px] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            NOUVEAUX
          </h1>
          <h1 ref={head3} className="absolute -bottom-24 left-[-600px] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            HORIZONS
          </h1>
          <img ref={lastImg} className="absolute w-[33.57vw] h-[90vh] object-cover left-1/2 -translate-x-1/2 top-[120%]" src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/story/story-3.6e5425847547c4b4bf037ca5d760fa5f.webp"
            alt=""
          />
          <h1 ref={head4} className="absolute -top-20 left-[-800px] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            DANS ON
          </h1>
          <h1 ref={head5} className="absolute top-[30%] right-[-700px] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            CONFORT
          </h1>
          <h1 ref={head6} className="absolute -bottom-24 left-[-600px] text-[150px] font-[100] tracking-[-35px] font-[Roboto_Flex_Thin] text-white">
            ABSOLU
          </h1>
        </div>

        <div className="absolute w-full h-[100%] left-1/2 -translate-x-1/2 top-[81.8%] items-center overflow-hidden">
          <img
            className="absolute w-full h-screen scale-[2.47] sm:scale-[2.95] md:scale-[3.68] lg:scale-[1] object-cover pb-[10.05vw] sm:pb-[8.67vw] md:pb-[6.9vw] lg:pb-0"
          src="https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/bg.6f060e16cb5802b780a013714307f463.jpg"
          alt=""
          />

          <Swiper
            slidesPerView={2}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="desktop hidden w-[100%] sm:flex mySwiper sm:pt-[19vw] md:pt-[14vw] lg:pt-[18.5vw] xl:pt-[14.8vw]"
          >
            {[{src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-1.1b97614d41e5837270d6552372c3c84b.webp", marginLeft: "25%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-2.b859e947584b0d00529b89cd390c4479.webp", marginLeft: "-11.8%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-3.c8764dfeae4caa18566b0406b83157b4.webp", marginLeft: "-11.8%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel4.919df7697cd32f0533a442fe4544edd2.webp", marginLeft: "-11.8%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel5.b7b62578992d023fab4c7f6fab3729eb.webp", marginLeft: "-11.8%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel6.29578aa0120d18374870a5663dc2809c.webp", marginLeft: "-11.8%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel7.f95ef802c7d093c92de3fdc3113587a3.webp", marginLeft: "-11.8%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel8.74b29e0fe4b42eb9a386416a0de8a620.webp", marginLeft: "-11.8%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel9.794351f5446e05e7cefa97702be6528d.webp", marginLeft: "-11.8%"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel10.750dbb71558a5a65cf5a41226c5dc703.webp", marginLeft: "-11.8%"}].map((items, index)=>{
              return <SwiperSlide key={index} style={{marginLeft: items.marginLeft}}>
                      <img
                        className="w-[34.6vw] h-[318.24px] object-cover"
                        src={items.src}
                        alt=""
                      />
                    </SwiperSlide>
            })}
          </Swiper>

          <Swiper
            slidesPerView={1}
            spaceBetween={15}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[FreeMode, Pagination]}
            className="mobile flex sm:hidden mySwiper w-[100vw] pt-[140px] pr-60"
          >
            {[{src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-1.1b97614d41e5837270d6552372c3c84b.webp", marginLeft: "18vw"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-2.b859e947584b0d00529b89cd390c4479.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/lookbook-3.c8764dfeae4caa18566b0406b83157b4.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel4.919df7697cd32f0533a442fe4544edd2.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel5.b7b62578992d023fab4c7f6fab3729eb.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel6.29578aa0120d18374870a5663dc2809c.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel7.f95ef802c7d093c92de3fdc3113587a3.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel8.74b29e0fe4b42eb9a386416a0de8a620.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel9.794351f5446e05e7cefa97702be6528d.webp"},
            {src: "https://decathlon-wlkr76.index.studio/static/LandingPage/Sportswear/images/lookbook/Carousel10.750dbb71558a5a65cf5a41226c5dc703.webp"}].map((items, index)=>{
              return <SwiperSlide key={index} style={{marginLeft: items.marginLeft}} className="w-[100vw]">
                      <img
                        className="w-[100vw] h-[305px] object-cover"
                        src={items.src}
                        alt=""
                      />
                    </SwiperSlide>
            })}
          </Swiper>

          <div className="absolute mt-[159px] sm:mt-[257px] md:mt-[84px] lg:mt-[200px] xl:mt-[3.25%] flex flex-col xl:flex-row items-center justify-between xl:px-[6%] w-full">
            <h1 className="text-white font-[Roboto_Flex_Thin] font-[700] tracking-tighter text-[10px] xl:text-xs">©️ Mursid 2024 || ALL RIGHT RESERVED</h1>
            <h1 className="text-white font-[Roboto_Flex_Thin] font-[700] tracking-tighter text-[10px] xl:text-xs"><a className="underline hover:text-[#dadada]" href="#">LEGAL MENTIONS</a> • WEBSITE BY <a className="underline hover:text-[#dadada]" href="#">INDEX.STUDIO</a></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
