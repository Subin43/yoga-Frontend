import React from "react";
import Welcome from "./components/Welcome";
import Feature from "./components/Feature";
import Benefit from "./components/Benefit";
import Divine from "./components/Divine";
import Achievement from "./components/Achievement";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Welcome />
      <Feature />
      <Benefit />
      <Divine />
      <Achievement />
      {/* <Gallery /> */}
    </div>
  );
}
