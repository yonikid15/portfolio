// @flow
import React from 'react';
import styles from './Button.css';

type Props = {
  bg: string,
  children: any,
};

const add = (a: number, b: number): number => a + b;
add(2, 3);

const Button = ({ bg, children }: Props) => (
  <button className={styles.blue} type="button" style={{ backgroundColor: bg }}>
    {children}
  </button>
);

export default Button;
