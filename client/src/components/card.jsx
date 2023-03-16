import axios from "axios";
import React, { useEffect, useState } from "react";

import { AudioFilled } from "@ant-design/icons";

export const CardRoute = () => {
  const endpoint = "http://localhost:4000/dl/monuments";
  const [monuments, setMonuments] = useState([]);

  useEffect(() => {
    getMonuments();
  }, []);

  const getMonuments = async () => {
    axios(`${endpoint}`).then((res) => setMonuments(res.data));
  };

  return (
    <>
      <div class="card">
        <div class="card-text">
          <section className="headerRoutes">
            <AudioFilled />
            <h3>{monuments.type}</h3>
          </section>
          <p>{monuments.description}</p>
        </div>
        <div class="card-image">
          <img src={monuments.img} alt="Image 1" />
          <img src={monuments.img} alt="Image 2" />
        </div>
      </div>
    </>
  );
};
