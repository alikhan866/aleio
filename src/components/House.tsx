import React from "react";
import classes from "./House.module.css";
import { useWindowSize } from "../customHooks/hooks";

interface HouseProps {
  image: string;
  housePrice: string;
  houseName: string;
}

const House = ({ image, housePrice, houseName }: HouseProps) => {
  const [width, height] = useWindowSize();
  return (
    <div className={classes.container}>
      <img src={image} className={classes.img} />
      <div className={classes.price}>{housePrice}</div>
      <div className={classes.name}>{houseName}</div>
      <i className={`${classes.icon} fa-regular fa-heart`}></i>
      {width < 765 ? (
        <div className={classes.buttonContainer}>
          <button>View Details +</button>
        </div>
      ) : null}
    </div>
  );
};

export default House;
