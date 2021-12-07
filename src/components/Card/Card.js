import React from 'react'
import styles from './Card.module.css'
import { IoTrashOutline } from "react-icons/io5";

function Card({ max, min, name, img, onClose,primary}) {
    return (
      <div className={`${styles.card} ${ primary ? styles.primary : ""}`}>
        <div className={styles.name}>
          <div>
            {name}
          </div>
          {primary !== true && <button onClick={onClose} className={styles.btn}><IoTrashOutline/></button>}
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="incono de clima"
          />
        </div>
        <div className={styles.temp}>
          <div>max</div>
          <div>{max}°</div>
        </div>
        <div className={styles.temp}>
          <div> min </div>
          <div> {min}° </div>
        </div>
      </div>
    );
}

export default Card
