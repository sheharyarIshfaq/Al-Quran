import React from "react";
import { useHistory } from "react-router";
import classes from "./Item.module.css";

const Item = (props) => {
  const history = useHistory();

  const surahPageHandler = () => {
    history.push(`/surah/${props.number}`);
  };

  return (
    <div className={classes.container} onClick={surahPageHandler}>
      <div className={classes.left}>
        <div className={classes.number}>
          <span>{props.number}</span>
        </div>
        <div className={classes.info}>
          <h2>{props.englishName}</h2>
          <p>{props.englishNameTranslation}</p>
        </div>
      </div>
      <div className={classes.right}>
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default Item;
