import React, { memo, useContext } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import { CardsContext } from '../../contex/CardsContext';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children, cardsEndRef }) => {
  const { addCard, sortCards } = useContext(CardsContext);

  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.header}>
        <Header addHandler={addCard} sortHandler={sortCards} />
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default memo(MainLayout);
