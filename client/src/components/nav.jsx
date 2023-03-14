import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../assets/styling/nav.scss";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: "100vh", backgroundColor: "pink" }}>
      <div
        style={{
          backgroundColor: "purple",
          height: 60,
          paddingLeft: 12,
          paddingTop: 12,
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: "white", fontSize: 30 }}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <span className="headerMenu">
        <NavMenu />
      </span>
      <Drawer
        placement="right"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "pink" }}
      >
        <NavMenu />
      </Drawer>
    </div>
  );
};

const NavMenu = ({ isInline = false }) => {
  return (
    <Menu
      style={{ backgroundColor: "blue", color: "white", border: "none" }}
      mode={isInline ? "inline" : "vertical"}
      items={[
        {
          label: "How it works",
          key: "how",
        },
        {
          label: "About",
          key: "about",
        },
        {
          label: "My profile",
          key: "profile",
        },
        {
          label: "My collection",
          key: "collection",
        },
      ]}
    ></Menu>
  );
};
export default Nav;
