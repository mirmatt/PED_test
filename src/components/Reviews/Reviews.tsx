import React, { FC } from "react";
import styles from "./Reviews.module.css";
import { Rating, Typography } from "@mui/material";

interface ReviewsProps {
    owner: string;
    text: string;
    vote: number;
}

const Reviews: FC<ReviewsProps> = (props) => {
    return (
        <div className={styles.Reviews}>
            <p className={styles.Averta}>{props.text}</p>
            <div className={styles.bottomReview}>
                <Rating value={props.vote} sx={{
					fontSize: "1.3rem"
				}}></Rating>
                <p className={styles.AvertaBold}>{props.owner}</p>
            </div>
        </div>
    );
};

export default Reviews;
