import React, { memo } from 'react';
import Button from '../Button/Button';

import styles from './Header.module.scss';

const Header = ({ addHandler, sortHandler }) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.buttons}>
        <Button clickHandler={addHandler}>Add card</Button>
        <Button clickHandler={sortHandler}>Sort cards</Button>
      </div>
    </div>
  );
};

export default memo(Header);
