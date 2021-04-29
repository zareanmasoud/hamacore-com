import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/logo.png";

import styles from "assets/jss/hamacore-com/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function PolicyPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Hamrah Mechanic"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/privacy-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={9}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      Privacy Policy - Hamrah Mechanic
                    </h3>
                    <h5>
                      Statement of confidentiality and how to protect the
                      privacy of Hamrah Mechanic Application users
                    </h5>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <h4 className={classes.title}>Privacy Policy</h4>
              <p>
                Hamrah Mechanic is committed to protecting the privacy of all
                site visitors. As a result, this privacy statement is made as
                part of our commitment to your privacy. This privacy statement
                has been prepared on how to use and the usage of your personal
                information in order to perform services on the site, tools and
                mobile application along with Hamrah Mechanic. By accepting the
                Privacy Policy and the User Registration Terms, you expressly
                consent to the collection, storage, use and disclosure of your
                personal information in accordance with what is stated in the
                Privacy Policy.
              </p>
              <p>
                As a user of Hamrah Mechanic App, you can use our App without
                entering any personal information and the App does not collect any data from users.
              </p>
              <h4 className={classes.title}>Disclosure of information</h4>
              <p>
                User information will not be disclosed to any third party or
                entity without their express consent.
              </p>
              <h4 className={classes.title}>
                Information shared with Hamrah mechanic
              </h4>
              <p>
                There is no information that is collected from users or be visible to the public.
              </p>
              <h4 className={classes.title}>Security measures</h4>
              <p>
                We use a variety of security measures to protect your
                information (if there was) from unauthorized access, illegal activity,
                accidental damage, destruction and tampering.
              </p>
              <h4 className={classes.title}>Changes to the Privacy Policy</h4>
              <p>
                Any new changes to our privacy policy will be posted on the App
                and site.
              </p>
              <p>
                All modified items will be implemented automatically as soon as
                they are posted on the App and site, and you have already agreed
                and committed to these policies.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
