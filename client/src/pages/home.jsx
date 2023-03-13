import { Player } from '@lottiefiles/react-lottie-player';
import { Button, Space } from 'antd';


export const Home = () => {
  return <>
    <h1 className="homeHeading">Riddlin</h1>
    <Player
      src='https://assets7.lottiefiles.com/packages/lf20_svy4ivvy.json'
      className="player" loop
      autoplay
      speed={1}
    />

    <Space wrap className="buttonWrapper">
      <Button type="primary">SIGN UP</Button>
      <Button type="primary">LOGIN</Button>
    </Space>
  </>;
};


