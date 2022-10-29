import React, { useEffect } from "react";
import classes from "./Navbar.module.css";
import logo from "../assets/img/logo.png";
import { useWindowSize } from "../customHooks/hooks";
import navmenu from "../assets/img/navmenu.png";
import cross from "../assets/img/cross.png";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleNav } from "../features/navAction/navSlice";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Navbar = () => {
  const [width, height] = useWindowSize();
  const dispatch = useAppDispatch();
  const isSlidingPaneOpen = useAppSelector((state) => state.navigation.isOpen);

  return (
    <div className={classes.mainContainer}>
      {width > 765 && (
        <>
          <div className={classes.navLeftContainer}>
            <img width={200} height={50} src={logo} />
            <a>About Us</a>
            <a>Projects</a>
            <a>Career</a>
            <a>Contacts</a>
          </div>
          <div className={classes.navRightContainer}>
            <a>En</a>
          </div>
        </>
      )}
      {width <= 764 && (
        <div className={classes.mobileNavContainer}>
          <img width={200} height={50} src={logo} />
          <div>
            <img src={navmenu} onClick={() => dispatch(toggleNav())} />
          </div>
        </div>
      )}
      <SlidingPane
        className="some-custom-class"
        isOpen={isSlidingPaneOpen}
        title={
          <div className={classes.paneHeaderContainer}>
            <img width={200} height={50} src={logo} />
            <div className={classes.paneHeader}>
              <img src={cross} onClick={() => dispatch(toggleNav())} />
            </div>
          </div>
        }
        onRequestClose={() => dispatch(toggleNav())}
        width="100%"
      >
        <div className={classes.slidingPaneMainContainer}>
          <div className={classes.topContainer}>
            <a>About</a>
            <a>Projects</a>
            <a>Career</a>
            <a>Contact</a>
          </div>
          <div className={classes.bottomContainer}>
            <span>En</span> | <span>Fr</span>
          </div>
        </div>
      </SlidingPane>
      {/* <div>{width}</div> */}
    </div>
  );
};

export default Navbar;
