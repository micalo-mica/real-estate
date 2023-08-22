import styled from "styled-components";
import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import PropertyDetailCard from "../../../../Aztech/client/src/components/forPropertyDetail/PropertyDetailCard";
import SliderCard from "./SliderCard";

const S = styled.div`
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
`;

const Slide = ({ images }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <S>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "orange",
            // i added margin
            margin: "2px",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "orange",
            // i added margin
            margin: "2px",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {images &&
          images.map((image, i) => {
            return <SliderCard key={i} image={image} />;
          })}
      </ReactSimplyCarousel>
    </S>
  );
};
export default Slide;
