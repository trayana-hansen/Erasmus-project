import { Logo } from "./logo";
import { LeftOutlined, MenuOutlined, CloseOutlined, RightOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { Button, Card, Drawer, Space } from "antd";
import { useState } from "react";


const Header = (props) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header">
        <Button type="text" shape="round" icon={<LeftOutlined style={{ fontSize: "1.5em" }} />} onClick={() => navigate(-1)} ></Button>
        <Logo />
        <Button type="text" shape="round" icon={<MenuOutlined style={{ fontSize: "1.5em" }} />} onClick={showDrawer}></Button>
      </div>
      <Drawer placement="top" closable={false} onClose={onClose} open={open} height={"fit-content"} style={{ borderBottomLeftRadius: "2em", borderBottomRightRadius: "2em", height: "fit-content" }}>
        <Space className="dropdown-header">
          <Button type="text" shape="round" icon={<LeftOutlined style={{ fontSize: "1.5em" }} />} onClick={onClose} ></Button>
          <Logo />
          <Button type="text" shape="round" icon={<MenuOutlined style={{ fontSize: "1.5em" }} />} onClick={onClose}></Button>
        </Space>

        <Space direction="vertical" size="middle" style={{ display: 'flex' }} className="dropdown-content">
          <Button type="text" className="btn-dropdown"><h3>My Profile</h3> <RightOutlined style={{ fontSize: "1.5em" }} /></Button>
          <Button type="text" className="btn-dropdown"><h3>My Collection</h3><RightOutlined style={{ fontSize: "1.5em" }} /></Button>
          <Button type="text" className="btn-dropdown"><h3>How It Works</h3><RightOutlined style={{ fontSize: "1.5em" }} /></Button>
        </Space>
      </Drawer>
    </>
  );
};

export default Header;
