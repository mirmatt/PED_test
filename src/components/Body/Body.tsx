import React, { FC } from 'react';
import styles from './Body.module.css';

interface BodyProps {}

const Body: FC<BodyProps> = () => (
  <div className={styles.Body}>
    Body Component
  </div>
);

export default Body;
