import React, { useEffect, useState, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
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
  const endpoint = "https://erasmus-project-sq9c.onrender.com/dl/city/routes/";
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRoutes();
  }, []);

  const getRoutes = async () => {
    axios(`${endpoint}${cityId}`).then((res) => setRoutes(res.data));
  };

  const goTo = (routeTitle, routeId) => {
    navigate(`/route/${routeTitle}/${routeId}`)
  }

  return (
    <>
      <Bground />
      <Header />
      <div>
        <Space className="city-title" direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
          <h2>{city.toUpperCase()}</h2>
        </Space>
        <div className="swiper-container">
          {routes.length > 0 ?
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper">
              {routes.map((route) => {
                return (
                  <SwiperSlide onClick={() => goTo(route.title, route.id)} key={route.id}>
                    <div className="route-img">
                      <img src={`/img/routes/${route.title}.png`} alt="" />
                    </div>
                    <div className="description-img">
                      <h4>{route.description}</h4>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            :
            <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
              <h3>No routes added</h3>
            </Space>
          }
        </div>
      </div>
    </>
  )
}