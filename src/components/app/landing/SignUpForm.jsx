import {
  Alert,
  Button,
  Center,
  CloseButton,
  Dialog,
  Field,
  Input,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const handeleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name) {
      setErr("All input fields are required");
      return;
    }
    setErr("Sign up was not successful.");
    return;
  };

  return (
    <Dialog.Root placement={"center"} size="sm">
      <Dialog.Trigger asChild>
        <Button size={"sm"} bg="primary">
          Sign Up
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title fontSize={"2xl"}>Sign Up</Dialog.Title>
            </Dialog.Header>

            {err && (
              <Center my={2}>
                <Alert.Root w="90%" status="error" title={err}>
                  <Alert.Indicator />
                  <Alert.Title>{err}</Alert.Title>
                </Alert.Root>
              </Center>
            )}

            <Dialog.Body
              gap={5}
              as={"form"}
              display={"flex"}
              flexDirection={"column"}
              onSubmit={handleSubmit}
            >
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input
                  onChange={handeleChange}
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>

              <Field.Root>
                <Field.Label>Email</Field.Label>
                <Input
                  onChange={handeleChange}
                  name="email"
                  placeholder="Email address"
                />
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>

              <Field.Root>
                <Field.Label>Phone Number</Field.Label>
                <Input
                  onChange={handeleChange}
                  name="phone"
                  type="number"
                  placeholder="Phone number"
                />
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>

              <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input
                  name="password"
                  type="password"
                  placeholder="New Password"
                />
                <Field.ErrorText>This field is required</Field.ErrorText>
              </Field.Root>
              <Button w="full" type="submit" bg="primary">
                Create Account
              </Button>
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default SignUpForm;
