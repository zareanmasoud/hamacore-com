import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/hamacore-com/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  function handleSubmit() {
    function sendFeedback(serviceId, templateId, variables) {
      window.emailjs
        .send(serviceId, templateId, variables)
        .then((res) => {
          console.log("Email successfully sent!");
          setName("");
          setEmail("");
          setMessage("");
        })
        // Handle errors here however you like, or use a React error boundary
        .catch((err) =>
          console.error(
            "Oh well, you failed. Here some thoughts on the error that occured:",
            err
          )
        );
    }

    const serviceId = "service_r6gpi0q";
    const templateId = "template_c73i8gq";
    sendFeedback(serviceId, templateId, {
      message_html: message,
      from_name: name,
      reply_to: email,
    });
  }

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Get in Touch with Us</h2>
          <h4 className={classes.description}>
            Share all the details. The more we know, the better we can help you.
            We will respond get back to you in a couple of hours.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: name,
                    onChange: function(event) {return handleNameChange(event)},
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: email,
                    onChange: function(event) {return handleEmailChange(event)}
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Your Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  value: message,
                  onChange: function(event) {return handleMessageChange(event)}
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button onClick={handleSubmit} color="primary">
                  Send Message
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
