import { containerFluid } from "assets/jss/hamacore-com.js";

import imagesStyle from "assets/jss/hamacore-com/imagesStyles.js";

const exampleStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...containerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
  link: {
    textDecoration: "none"
  }
};

export default exampleStyle;
