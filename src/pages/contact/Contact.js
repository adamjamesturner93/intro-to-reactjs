import React, { Component } from "react";
import {
  InputGroup,
  InputLabel,
  InputTextArea,
  Form,
  InputText,
  SubmitButton,
} from "./Contact.styles";

export class Contact extends Component {
  state = { name: "", email: "", message: "" };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;

    return (
      <Form onSubmit={this.handleFormSubmit}>
        <h1>Get in Touch!</h1>
        <InputGroup>
          <InputLabel htmlFor="name">Name: </InputLabel>
          <InputText
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="email">Email: </InputLabel>
          <InputText
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="message">Message: </InputLabel>
          <InputTextArea
            name="message"
            rows={10}
            value={message}
            onChange={this.handleChange}
          />
        </InputGroup>
        <SubmitButton type="submit">Send Message!</SubmitButton>
      </Form>
    );
  }
}

export default Contact;
