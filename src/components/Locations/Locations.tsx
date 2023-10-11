import React, { FC } from 'react';
import styles from './Locations.module.css';
import { Typography } from '@mui/material';

interface LocationsProps {
	image: string,
	section: string,
	count: number
}

const Locations: FC<LocationsProps> = (props) => {
	return (<div className={styles.Locations}>
		<img src={props.image} className={styles.locationsImages} alt={props.section}></img>
		<Typography variant='h6' className={styles.locationsText}>{props.section}</Typography>
		<Typography variant='body2' className={styles.countText}>{props.count + " Villas"}</Typography>
		<div className={styles.darkeningGradient}></div>
	</div>)
}

export default Locations;
