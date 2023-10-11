import React, { FC } from "react";
import styles from "./BodyMobile.module.css";
import { Button } from "@mui/material";

import sicilyVilla from "../../images/sicily_villa.jpg";
import doubleQuote from "../../customIcons/quote-left-solid_gray.png";

import CustomCarousel from "../CustomCarousel/CustomCarousel";
import Services from "../Services/Services";
import serviceCarousel from "../../data/serviceCarousel";
import Locations from "../Locations/Locations";
import locationsCarousel from "../../data/locationsCarousel";
import Reviews from "../Reviews/Reviews";
import reviewsCarousel from "../../data/reviewsCarousel";

interface BodyMobileProps {}

const BodyMobile: FC<BodyMobileProps> = () => (
    <div className={styles.BodyMobile}>
        <div className={styles.villaContainer}>
            <img src={sicilyVilla} className={styles.villaImage} alt="sicily_villa"></img>
            <p className={styles.villaText}>Egestas Pharetra Vestibulum Magna Sit</p>
        </div>
        <div className={styles.horizontalSpacer}>
            <h1 className={[styles.NoeFontBold, styles.sixTop].join(" ")}>
                Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet
                rutrum.
            </h1>
            <p className={[styles.AvertaRegular, styles.twoTop].join(" ")}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                sem nec elit. Sed posuere consectetur est at lobortis. Duis mollis , est non
                commoodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Fusce
                dapibus, tellus ac cursus commodo, torto mauris condimentum nibh, ut fermentum massa
                justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button variant="contained" className={[styles.villasButton, styles.twoTop].join(" ")}>
                VILLAS IN SICILY
            </Button>
            <div className={styles.stripedContainer}>
                <h1 className={styles.NoeFontBold}>
                    Why <span className={styles.markHighliter}>choose</span> us
                </h1>
                <CustomCarousel>
                    {serviceCarousel.map((service, index) => {
                        return (
                            <Services
                                key={"service-" + index}
                                iconType={service.iconType}
                                title={service.title}
                                text={service.text}
                            ></Services>
                        );
                    })}
                </CustomCarousel>
            </div>
            <h1 className={[styles.NoeFontBold, styles.sixTop, styles.centerAlign].join(" ")}>
                Choose your next <span className={styles.markHighliter}>Destination</span>
            </h1>
            <p className={[styles.AvertaRegular, styles.twoTop, styles.centerAlign].join(" ")}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
                sem nec elit. Sed posuere consectetur est at labortis. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula.
            </p>
            <CustomCarousel>
                {locationsCarousel.map((location, index) => {
                    return (
                        <Locations
                            key={"location-" + index}
                            image={location.image}
                            section={location.section}
                            count={location.count}
                        ></Locations>
                    );
                })}
            </CustomCarousel>
            <div className={styles.stripedInvertedContainer}>
            	<img src={doubleQuote} className={styles.quoteIcon}></img>
                <h1 className={styles.NoeFontBold}>
                    What they say <span className={styles.markHighliter}>about</span>
                </h1>
                <div className={styles.reviewsContainer}>
                    <CustomCarousel>
                        {reviewsCarousel.map((reviews, index) => {
                            return (
                                <Reviews
                                    key={"review-" + index}
                                    owner={reviews.owner}
                                    text={reviews.text}
                                    vote={reviews.vote}
                                ></Reviews>
                            );
                        })}
                    </CustomCarousel>
                </div>
            </div>
        </div>
    </div>
);

export default BodyMobile;
