import React from 'react'
import styles from "@assets/components/HeaderWorkout/HeaderWorkout.module.scss"
const HeaderWorkout = () => {
  return (
    <header>
      <div className="container">
        <div  className={styles.Header__content}>
            <div  className={styles.Header__logo}>
                <h2>AthleteXpert.Ai</h2>
            </div>
            <div  className={styles.Header__result}></div>
        </div>
      </div>
    </header>
  )
}

export default HeaderWorkout
