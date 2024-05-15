import React from "react";
import Header from "./Header";
import DashBoardImage from "../assests/showcase.jpg";
import Landing from "./Landing";
import { Outlet } from "react-router-dom";

export default function Applayout() {
  return (
    <div
      className="bg-cover h-screen"
      style={{
        backgroundImage: `url(${DashBoardImage})`,
      }}
    >
      <Header isAuthenticated={false} />
      <Outlet />
    </div>
  );
}
