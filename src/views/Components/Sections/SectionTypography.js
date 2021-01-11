import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import image0 from "assets/img/shreenshots/screenshot0.png";
import image1 from "assets/img/shreenshots/screenshot1.png";
import image2 from "assets/img/shreenshots/screenshot2.png";
import image3 from "assets/img/shreenshots/screenshot3.png";

import styles from "assets/jss/hamacore-com/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
            <div className={classes.typo}>
              <h2 className={classes.title}>A selection of screens</h2>
            </div>
            </GridItem>
          </GridContainer>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={6} sm={3} className={classes.marginLeft}>
              <img
                src={image0}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
            </GridItem>
              <GridItem xs={6} sm={3} className={classes.marginLeft}>
                  <img
                      src={image1}
                      alt="..."
                      className={
                          classes.imgRaised +
                          " " +
                          classes.imgRounded +
                          " " +
                          classes.imgFluid
                      }
                  />
              </GridItem>
              <GridItem xs={6} sm={3} className={classes.marginLeft}>
                  <img
                      src={image2}
                      alt="..."
                      className={
                          classes.imgRaised +
                          " " +
                          classes.imgRounded +
                          " " +
                          classes.imgFluid
                      }
                  />
              </GridItem>
              <GridItem xs={6} sm={3} className={classes.marginLeft}>
                  <img
                      src={image3}
                      alt="..."
                      className={
                          classes.imgRaised +
                          " " +
                          classes.imgRounded +
                          " " +
                          classes.imgFluid
                      }
                  />
              </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
