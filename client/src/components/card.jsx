import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal, Space } from "antd";
import { Star } from "@phosphor-icons/react";
import { useParams } from "react-router-dom";

export const CardRoute = () => {
  const { route, routeId } = useParams();
  const endpoint = "https://erasmus-project-sq9c.onrender.com/dl/route/monuments/";
  const [monuments, setMonuments] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    getMonuments();
  }, []);

  const showModal = () => {
    setOpen(true);
  };

  const getMonuments = async () => {
    axios(`${endpoint}${routeId}`).then((res) => setMonuments(res.data));
  };

  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  return (
    <>
      <Space direction="vertical" size="middle" align="center" style={{ display: 'flex', padding: "1em 0" }}>
        <div className="route-header">
          <Star size={36} color="#edbe40" weight="fill" />
          <h2>{route.toUpperCase()}</h2>
          <Button type="text" style={{ padding: "0", height: "fit-content" }}>
            <img
              src={"/img/icon_gifs/27-globe-flat.gif"}
              alt="map"
              onClick={showModal}
            />
          </Button>

        </div>
        {monuments.length > 0 ?
          monuments.map((monument, index) => {
            return (
              <>
                <div className="monument-info">
                  <div className="monument-text">
                    <h3>{monument.name.toUpperCase()}</h3>
                    <h5>{monument.description}</h5>
                    <h6>{monument.addres}</h6>
                  </div>
                  <div className="monument-images">
                    <div className="monument-img"><img src={`/img/monuments/${monument.name.replace(/\s+/g, '')}.png`} alt="" /></div>
                    <div className="monument-img"><img src={`/img/monuments/${monument.name.replace(/\s+/g, '')}2.png`} alt="" /></div>
                  </div>
                </div>
              </>
            )
          })
          : null
        }
      </Space>
      <Modal open={open}
        onCancel={handleCancel}
        style={{ padding: "0" }}>
        <div className="modal-map">
          <img src="/img/maproutes/popular-laspalmas.png" alt="" />
        </div>
      </Modal>
    </>
  );
};
