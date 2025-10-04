import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { Button } from "@/components/Button";
import H2Heading from "./H2Heading";
import { Whatsapp } from "react-bootstrap-icons";
import ContackForm from "@/components/ContactForm";
import HeadingMarker from "./HeadingMarker";
import { FaPhone } from "react-icons/fa";

export default function CTASection() {
  return (
    <Box
      id="contact"
      bg="primary"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      px={{ base: 6, md: 10 }}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        w="full"
        alignItems={"center"}
        justifyContent="space-between"
      >
        <Container p={0}>
          <Stack>
            <Box>
              <HeadingMarker
                markerbg="secondary"
                color="secondary"
                text="Available for Work"
              />
              <H2Heading px={{ base: 2, md: 0 }} mb={2}>
                Let's Build Your Website Today 👋
              </H2Heading>
            </Box>
          </Stack>
          <Text
            fontSize={{ base: "md", md: "md" }}
            color={"neutralDark"}
            mb={{ base: 4, md: 6 }}
            px={{ base: 3, md: 0 }}
            lineHeight="1.8"
          >
            Reach out anytime, and I'll get back to you shortly.
          </Text>
          <Stack
            gap={{ base: 5, md: 10 }}
            wrap={"wrap"}
            direction={{ base: "column", md: "row" }}
          >
            <Button
              bg="neutralDark"
              color="primary"
              as="a"
              textDecoration="none"
              href="https://wa.me/message/43ZJUJZP7IJFE1?message=Hello there! I'm contacting from your website."
              size="xl"
              variant={"solid"}
              width={{ base: "100%", md: "auto" }}
            >
              <Whatsapp /> Reach Out via WhatsApp
            </Button>
            <Button
              as="a"
              textDecoration="none"
              href="tel:+2347065656558"
              variant="solid"
              width={{ base: "100%", md: "auto" }}
              size="xl"
              bg="transparent"
              color="neutralDark"
              borderColor="#000"
            >
              <FaPhone /> +234 706 565 6558
            </Button>
          </Stack>
        </Container>
        <ContackForm />
      </Box>
    </Box>
  );
}
