import React, { Component } from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Form from "../components/Form";
import Main from "../components/Main";
import Page from "../components/Page";
import Submit from "../components/Submit";
import TextInput from "../components/TextInput";
import Title from "../components/Title";

class FormikExample extends Component {
  state = {
    email: "",
    name: ""
  };

  onSubmit = event => {
    event.preventDefault();
    window.alert(JSON.stringify(this.state, null, 2));
  };

  handleChange = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };

  render() {
    return (
      <Page title="Formik example">
        <Breadcrumbs
          items={[
            {
              text: "Home",
              href: "/"
            }
          ]}
        />
        <Main>
          <Title>Formik example</Title>
          <Form onSubmit={this.onSubmit} action="#">
            <TextInput
              hint="So that we can put your name on the certificate."
              id="name"
              label="Name"
              value={this.state.name}
              onChange={this.handleChange}
              size={48}
            />
            <TextInput
              hint="So that we can send you the certificate."
              id="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange}
              size={48}
            />
            <Submit text="Show me the email" />
          </Form>
        </Main>
      </Page>
    );
  }
}

export default FormikExample;
