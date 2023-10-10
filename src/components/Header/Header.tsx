import React, { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
	<div className={styles.Header}>
		<div className={styles.Logo_container}>
			<p>Logo</p>
		</div>
		<div className={styles.Navigation_container}>
			Nav
		</div>
		<div className={styles.Actions_container}>
			Login
		</div>
	</div>
);

export default Header;
