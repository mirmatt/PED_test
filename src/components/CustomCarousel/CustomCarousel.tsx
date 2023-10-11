import React, { FC } from "react";
import styles from "./CustomCarousel.module.css";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface CustomCarouselProps {
  children: React.ReactNode | null;
}

const CustomCarousel: FC<CustomCarouselProps> = (props) => {
  return (
    <>
      <Carousel
        animation="slide"
        swipe={true}
        autoPlay={false}
        PrevIcon={<ArrowBackIosNewIcon />}
        NextIcon={<ArrowForwardIosIcon />}
        navButtonsAlwaysVisible={true}
		navButtonsProps={{
			className: styles.navButton
		}}
		indicatorIconButtonProps = {{
			className: styles.indicators
		}}
      >
        {props.children}
      </Carousel>
    </>
  );
};

export default CustomCarousel;
