import Seo from "../components/Seo";
import React, { useState } from "react";
import { FreeMode, Thumbs, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

export default function Potato() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <>
      <div>
        <Seo title="about" />
        <h1>Potato</h1>
        <>
          {/* slideToClickedSlide : 슬라이드가 여러개 나열되어 있을 경우, 클릭시 해당 슬라이드 위치로 이동 여부 설정 */}
          <Swiper
            modules={[Controller, FreeMode, Thumbs]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
            spaceBetween={14}
            slidesPerView={3.5}
            freeMode={true}
            onSlideChange={() => console.log("slide change")}
            slideToClickedSlide={true}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="item_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/5e43dbe1-b975-46f2-a563-b5f41697d4f5.png" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/51287b59-e22f-4170-950e-11e54ca8cb5c.png" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/ba0276cc-a260-4bbf-af02-c918daa0644d.png" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/c5e90f69-015f-4314-ab56-c72c6fe9290a.png" />
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/6377f75b-98b0-4156-8212-f9223765a380.png" />
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
          <br />
          <div
            style={{ backgroundColor: "red", width: "300px", height: "500px" }}
          >
            box
          </div>
          <Swiper
            modules={[Controller, FreeMode]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
            spaceBetween={10}
            // slidesPerView={3.5}
            slidesPerView={"auto"}
            freeMode={true}
          >
            <SwiperSlide>
              <div className="nav_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/5e43dbe1-b975-46f2-a563-b5f41697d4f5.png" />
                </span>
                <span className="brandname">SSG</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="nav_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/51287b59-e22f-4170-950e-11e54ca8cb5c.png" />
                </span>
                <span className="brandname">EMART</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="nav_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/ba0276cc-a260-4bbf-af02-c918daa0644d.png" />
                </span>
                <span className="brandname">알리 익스프레스</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="nav_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/c5e90f69-015f-4314-ab56-c72c6fe9290a.png" />
                </span>
                <span className="brandname">11번가</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="nav_stampquick">
                <span className="logo">
                  <img src="https://image-alpha.wezuro.co.kr/wezuro/adm/stampmall_v2/2024/12/16/6377f75b-98b0-4156-8212-f9223765a380.png" />
                </span>
                <span className="brandname">G마켓</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
      <style jsx>{`
        .item_stampquick .logo {
          overflow: hidden;
          width: 5.8rem;
          height: 5.8rem;
          margin: 0 auto;
          border-radius: 1rem;
        }
        .item_stampquick img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .nav_stampquick {
          display: grid;
          grid-gap: 0.4rem;
          gap: 0.4rem;
          grid-auto-flow: column;
          align-items: center;
          height: 4rem;
          padding: 0 1.6rem;
          border-radius: 2rem;
          border: 1px solid var(--gray_400);
          background-color: var(--white);
          border-radius: 5rem;
          box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.15);
        }
        .nav_stampquick .logo {
          overflow: hidden;
          width: 2rem;
          height: 2rem;
          border-radius: 5rem;
        }
        .nav_stampquick img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .nav_stampquick .brandname {
          font-family: Pretendard;
          font-weight: 500;
          line-height: 20px;
          font-size: 14px;
          letter-spacing: 0;
        }
      `}</style>
    </>
  );
}
