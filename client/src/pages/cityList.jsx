import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Image, Card, Space } from "antd";
import { Bground } from "../components/bground";
import { Logo } from "../components/logo";
import Header from "../components/header";

export const Cities = () => {
  const endpoint = "http://localhost:4000/dl/cities";
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    axios(`${endpoint}`).then((res) => setCities(res.data));
  };

  const goTo = (name, id) => {
    navigate(`/${name}/${id}/routes`)
  }

  return (
    <>
      <Bground />
      <Header page="type-2" />
      <div className="">
        <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
          <h2>Choose a city</h2>
        </Space>
        <Space
          direction="vertical"
          size="middle"
          align="center"
          style={{
            display: "flex",
          }}
        >
          {cities.length > 0
            ? cities.map((city) => {
              const cityName = city.name.replace(/\s+/g, '');
              return (
                <Card key={city.id} className="city-card" onClick={() => goTo(city.name, city.id)} style={{
                  backgroundImage: `url(img/cities/${cityName}.png)`,
                }}>
                  <h3>{city.name.toUpperCase()}</h3>
                </Card>
              );
            })
            : null}
        </Space>
      </div>
    </>
  );
};
