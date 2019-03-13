import { Formik } from "formik";
import React, { Component } from "react";

import Breadcrumbs from "../components/Breadcrumbs";
import Form from "../components/Form";
import Main from "../components/Main";
import Page from "../components/Page";
import Submit from "../components/Submit";
import TextInput from "../components/TextInput";
import Title from "../components/Title";

class FormikExample extends Component {
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
          <Formik
            initialValues={{ email: "", name: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit} action="#">
                <TextInput
                  hint="So that we can put your name on the certificate."
                  id="name"
                  label="Name"
                  value={values.name}
                  onChange={handleChange}
                  size={48}
                />
                <TextInput
                  hint="So that we can send you the certificate."
                  id="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  size={48}
                />
                <Submit text="Show me the email" />
              </Form>
            )}
          </Formik>
        </Main>
      </Page>
    );
  }
}

export default FormikExample;
