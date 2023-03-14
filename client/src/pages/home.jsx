import { Player } from "@lottiefiles/react-lottie-player";
import { Button, Space } from "antd";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const goTo = (dest) => {
    console.log(dest);
    navigate(`/${dest}`);
  };

  return (
    <>
      <div className="backgroundHome">
        <h1 className="homeHeading">Riddlin</h1>
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
      </div>
    </>
  );
};
