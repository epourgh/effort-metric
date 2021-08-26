import React from 'react'
import EffortUnit from './effortUnit';
import styles from '../../styles/_effortList.module.scss';

const EffortList = (props) => {

    // YYYY-MM-DD
    const week = [
        { id: 1, weekStart: '2021-08-02', weekEnd: '2021-08-08' },
        { id: 2, weekStart: '2021-08-09', weekEnd: '2021-08-15' },
        { id: 3, weekStart: '2021-08-16', weekEnd: '2021-08-22' },
        { id: 4, weekStart: '2021-08-23', weekEnd: '2021-08-29' }
    ];  

    let currentWeek = week.length; 

    return (
        <div>
            {
                props.effortUnits?.map( unit => {
                    
                    const weekIndex = unit.weekId - 1;
                    const isActive = currentWeek === unit.weekId;
                    
                    return (
                        <div key={unit.weekId}>
                            <h3><b>{week[weekIndex].weekStart}</b> to <b>{week[weekIndex].weekEnd}</b></h3>

                            <br /><br />
                            <div className={styles.gridWrapper}>
                                <EffortUnit data={unit.monday} isActive={isActive}  />
                                <EffortUnit data={unit.tuesday} isActive={isActive}  />
                                <EffortUnit data={unit.wednesday} isActive={isActive}  />
                                <EffortUnit data={unit.thursday} isActive={isActive}  />
                                <EffortUnit data={unit.friday} isActive={isActive}  />
                                <EffortUnit data={unit.saturday} isActive={isActive}  />
                                <EffortUnit data={unit.sunday} isActive={isActive}  />                                
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default EffortList
