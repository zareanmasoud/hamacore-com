/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {Apps, CloudDownload, Help, Policy} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/hamacore-com/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/hamacore-com/#/support"
          color="transparent"
          className={classes.navLink}
        >
          <Help className={classes.icons} /> Support
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/hamacore-com/#/policy"
          color="transparent"
          className={classes.navLink}
        >
          <Policy className={classes.icons} /> Policy
        </Button>
      </ListItem>
    </List>
  );
}
