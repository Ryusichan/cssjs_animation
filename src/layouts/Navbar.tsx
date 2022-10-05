import React from "react";
import styled from "styled-components";

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
  font-size: 5em;
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
  const [currentDeg, setCurrentDeg] = React.useState(0);
  // const [isAnimating, setIsAnimating] = React.useState(false);
  const [items, setItems] = React.useState([
    { name: "A", color: "#f00" },
    { name: "B", color: "#0f0" },
    { name: "C", color: "#00f" },
    { name: "D", color: "#ff0" },
    { name: "E", color: "#0ff" },
    { name: "F", color: "#f0f" },
  ]);

  const next = () => {
    // if (isAnimating) return;
    // setIsAnimating(true);
    setDirection("next");
    setCurrentDeg(currentDeg - 60);
  };

  const prev = () => {
    setDirection("prev");
    setCurrentDeg(currentDeg + 60);
  };

  const rotationlimit = () => {
    if (currentDeg === 360) {
      setCurrentDeg(0);
    } else if (currentDeg === -360) {
      setCurrentDeg(0);
    }
  };

  React.useEffect(() => {
    // rotationlimit();
  }, [currentDeg]);

  console.log("direction", direction);
  console.log("currentDeg", currentDeg);

  return (
    <Container>
      <NavContainer>
        <Carousel
          style={{
            transform: `translateZ(-100px) rotateY(${currentDeg}deg)`,
            // transition: `${
            //   currentDeg > 361 || currentDeg < -361 ? "none" : "transform 1s"
            // }`,
          }}
        >
          {items.map((item, index) => (
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
