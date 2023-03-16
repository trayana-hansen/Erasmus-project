import { Player } from "@lottiefiles/react-lottie-player";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { Bground } from "../components/bground";

export const Home = () => {
  const navigate = useNavigate();

  const goTo = (dest) => {
    console.log(dest);
    navigate(`/${dest}`);
  };

  return (
    <>
      <Bground />
      <Space
        direction="vertical"
        size="middle"
        align="center"
        style={{ display: "flex" }}
        className="home-container">
        <h1 className="homeHeading">RIDDLIN</h1>
        <Player
          src="https://assets7.lottiefiles.com/packages/lf20_svy4ivvy.json"
          className="player"
          loop
          autoplay
          speed={1}
        />

        <Space
          direction="vertical"
          size="middle"
          align="center"
          style={{ display: "flex" }}
          className="buttonWrapper"
        >
          <Button className="home-btn-r" onClick={() => goTo("register")}>
            SIGN UP
          </Button>
          <Button className="home-btn-s" onClick={() => goTo("login")}>
            LOGIN
          </Button>
        </Space>
      </Space>
    </>
  );
};
