import React, { Component, useState, Fragment } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Recaptcha from "react-google-invisible-recaptcha";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleName = e => {
    setName(e.target.value);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePhone = e => {
    setPhone(e.target.value);
  };

  const handleMessage = e => {
    setMessage(e.target.value);
  };

  const handleVerified = () => {
    this.recaptcha.execute();
  };

  const onResolved = () => {
    setMessageSent(true);
    console.log("Message Sent");
  };

  let confirmation = messageSent ? <div>Message Sent</div> : null;
  return (
    <MuiThemeProvider>
      <React.Fragment>
          {confirmation}
        <TextField
          hintText="Enter Your Name"
          floatingLabelText="Name"
          onChange={handleName}
        />
        <br />
        <TextField
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleEmail}
        />
        <br />
        <RaisedButton
          label="Send"
          style={StyleSheet.button}
          onClick={handleVerified}
        />
        <Recaptcha
          ref={ref => recaptcha => ref}
          sitekey="6Le4l-UUAAAAAAEYVEhe-iHi3TxGjVBm2VbLln1b"
          onResolved={onResolved}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default ContactForm;
