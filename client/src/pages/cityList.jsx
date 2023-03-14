import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, Card, Space } from "antd";

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
      <Space
        direction="vertical"
        size="middle"
        align="center"
        style={{
          display: "flex",
          backgroundImage: "./img/cities/${city.name}.png",
        }}
      >
        {cities.length > 0
          ? cities.map((city) => {
              return (
                <Card className="city-card">
                  <Image src={`/img/cities/${city.name}.png`} />
                  <h1>{city.name}</h1>
                </Card>
              );
            })
          : null}
      </Space>
    </>
  );
};
