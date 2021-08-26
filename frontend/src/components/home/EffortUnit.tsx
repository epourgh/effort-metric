import React, { useState } from 'react'
import styles from '../../styles/_effortList.module.scss';

const EffortUnit = (props) => {

    let [ userValue, setUserValue ] = useState(props.data);

    return (
        <div className={styles.gridBox}>
            <div className={styles.cont} data-pct={props.data}>
                <svg className={`${styles.scalableVector}`}  width="100" height="100">
                    {/* (((100-value)/100)*(MATH.PI*r^2)) + 379 */}
                    <circle className={`${styles.circle} ${styles.back}`} r="30" cx="50" cy="50" fill="transparent" stroke-dasharray="200" stroke-dashoffset="0"></circle>
                    <circle  className={`${styles.circle} ${styles.bar}`} r="30" cx="50" cy="50" fill="transparent" stroke-dasharray="200" stroke-dashoffset={(((100 - userValue)/100)*(Math.PI*50^2)) + 42}></circle>
                </svg>
            </div>
            { (props.isActive) ? <input className={styles.userInput} value={userValue} onChange={e => setUserValue(e.target.value)} type="text" /> : <>d</> }
        </div>
    )
}

export default EffortUnit
