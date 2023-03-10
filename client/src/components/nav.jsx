import React, { useState } from "react";
import { Drawer, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: "100vh", backgroundColor: "red" }}>
      <div
        style={{
          backgroundColor: "red",
          height: 60,
          paddingLeft: 12,
          paddingTop: 12,
        }}
      >
        <MenuOutlined style={{ color: "white", fontSize: 30 }} />
      </div>
      <NavMenu />
      <Drawer
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "red" }}
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
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "How it works",
          key: "hiw",
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
