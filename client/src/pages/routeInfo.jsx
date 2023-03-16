import { Button, Form, Input, Space } from "antd";
import { Logo } from "../components/logo.jsx";
import { useNavigate } from "react-router-dom";
import { Bground } from "../components/bground.jsx";

export const RouteInfo = () => {
  const navigate = useNavigate();

  const goTo = () => {
    navigate("/map");
  };

  return (
    <>
      <Bground />
      <Logo />
      <div>
        <h1 style={{ textAlign: "center" }}>Popular</h1>
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt=""
            style={{
              float: "left",
              marginRight: "10px",
              marginLeft: "10px",
              width: "150px",
              height: "200px",
            }}
          />
          <p style={{ marginRight: "10px", marginLeft: "10px" }}>
            Este es un párrafo de texto con una imagen a la izquierda. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec ut magna
            Este es un párrafo de texto con una imagen a la izquierda. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec ut magna
          </p>
          <img
            src="https://via.placeholder.com/150"
            alt=""
            style={{
              float: "left",
              marginRight: "10px",
              marginLeft: "10px",
              width: "150px",
              height: "200px",
            }}
          />
          <p style={{ marginRight: "10px", marginLeft: "10px" }}>
            Este es un párrafo de texto con una imagen a la izquierda. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec ut magna
            Este es un párrafo de texto con una imagen a la izquierda. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Donec ut magna
          </p>
        </div>
        <Button onClick={goTo} className="start-btn" type="link" block>
          START
        </Button>
      </div>
    </>
  );
};
