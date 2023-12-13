import React from 'react';
// import Heading from "../Heading/Heading";
import styles from './BasicContainerLogin.module.scss';

export const BasicContainerLogin = ({ children }) => {
  return <div className={styles.basicContainerLoginWrap}>{children}</div>;
};
export default BasicContainerLogin;
