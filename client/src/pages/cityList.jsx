import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Card, Space } from "antd";
import { Bground } from "../components/bground";
import { Logo } from "../components/logo";

export const Cities = () => {
  const endpoint = "http://localhost:4000/dl/cities";
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    axios(`${endpoint}`).then((res) => setCities(res.data));
  };
  return (
    <>
      <Bground />
      <Logo />
      <Space
        direction="vertical"
        size="middle"
        align="center"
        style={{ display: "flex" }}
      >
        {cities.length > 0
          ? cities.map((city) => {
            return (
              <Card className="city-card" style={{ backgroundImage: `url(/img/cities/${city.name}.png)` }}>
                {/* <Image src={`/img/cities/${city.name}.png`} /> */}
                <h1>{city.name}</h1>
              </Card>
            );
          })
          : null}
      </Space>
    </>
  );
};
