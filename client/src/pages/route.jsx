import { Card, Carousel, Space, Rate, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Bground } from "../components/bground";
import axios from "axios";

export const RoutePath = () => {
  const [routes, setRoutes] = useState([]);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const reviews = "http://localhost:4000/dl/reviews";
  const desc = "`${reviews.grade}`";
  const [value, setValue] = useState(3);

  return (
    <>
      <Bground />
      <Space
        direction="vertical"
        size="middle"
        align="center"
        style={{ display: "flex" }}
        className="route-container"
      >
        <h2 className="routeHeading">{routes.name}</h2>
        <Carousel afterChange={onChange}>
          <div>
            {routes.length > 0
              ? routes.map((route) => {
                  return (
                    <Card className="route-card">
                      <Image src={`${route.img}`} /> //TODO are we hardcoding
                      the img of the route or putting it in the database?
                      <p>{routes.description}</p>
                      <span>
                        <Rate
                          tooltips={desc}
                          onChange={setValue}
                          value={value}
                        />
                        {value ? (
                          <span className="ant-rate-text">
                            {desc[value - 1]}
                          </span>
                        ) : (
                          ""
                        )}
                      </span>
                    </Card>
                  );
                })
              : null}
          </div>
        </Carousel>
      </Space>
    </>
  );
};
