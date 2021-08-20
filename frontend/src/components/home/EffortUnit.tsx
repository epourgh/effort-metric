import React from 'react'
import styles from '../../styles/_effortList.module.scss';

const EffortUnit = (props) => {
    return (
        <div className={styles.gridBox}>
            {props.data}
        </div>
    )
}

export default EffortUnit
