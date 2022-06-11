import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap-trial/MorphSVGPlugin";

import styled from "styled-components";
import "./styles.css";
import { ReactComponent as FB } from "../SVG/fb-icon.svg";
import { ReactComponent as LinIcon } from "../SVG/lin-icon.svg";
import { ReactComponent as IgIcon } from "../SVG/ig-icon.svg";
import { ReactComponent as TwitIcon } from "../SVG/twit-icon.svg";
import { ReactComponent as YTIcon } from "../SVG/yt-icon.svg";
import { ReactComponent as MorphingIcon } from "../SVG/all-icons.svg";

// import { ReactComponent as TWIT } from "../SVG/twit-icon.svg";
// import { ReactComponent as YT } from "../SVG/yt-icon.svg";
gsap.registerPlugin(MorphSVGPlugin);

function App() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    //linkedin to instagram
    tl.to("#lini", {
      morphSVG: { shape: "#igbigdot", shapeIndex: 5 },
      fill: "#c13584",
      delay: 3,
      duration: 1.5
    })
      .to(
        "#lindot",
        {
          morphSVG: { shape: "#igsmdot", shapeIndex: 6 },
          fill: "#c13584",
          duration: 1.25
        },
        "<+=0"
      )
      .to(
        "#linn",
        {
          morphSVG: { shape: "#igbigdot", shapeIndex: 6 },
          fill: "#c13584",
          duration: 1
        },
        "<+=0"
      )
      .to(
        "#linsq",
        {
          morphSVG: { shape: "#igsq", shapeIndex: 5 },
          fill: "#c13584",
          duration: 0.75
        },
        "<+=0"
      )
      //instagram to youtube
      .to(
        "#linsq",
        {
          morphSVG: { shape: "#ytshell", shapeIndex: 1 },
          fill: "#FF0000",
          delay: 3,
          duration: 1
        },
        "<+=0"
      )
      .to(
        "#linn",
        {
          morphSVG: { shape: "#ytplay", shapeIndex: 6 },
          fill: "#FF0000",
          duration: 1.25
        },
        "<+=0"
      )
      .to(
        "#lini",
        {
          morphSVG: { shape: "#ytplay", shapeIndex: 6 },
          fill: "#FF0000",
          duration: 1
        },
        "<+=0"
      )
      .to(
        "#lindot",
        {
          morphSVG: { shape: "#ytplay", shapeIndex: 6 },
          fill: "#FF0000",
          duration: 0.75
        },
        "<+=0"
      )
      //youtube to twitter
      .to(
        "#linsq",
        {
          morphSVG: { shape: "#twit", shapeIndex: 1 },
          fill: "#1DA1F2",
          delay: 3,
          duration: 1.25
        },
        "<+=0"
      )
      .to(
        "#linn",
        {
          morphSVG: { shape: "#twit", shapeIndex: 1 },
          fill: "#1DA1F2",
          duration: 1
        },
        "<+=0"
      )
      .to(
        "#lini",
        {
          morphSVG: { shape: "#twit", shapeIndex: 1 },
          fill: "#1DA1F2",
          duration: 0.75
        },
        "<+=0"
      )
      .to(
        "#lindot",
        {
          morphSVG: { shape: "#twit", shapeIndex: 1 },
          fill: "#1DA1F2",
          duration: 0.5
        },
        "<+=0"
      )
      //twitter to facebook
      .to(
        "#linsq",
        {
          morphSVG: { shape: "#fb", shapeIndex: 1 },
          delay: 3,
          fill: "	#4267B2",
          duration: 0.75
        },
        "<+=0"
      )
      .to(
        "#linn",
        {
          morphSVG: { shape: "#fb", shapeIndex: 2 },
          fill: "	#4267B2",
          duration: 0.75
        },
        "<+=0"
      )
      .to(
        "#lini",
        {
          morphSVG: { shape: "#fb", shapeIndex: 3 },
          fill: "	#4267B2",
          duration: 0.75
        },
        "<+=0"
      )
      .to(
        "#lindot",
        {
          morphSVG: { shape: "#fb", shapeIndex: 4 },
          fill: "	#4267B2",
          duration: 0.75
        },
        "<+=0"
      )
      .to({}, 1.5, {});

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Wrapper className="app">
      <LinkedIn />
      <Instagram />
      <Youtube />
      <Facebook />
      <Twitter />
      {/* <MorphingIcon/> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;
const LinkedIn = styled(LinIcon)`
  position: relative;
`;
const Instagram = styled(IgIcon)`
  position: relative;
  visibility: hidden;
  display: none;
`;
const Facebook = styled(FB)`
  position: relative;
  visibility: hidden;
  display: none;
`;
const Twitter = styled(TwitIcon)`
  position: relative;
  visibility: hidden;
  display: none;
`;
const Youtube = styled(YTIcon)`
  position: relative;
  visibility: hidden;
  display: none;
`;

export default App;
