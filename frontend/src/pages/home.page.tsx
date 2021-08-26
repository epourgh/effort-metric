import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/_home.module.scss';
import EffortList from '../components/home/EffortList'
import Login from '../components/home/Login'
import Register from '../components/home/Register'

interface UserInterface {
  id?: number,
  name?: string,
}

const HomePage = () => {
  const [effortArr, setEffortArr] = useState([]);

  let userLogin: UserInterface = {};
  // userLogin = {id: 1, name: 'Emerson'};
  userLogin = {id: 2, name: 'Jennifer'}
  
  const effortUnits = [
    { userId: 1, weekId: 1, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }, 
    { userId: 2, weekId: 1, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 },
    { userId: 1, weekId: 2, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }, 
    { userId: 2, weekId: 2, monday: 60, tuesday: 30, wednesday: 90, thursday: 45, friday: 60, saturday: 0, sunday: 60 },
    { userId: 1, weekId: 3, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }, 
    { userId: 2, weekId: 3, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 },
    { userId: 1, weekId: 4, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }, 
    { userId: 2, weekId: 4, monday: 0, tuesday: 0, wednesday: 0, thursday: 0, friday: 0, saturday: 0, sunday: 0 }
  ];

  useEffect(() => {

    if (userLogin && Object.keys(userLogin).length === 0 && userLogin.constructor === Object) return;
    
    let tempUnitsArr = [];
    let limit = 0;

    effortUnits.reverse().forEach(unit => {
      if (limit === 2) {
        return;
      }

      if (userLogin.id === unit.userId) {
        tempUnitsArr.unshift(unit);
        limit++;
      }

    });

    setEffortArr(tempUnitsArr);

  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {
          (userLogin && Object.keys(userLogin).length > 0 && userLogin.constructor === Object) ? 
          (
            <>
              <p>Name: <b>{userLogin.name}</b></p>
              <br />
              <EffortList effortUnits={effortArr} />
            </>
          )
          :
          (
            <div>
                <Login />
                <Register />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default HomePage;
