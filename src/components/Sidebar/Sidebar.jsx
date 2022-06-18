import React, { memo } from 'react';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div>
        <p>Press the 'Add card' button to add a new Card.</p>
        <p>Use the 'Sort cards' button to sort the Cards by the increase. </p>
        <p>Press an X icon on the top right to delete them.</p>
      </div>
    </div>
  );
};

export default memo(Sidebar);
