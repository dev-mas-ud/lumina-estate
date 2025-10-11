import {
  Box,
  Container,
  Text,
  Stack,
  HStack,
  Button,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import { Chat, Envelope, QuestionCircle, Send } from "react-bootstrap-icons";

export default function Newsletter() {
  return (
    <Box
      id="newsletter"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      px={{ base: 8, md: 10 }}
    >
      <Container maxW="container.lg" p="0">
        <Stack color="primary" align={"center"}>
          <H2Heading mb={0} textAlign="center">
            Do You Have Any Questions? Get Help From Us
          </H2Heading>
          <HStack
            mb={12}
            gap={8}
            w={{ base: "full", md: "70%" }}
            align={"center"}
            justify={"center"}
          >
            <HStack cursor={"pointer"}>
              <Chat /> <Text lineHeight={1.7}>Chat with Us</Text>
            </HStack>
            <HStack cursor={"pointer"}>
              <QuestionCircle /> <Text lineHeight={1.7}>Browse our FAQs</Text>
            </HStack>
          </HStack>
        </Stack>
      </Container>
      <HStack gap={5} align={"center"} justify={"center"} mt={2} w="full">
        <InputGroup w="20rem" startElement={<Envelope />}>
          <Input type="email" size="lg" placeholder="Enter your email adress" />
        </InputGroup>
        <Button bg="primary" size="md">
          <Send /> Submit
        </Button>
      </HStack>
    </Box>
  );
}
