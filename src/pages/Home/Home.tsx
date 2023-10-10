import React, { FC } from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import Footer from '../../components/Footer/Footer';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
  <div className={styles.Home}>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
);

export default Home;
