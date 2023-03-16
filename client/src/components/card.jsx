import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Star } from "@phosphor-icons/react";

export const CardRoute = () => {
  const endpoint = "http://localhost:4000/dl/monuments";
  const [monuments, setMonuments] = useState([]);

  useEffect(() => {
    getMonuments();
  }, []);

  const getMonuments = async () => {
    axios(`${endpoint}`).then((res) => setMonuments(res.data));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div class="card">
        <div class="card-text">
          <section className="headerRoutes">
            <Star size={36} color="#edbe40" weight="fill" />
            <h3>{monuments.type}</h3>
            <img
              src={require("../assets/img/icon_gifs/globe_icon.gif")}
              alt="map"
              onClick={showModal}
            />
          </section>
          <p>{monuments.description}</p>
        </div>{" "}
        <br />
        <div class="card-image">
          <img src={monuments.img} alt="Image 1" />
          <img src={monuments.img} alt="Image 2" />
        </div>
      </div>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img src={require("../assets/img/routesImg/map.png")} alt="map_build" />
      </Modal>
    </>
  );
};
