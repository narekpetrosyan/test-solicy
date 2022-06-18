import { useContext } from 'react';
import { CardsContext } from './contex/CardsContext';
import MainLayout from './layouts/MainLayout/MainLayout';
import Card from './components/Card/Card';

import styles from './App.module.scss';

export const App = () => {
  const { cards, removeCard } = useContext(CardsContext);

  return (
    <MainLayout>
      <div className={styles.appWrapper}>
        {Array.from(cards.entries()).map(([key, value]) => (
          <Card key={key} itemIndex={key} value={value} removeHandler={removeCard} />
        ))}
      </div>
    </MainLayout>
  );
};
