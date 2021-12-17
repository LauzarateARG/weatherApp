import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./CardContain.module.css";
import { getCurrentCity,getCities } from "../../actions";

function CardContain() {
  const dispath = useDispatch();
  const currentCity = useSelector(( state ) => state.currentCiy);
  const cities = useSelector(( state ) => state.cities)

  const onSearch = (city) => {
    let rep = false

    rep = cities?.map(m=>{
      if(m.name===currentCity.name) return true
      return false
    })

    if(!currentCity.name|| rep === true){
      dispath(getCurrentCity(city)); 
    }
    else{
      dispath(getCities(currentCity))
      dispath(getCurrentCity(city))
    }
  };


  return (
    <div className={styles.app}>
      <div className={styles.bkg}></div>

      <div className={styles.container}>

          <SearchBar onSearch={onSearch} />
           { currentCity.name &&
            <Card
              primary={true}
              max={currentCity.main.temp_max}
              min={currentCity.main.temp_min}
              name={currentCity.name}
              img={currentCity.weather[0].icon}
              onClose={() => alert(currentCity.name)}
            /> }
          
        <div className={styles.bottom}>
          {cities?.map((c)=>{
            return(
              <Card
              max={c.main.temp_max}
              min={c.main.temp_min}
              name={c.name}
              img={c.weather[0].icon}
              onClose={() => alert(c.name)}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default CardContain;
