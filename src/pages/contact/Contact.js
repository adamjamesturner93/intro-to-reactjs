import React, { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  padding: 3% 10%;
  box-shadow: 0 0 20px 0 #333;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputGroup = styled.section`
  display: flex;
  margin: 20px 0;
`;

const InputLabel = styled.label`
  width: 100px;
`;

const InputText = styled.input`
  width: 200px;
  border-color: lightgray;
  border-style: solid;
  border-width: 1px;
`;

const InputTextArea = styled.textarea`
  width: 200px;
  border-color: lightgray;
`;

const SubmitButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 30px;
  border-radius: 3px;
`;

export class Contact extends Component {
  handleFormSubmit = (event) => {
    console.log(event);
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <h1>Get in Touch!</h1>
        <InputGroup>
          <InputLabel htmlFor="name">Name: </InputLabel>
          <InputText name="name" type="text" />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="email">Email: </InputLabel>
          <InputText name="email" type="email" />
        </InputGroup>
        <InputGroup>
          <InputLabel htmlFor="message">Message: </InputLabel>
          <InputTextArea name="message" rows={10} />
        </InputGroup>
        <SubmitButton type="submit">Send Message!</SubmitButton>
      </Form>
    );
  }
}

export default Contact;
