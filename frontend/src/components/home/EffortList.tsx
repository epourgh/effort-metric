import React from 'react'
import EffortUnit from './effortUnit';
import styles from '../../styles/_effortList.module.scss';

const EffortList = (props) => {

    // YYYY-MM-DD
    const week = [
        { id: 1, weekStart: '2021-08-02', weekEnd: '2021-08-08' },
        { id: 2, weekStart: '2021-08-09', weekEnd: '2021-08-15' },
        { id: 3, weekStart: '2021-08-16', weekEnd: '2021-08-22' }
    ];  

    return (
        <div>
            {
                props.effortUnits?.map( unit => {
                    return (
                        <div key={unit.weekId}>
                            <p><b>{week[unit.weekId - 1].weekStart}</b> to <b>{week[unit.weekId - 1].weekEnd}</b></p>
                            <div className={styles.gridWrapper}>
                                <EffortUnit data={unit.monday} />
                                <EffortUnit data={unit.tuesday} />
                                <EffortUnit data={unit.wednesday} />
                                <EffortUnit data={unit.thursday} />
                                <EffortUnit data={unit.friday} />
                                <EffortUnit data={unit.saturday} />
                                <EffortUnit data={unit.sunday} />                                
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default EffortList
