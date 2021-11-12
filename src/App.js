import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
  const wave = () => {};

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hello there!</div>

        <div className="bio">
          I am Andrew and I am alone so please help me find a girlfriend.
          Connect your Ethereum wallet and wave at me! I might date you.
        </div>

        <button className="waveButton" onClick={wave}>
          Date Me ❤
        </button>
      </div>
    </div>
  );
}
