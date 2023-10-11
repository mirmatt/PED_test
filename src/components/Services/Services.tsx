import React, { FC } from 'react';
import { SvgIconComponent } from "@mui/icons-material";
import styles from './Services.module.css';


interface ServicesProps {
	iconType: SvgIconComponent,
	title: string,
	text: string
}

const Services: FC<ServicesProps> = (props) => {
	return (
		<div className={styles.Services}>
			{React.createElement(props.iconType, {
				className: styles.icon
			})}
			<h1 className={styles.title}>{props.title}</h1>
			<p className={styles.text}>{props.text}</p>
		</div>
	)
}

export default Services;
