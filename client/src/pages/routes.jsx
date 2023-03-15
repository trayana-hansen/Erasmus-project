import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Bground } from "../components/bground"
import { Logo } from "../components/logo"
import axios from "axios";
import { Space } from "antd";
import Header from "../components/header";

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

  return (
    <>
      <Bground />
      <Header />
      <div>
        <Space direction="vertical" size="middle" align="center" style={{ display: 'flex' }}>
          <h2>{city.toUpperCase()}</h2>
        </Space>
      </div>
    </>
  )
}