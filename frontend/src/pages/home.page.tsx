import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/_home.module.scss';
import EffortList from '../components/home/effortList'

interface UserInterface {

}

const HomePage = () => {
  const [effortArr, setEffortArr] = useState([]);

  // const userLogin = {id: 1, name: 'Emerson'};
  const userLogin = {id: 2, name: 'Jennifer'}
  
  const effortUnits = [
    { userId: 1, weekId: 1, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }, 
    { userId: 2, weekId: 1, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 },
    { userId: 1, weekId: 2, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }, 
    { userId: 2, weekId: 2, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 },
    { userId: 1, weekId: 3, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }, 
    { userId: 2, weekId: 3, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }
  ];

  useEffect(() => {
    
    let tempUnitsArr = [];
    let limit = 0;

    effortUnits.reverse().forEach(unit => {
      if (limit === 2) {
        return;
      }

      if (userLogin && userLogin.id === unit.userId) {
        tempUnitsArr.unshift(unit);
        limit++;
      }

    });

    setEffortArr(tempUnitsArr);

  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>Home</h1>
        <p>Information on the home section.</p>
        <p>Name: <b>{userLogin.name}</b></p>
        <br />
        <EffortList effortUnits={effortArr} />
      </div>
    </div>
  );
};

export default HomePage;
