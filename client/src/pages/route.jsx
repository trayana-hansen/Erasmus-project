import { Bground } from "../components/bground";
import Header from "../components/header";
import { CardRoute } from "../components/card";
import { useState } from "react";

export const RouteInfo = () => {
  return (
    <>
      <Bground />
      <Header />
      <CardRoute  />
    </>
  );
};
