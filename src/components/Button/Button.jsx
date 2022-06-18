import React, { memo } from 'react';

import styles from './Button.module.scss';

const Button = ({ children, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={styles.btn}>
      {children}
    </button>
  );
};

export default memo(Button);
