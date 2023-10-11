import React, { FC } from 'react';
import styles from './FlatButton.module.css';
import { Button } from '@mui/material';

interface FlatButtonProps {
	children: React.ReactNode | null,
	width: string
}

const FlatButton: FC<FlatButtonProps> = (props) => {
	return(
		<Button variant='contained' className={styles.FlatButton} sx={{
			flexBasis : props.width
		}} onClick={(ev) => {
			if (ev.currentTarget.classList.contains(styles.Selected)) {
				ev.currentTarget.classList.remove(styles.Selected)
			} else {
				ev.currentTarget.classList.add(styles.Selected)
			}
		}}>{props.children}</Button>
	)
}

export default FlatButton;
