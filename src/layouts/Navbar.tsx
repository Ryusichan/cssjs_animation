import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import pageState from "../state/atom/pageState";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%); ;
`;

const NavContainer = styled.div`
  margin: 0 auto;
  width: 250px;
  height: 200px;
  position: relative;
  perspective: 1000px;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
`;

const Item = styled.div`
  display: block;
  position: absolute;
  background: #000;
  width: 250px;
  height: 200px;
  line-height: 200px;
  font-size: 2em;
  text-align: center;
  color: #fff;
  opacity: 0.95;
  border-radius: 10px;
`;

const NextBtn = styled.button`
  color: #444;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 1em 2em;
  cursor: pointer;
  background: #ccc;
  border-radius: 5px;
  border-top: 1px solid #fff;
  box-shadow: 0 5px 0 #999;
  transition: box-shadow 0.1s, top 0.1s;
  &:hover {
    color: #fff;
  }
  &:active {
    top: 104px;
    box-shadow: 0 1px 0 #999;
  }
`;

const PrevBtn = styled.button`
  color: #444;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  padding: 1em 2em;
  cursor: pointer;
  background: #ccc;
  border-radius: 5px;
  border-top: 1px solid #fff;
  box-shadow: 0 5px 0 #999;
  transition: box-shadow 0.1s, top 0.1s;
  &:hover {
    color: #fff;
  }
  &:active {
    top: 104px;
    box-shadow: 0 1px 0 #999;
  }
`;

const Navbar = () => {
  const [direction, setDirection] = React.useState("next");
  const [pageNumber, setPageNumber] = React.useState(0);
  // const [page, setPage] = useRecoilState(pageState);
  const navigate = useNavigate();

  let navigationArray = [
    { name: "Project01", path: "/", color: "#f00" },
    { name: "Project02", path: "/Project02", color: "#0f0" },
    { name: "Project03", path: "/Project03", color: "#00f" },
    { name: "Project04", path: "/Project04", color: "#ff0" },
    { name: "Project05", path: "/Project05", color: "#0ff" },
    { name: "Project06", path: "/Project06", color: "#f0f" },
  ];

  // let pageNumberBinding = pageNumber;
  // if (pageNumberBinding < 0) {
  //   pageNumberBinding = pageNumber + navigationArray.length;
  // } else if (pageNumberBinding > navigationArray.length - 1) {
  //   pageNumberBinding = pageNumber - navigationArray.length;
  // }

  const next = () => {
    setDirection("next");
    setPageNumber((prev) => prev + 1);
    // setPage(navigationArray[pageNumber].path);
  };

  const prev = () => {
    setDirection("prev");
    setPageNumber((prev) => prev - 1);
  };

  React.useEffect(() => {
    navigate(navigationArray[pageNumber].path);
  }, [pageNumber]);

  // const rotationlimit = () => {
  //   if (currentDeg === 360) {
  //     setCurrentDeg(0);
  //   } else if (currentDeg === -360) {
  //     setCurrentDeg(0);
  //   }
  // };

  // React.useEffect(() => {
  // rotationlimit();
  // }, [currentDeg]);

  console.log("direction", direction);
  console.log("pageNumber", pageNumber);
  // console.log("page", page);

  let curouselRotateY = pageNumber * -60;

  return (
    <Container>
      <NavContainer>
        <Carousel
          style={{
            transform: `translateZ(-100px) rotateY(${curouselRotateY}deg)`,
            // transition: `${
            //   currentDeg > 361 || currentDeg < -361 ? "none" : "transform 1s"
            // }`,
          }}
        >
          {navigationArray.map((item, index) => (
            <Item
              key={index}
              style={{
                transform: `rotateY(${index * 60}deg) translateZ(250px)`,
                background: item.color,
              }}
            >
              {item.name}
            </Item>
          ))}
        </Carousel>
      </NavContainer>
      <NextBtn onClick={next}>Next</NextBtn>
      <PrevBtn onClick={prev}>Prev</PrevBtn>
    </Container>
  );
};

export default Navbar;
