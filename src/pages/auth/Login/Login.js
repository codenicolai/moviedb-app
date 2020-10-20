import React, { useCallback, useMemo } from "react";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { Flex } from "components/Flex";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Navbar } from "components/Navbar";
import { setUser } from "providers/auth";

export const Login = () => {
  const validationSchema = useMemo(() => {
    return Yup.object({
      username: Yup.string().required("Campo obrigatório"),
      password: Yup.string().required("Campo obrigatório"),
    });
  }, []);

  const onLogin = useCallback((values) => {
    setUser(values);
    window.location.reload();
  }, []);

  return (
    <>
      <Navbar navigation={false} />
      <Flex pt={56} maxWidth="100vw" flex={1}>
        <Formik
          onSubmit={onLogin}
          initialValues={{}}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form style={{ width: "100%" }} noValidate>
              <Flex
                mt="60px"
                flex={1}
                width={1}
                px={{ _: 3, mobile: 5, desktop: 0 }}
                py={10}
                overflow="hidden"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text
                  fontWeight="regular"
                  textTransform="uppercase"
                  fontSize="xlarge"
                >
                  User area
                </Text>
                <Flex mt="60px" flexDirection="column">
                  <Text
                    mb={5}
                    fontWeight="regular"
                    fontSize="medium"
                    textTransform="uppercase"
                  >
                    username
                  </Text>
                  <Field name="username">
                    {({ field, form }) => {
                      return (
                        <>
                          <Input type="text" {...field} />
                          <Text fontSize="xsmall" color="red">
                            {form?.errors[field.name]}
                          </Text>
                        </>
                      );
                    }}
                  </Field>
                  <Text
                    mt={10}
                    mb={5}
                    fontWeight="regular"
                    fontSize="medium"
                    textTransform="uppercase"
                  >
                    password
                  </Text>

                  <Field name="password">
                    {({ field, form }) => {
                      return (
                        <>
                          <Input type="password" {...field} />
                          <Text fontSize="xsmall" color="red">
                            {form?.errors[field.name]}
                          </Text>
                        </>
                      );
                    }}
                  </Field>

                  <Button
                    loading={isSubmitting}
                    onClick={handleSubmit}
                    mt={11}
                    buttonColor="blue"
                    py={10}
                  >
                    LOGIN
                  </Button>
                </Flex>
              </Flex>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
};
