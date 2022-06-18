import { useCallback, createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LocalStorageService from '../services/LocalStorageService';
import RandomNumberGenerator from '../services/RandomNumberGenerator';

export const CardsContext = createContext({});

export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState(new Map());
  const [nums, setNums] = useState([]);

  useEffect(() => {
    const dataFromStorage = LocalStorageService.get('cards');
    if (dataFromStorage) {
      const parsedDataFromStorage = new Map(JSON.parse(dataFromStorage));
      setCards(parsedDataFromStorage);
    }
  }, []);

  useEffect(() => {
    LocalStorageService.set('cards', JSON.stringify(new Array(...cards)));
    const dataFromStorage = LocalStorageService.get('cards');
    if (dataFromStorage) {
      const parsedDataFromStorage = new Map(JSON.parse(dataFromStorage));
      const uniqueNumbers = Array.from(parsedDataFromStorage.entries()).map(
        ([key, value]) => value,
      );
      setNums(uniqueNumbers);
    }
  }, [cards]);

  const addCard = useCallback(() => {
    const randomNum = RandomNumberGenerator.generateNumber(nums);
    setCards((prev) => new Map(prev).set(uuidv4(), randomNum));
  }, [nums]);

  const removeCard = useCallback((id) => {
    setCards((prev) => {
      const inMap = new Map(prev);
      inMap.delete(id);
      return inMap;
    });
  }, []);

  const sortCards = useCallback(() => {
    setCards((prev) => {
      const inMap = new Map([...prev.entries()].sort((a, b) => a[1] - b[1]));
      return inMap;
    });
  }, []);

  const returnValues = {
    cards,
    addCard,
    sortCards,
    removeCard,
  };

  return <CardsContext.Provider value={returnValues}>{children}</CardsContext.Provider>;
};
