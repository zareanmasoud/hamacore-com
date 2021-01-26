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
                entering any personal information. The user who enters the
                information on the App agrees to the transfer and storage of
                this information on the servers of the mechanic.
              </p>
              <p>
                The information that is stored on the Hamrah Mechanic App is:
              </p>
              <ul>
                <li>Email address</li>
                <li>Phone number</li>
                <li>IP address and standard login information</li>
              </ul>
              <h4 className={classes.title}>Disclosure of information</h4>
              <p>
                User information will not be disclosed to any third party or
                entity without their express consent. This information is used
                only to improve Hamrah mechanic services or Hamrah mechanic
                advertisements.
              </p>
              <p>
                You will be responsible for maintaining the password to use the
                profile and other features of the App, so do not share the
                password with anyone.
              </p>
              <p>
                At its sole discretion, your personal information may be used or
                disclosed in response to legal or security requests. Therefore,
                with the knowledge of this section, provide your information to
                this App.
              </p>
              <h4 className={classes.title}>
                Information shared with Hamrah mechanic
              </h4>
              <p>
                Your username is the only information that is visible to the
                public. Contact number and email address are not visible to the
                public in any way.
              </p>
              <h4 className={classes.title}>Security measures</h4>
              <p>
                We use a variety of security measures to protect your
                information from unauthorized access, illegal activity,
                accidental damage, destruction and tampering. You have the right
                to be aware of your information stored and to ask us to make
                changes to it to keep it accurate and up to date.
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
