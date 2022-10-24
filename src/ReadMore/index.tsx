/* eslint-disable */

import "./styles.scss";
import React, { useRef, useEffect, useState } from "react";

export const ReadMore = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [noOfLines, setNoOfLines] = useState(0);
  const [divHeight, setDivHeight] = useState(0);
  const [lineHeight, setLineHeight] = useState("");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showFullText, setShowFullText] = useState(false);

  const windowResized = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setDivHeight(ref.current?.clientHeight || 0);
    const myDiv = window && document?.getElementById("myDiv")!;
    const lineHeight2 = window.getComputedStyle(myDiv).getPropertyValue("line-height");
    setLineHeight(lineHeight2);
    const calculatedNumberOfLines = Math.ceil(divHeight / parseInt(lineHeight));
    setNoOfLines(calculatedNumberOfLines);
  }, [windowHeight, windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => windowResized());
  }, []);

  useEffect(() => {
    if (noOfLines > 3) {
      console.log('triggered no of lines')
      setShowFullText(true);
    }
  }, [noOfLines])

  return (
    <>
      <div ref={ref} className={`readmore-wrapper${+ showFullText ? ' show-full' : ' show-less'}`} id="myDiv">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, iste
        quis voluptatibus quidem assumenda, sit ullam animi recusandae itaque
        dolorum, repellat rerum et optio similique repudiandae ea! Velit
        distinctio quibusdam sed quasi adipisci doloribus itaque tempore unde ea
        impedit iste laborum dolorum eum exercitationem, architecto molestias?
        Voluptatibus, ullam. Fugit sint ratione error quasi rerum delectus natus
        laborum amet tempora? Temporibus expedita nemo doloribus vitae sed sunt
        molestias numquam voluptatum voluptatem et ab harum odio animi error eos
        consectetur, recusandae in sit reprehenderit laudantium quae quaerat cum
        dolores cumque! Iusto veniam fugiat iste voluptates eveniet rerum dolore
        ducimus, delectus sed. Dolorum.
      </div>
      <br />
      <p>div length{divHeight}</p>
      <p>line height{lineHeight}</p>
      <p>no of lines{noOfLines}</p>
      <p>window height:{windowHeight}</p>
      <p>window width:{windowWidth}</p>
    </>
  );
};
