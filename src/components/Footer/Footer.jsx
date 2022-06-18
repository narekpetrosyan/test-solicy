import React, { memo } from 'react';

import styles from './Footer.module.scss';

const Footer = () => {
  return <div className={styles.footerWrapper}>Footer</div>;
};

export default memo(Footer);
