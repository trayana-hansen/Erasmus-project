import { Bground } from "../components/bground";
import Header from "../components/header";
import { CardRoute } from "../components/card";
import { Modal } from "antd";
import { useState } from "react";

export const RouteInfo = () => {
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
      <Bground />
      <Header />
      <CardRoute onClick={showModal} />
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
