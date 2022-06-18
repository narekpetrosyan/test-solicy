import React, { memo } from 'react';

import styles from './Card.module.scss';

const Card = ({ value, itemIndex, removeHandler }) => {
  return (
    <div className={styles.cardWrapper}>
      <p>{value}</p>
      <button onClick={() => removeHandler(itemIndex)}>X</button>
    </div>
  );
};

export default memo(Card);
