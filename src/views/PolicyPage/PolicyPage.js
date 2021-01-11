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
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Privacy Policy</h3>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus luctus et augue vitae elementum. Aliquam porta neque a
                varius ornare. Praesent pretium lorem et urna luctus, et posuere
                ligula porttitor. Nunc nec turpis nunc. Pellentesque habitant
                morbi tristique senectus et netus et malesuada fames ac turpis
                egestas. Nunc facilisis sodales velit, varius convallis ipsum
                consectetur posuere. Nam molestie lectus eget lobortis pulvinar.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Fusce vitae elit diam. Morbi non luctus
                neque. Duis et turpis ac ex varius faucibus ut at est. Proin
                ullamcorper pharetra felis, eu gravida mi sagittis sed. Proin
                finibus eleifend pretium. Vestibulum malesuada diam at malesuada
                imperdiet. Aenean vel lorem vitae erat pharetra consequat.
                Mauris tincidunt justo nec dolor rutrum, in tincidunt neque
                congue. Pellentesque nec ultrices enim, eget lobortis justo. Sed
                semper eros a fermentum ultricies. Integer sed velit tempus,
                ullamcorper arcu ac, consequat orci. Vestibulum imperdiet in
                erat nec feugiat. Nulla suscipit magna metus, nec cursus lectus
                interdum vehicula. Cras dignissim ipsum id risus pulvinar, sed
                elementum enim semper. Etiam nec neque ac felis convallis
                feugiat nec ac eros. Duis in gravida dui. Morbi faucibus
                accumsan magna commodo gravida. Suspendisse vel ipsum id nunc
                tristique viverra vitae nec magna. Nunc est nisl, accumsan vel
                vestibulum eget, imperdiet sed felis. In convallis viverra nisi,
                at consequat felis feugiat eu. Donec varius pulvinar erat, vitae
                cursus nisi convallis porta. Duis placerat orci mattis nulla
                aliquet maximus. Morbi non ligula aliquam, eleifend sapien sed,
                volutpat turpis. Mauris mollis ipsum ipsum, vitae commodo neque
                euismod non. Phasellus metus nibh, volutpat eget auctor in,
                laoreet eget leo. Fusce vitae lectus sit amet eros ullamcorper
                varius. Quisque eget purus sem. Proin vehicula nisl vitae arcu
                feugiat hendrerit molestie id tellus. Pellentesque faucibus
                egestas tempor. Vivamus convallis nunc et eleifend mattis.
                Pellentesque vel orci eros. Duis id enim id massa varius
                posuere. Sed tempor mollis enim eu euismod. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Praesent et luctus nulla. Vivamus nibh neque, vulputate ac
                tincidunt a, lobortis eget neque. Integer vehicula, velit vel
                venenatis dapibus, sapien neque eleifend augue, quis euismod
                quam nisi at leo. Nunc nec velit auctor, mattis dolor vel,
                commodo augue. Suspendisse potenti. Morbi sed tellus cursus,
                iaculis lorem in, vestibulum arcu. Pellentesque id neque risus.
                In sapien magna, sagittis id sollicitudin at, vestibulum in ex.
                Nullam ornare sapien ac sem porta, et sollicitudin mauris
                feugiat. Donec interdum varius diam, a laoreet mi rhoncus quis.
                In eu rutrum nisi, eu commodo magna. Integer tincidunt velit
                neque, at imperdiet libero faucibus at. Pellentesque sit amet
                quam et purus gravida congue vel eget purus. Nunc tristique
                porta tempus. Nam in hendrerit ipsum, vel laoreet nibh.
                Pellentesque porta nunc at finibus sodales. Cras posuere maximus
                odio, et rhoncus ligula euismod eget. Pellentesque mattis
                egestas purus eget imperdiet. Duis dignissim arcu non arcu
                pulvinar hendrerit nec vel nunc. Suspendisse potenti. Sed
                malesuada, arcu at congue blandit, ante lorem tincidunt purus,
                ac viverra magna massa eget dui. Nullam in venenatis quam. Ut
                imperdiet justo a felis ultrices ultricies. Cras vel magna
                volutpat, ullamcorper justo ac, pellentesque lectus. Curabitur
                malesuada, velit nec venenatis varius, ex mauris congue eros, eu
                auctor nulla ante vitae augue. Sed auctor auctor diam, quis
                volutpat tellus venenatis ac. Aenean erat tortor, laoreet id
                rutrum eget, tempus sodales odio. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris suscipit consequat felis,
                aliquet dignissim nisl varius sit amet. Nam sed sapien pretium
                felis lacinia pellentesque id et enim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
