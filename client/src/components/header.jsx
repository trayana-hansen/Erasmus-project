import { Logo } from "./logo";
import { LeftOutlined, MenuOutlined, CloseOutlined, RightOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import { Button, Card, Drawer, Space } from "antd";
import { useState } from "react";


const Header = (props) => {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("user"))

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header">
        <Button className={props.page === "type-2" ? "no-visible" : "btn-go-back"} type="text" shape="round" icon={<LeftOutlined style={{ fontSize: "1.5em" }} />} onClick={() => navigate(-1)} ></Button>
        <Logo />
        <Button className={props.page === "type-1" ? "no-visible" : "btn-dropdown"} type="text" shape="round" icon={<MenuOutlined style={{ fontSize: "1.5em" }} />} onClick={showDrawer}></Button>
      </div>
      <Drawer placement="top" closable={false} onClose={onClose} open={open} height={"fit-content"} style={{ borderBottomLeftRadius: "2em", borderBottomRightRadius: "2em", height: "fit-content" }}>
        <Space className="dropdown-header">
          <Logo />
          <Button type="text" shape="round" icon={<CloseOutlined style={{ fontSize: "1.5em" }} />} onClick={onClose}></Button>
        </Space>

        <Space direction="vertical" size="middle" style={{ display: 'flex' }} className="dropdown-content">
          <Button onClick={() => navigate(`/user/${currentUser.id}/profile`)} type="text" className="btn-dropdown"><h3>MY PROFILE</h3> <RightOutlined style={{ fontSize: "1.5em" }} /></Button>
          <Button type="text" className="btn-dropdown"><h3>MY COLLECTION</h3><RightOutlined style={{ fontSize: "1.5em" }} /></Button>
        </Space>
      </Drawer>
    </>
  );
};

export default Header;
