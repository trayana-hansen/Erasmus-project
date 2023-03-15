import React, { useEffect, useState, useRef } from "react"
import { useParams } from "react-router-dom"
import { Bground } from "../components/bground"
import axios from "axios";
import { Space } from "antd";
import Header from "../components/header";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";


export const RoutesPage = () => {
  const { city, cityId } = useParams()
  const endpoint = "http://localhost:4000/dl/city/routes/";
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    getRoutes();
  }, []);

  const getRoutes = async () => {
    axios(`${endpoint}${cityId}`).then((res) => setRoutes(res.data));
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Bground />
      <Header />
      <div>
        <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
          <h2>{city.toUpperCase()}</h2>
        </Space>
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {routes.length > 0 ?
              routes.map((route) => {
                console.log(route)
                return (
                  <SwiperSlide>
                    <div className="route-img">
                      <img src={`/img/routes/${route.description}.png`} alt="" />
                    </div>
                    <div className="description-img"></div>
                  </SwiperSlide>
                )
              })
              : null}
          </Swiper>
        </div>
      </div>
    </>
  )
}