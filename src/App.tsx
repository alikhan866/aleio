import React, { useEffect } from "react";
import classes from "./App.module.css";
import House from "./components/House";
import axios from "axios";
import data from "./data/data.json";
import { useAppDispatch } from "./app/hooks";
import { toggleNav } from "./features/navAction/navSlice";
import Navbar from "./layout/Navbar";

function App() {
  const dispatch = useAppDispatch();
  return (
    <div className={classes.App}>
      <div className={classes.mainContainer}>
        <Navbar />
        <div className={classes.headingContainer}>
          <span>We are an award winning interior design Agency</span>
          <div className={classes.buttonContainer}>
            <button>
              View all properties <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
        <div className={classes.imagesMainContainer}>
          {data.map((house, i) => {
            return (
              <div className={classes.imagesContainer}>
                <House
                  key={house.houseImage}
                  housePrice={house.housePrice}
                  houseName={house.houseName}
                  image={`${house.houseImage}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
