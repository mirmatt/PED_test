import React, { FC } from 'react';
import styles from './Header.module.css';
import navigationLinks from '../../data/headerNav';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => {
	const navBar = navigationLinks

	return (<div className={styles.Header}>
		<div className={styles.Logo_container}>
			<p>Logo</p>
		</div>
		<div className={styles.Navigation_container}>
			{
				navBar.map((navElement, index) => {
					return <p className={styles.Nav_link} key={"nav-" + index}>{navElement.label}</p>
				})
			}
		</div>
		<div className={styles.Actions_container}>
			<p>En</p>
			<p>Search</p>
			<button>Login</button>
		</div>
	</div>)
};

export default Header;
