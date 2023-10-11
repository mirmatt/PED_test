import React, { FC } from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import { useMediaQuery } from '@mui/material';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import BodyMobile from '../../components/BodyMobile/BodyMobile';

interface HomeProps { }

const Home: FC<HomeProps> = () => {

  const isMobile = useMediaQuery("(max-width: 915px)")
  return (<div className={styles.Home}>
	{isMobile ? <HeaderMobile/> : <Header/>}
    {isMobile ? <BodyMobile/> : <Body/>}
  </div>)
};

export default Home;
