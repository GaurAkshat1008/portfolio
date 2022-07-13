import { Box, Button, Flex, useToast, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useRef } from "react";
import useOnScreen from "../utils/useOnScreen";
import { Header } from "./Header";
import { InputField } from "./InputField";

export const Contact: React.FC<{}> = ({}) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const toast = useToast();
  const toastIdRef = React.useRef() as React.MutableRefObject<string | number>;
  function addToast() {
    toastIdRef.current = toast({
      description: "Message Sent Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "bottom",
      containerStyle: {
        height: "10vh",
        fontSize: "1rem",
      },
    });
  }
  return (
    <Box w={"100vw"} h="100vh">
      <Header>Contact Me</Header>
      <Box ref={ref}></Box>
      {isVisible && (
        // <VStack w={'70%'}>
        <Flex justifyContent={"center"} width="100%">
          <Formik 
            initialValues={{ email: "", message: "", name: "", subject: "" }}
            onSubmit={(values, { setSubmitting }) => {
              // console.log("clicked")
              fetch("/api/contact", {
                method: "POST",
                headers: {
                  Accept: "application/json, text/plain, */*",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }).then((res) => {
                values.email = "";
                values.message = "";
                values.name = "";
                values.subject = "";
                console.log(res.status);
                setTimeout(() => {
                  setSubmitting(false);
                  addToast();
                }, 500);
              });
              return;
            }}
          >
            {(props) => (
              <Flex width={"50%"} justifyContent="center" alignItems={"center"}>
                <Form>
                  <InputField
                    name="email"
                    placeholder="Enter email"
                    label="Email"
                    required
                  />
                  <InputField
                    name="name"
                    placeholder="Enter name"
                    label="Name"
                    required
                  />
                  <InputField
                    name="subject"
                    placeholder="Enter subject"
                    label="Subject"
                    required
                  />
                  <InputField
                    name="message"
                    placeholder="Enter message"
                    label="Message"
                    textarea
                    required
                  />
                  <Button
                    mt={4}
                    ml={"auto"}
                    width={"100%"}
                    colorScheme="teal"
                    disabled={props.isSubmitting}
                    type="submit"
                  >
                    Send Mail
                  </Button>
                </Form>
              </Flex>
            )}
          </Formik>
        </Flex>
        // </VStack>
      )}
    </Box>
  );
};
