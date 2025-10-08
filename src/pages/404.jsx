import { Box, Container, Text, Stack, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { LuArrowLeft } from "react-icons/lu";

const Custom404 = () => {
  const router = useRouter();

  return (
    <Container
      maxW="container.lg"
      height="100vh"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      bg="#fff"
      px={{ base: 10, md: 40 }}
      justifyContent={"center"}
      alignItems="center"
    >
      <Stack gap={6} align={"center"} flex={1} textAlign={"center"}>
        <Box>
          <Text fontSize="lg" color="primary" fontWeight="bold" ml={1} mb={2}>
            404 Not Found
          </Text>
          <Text fontSize="1.2em" color="gray.800" lineHeight="1.8">
            The page you're looking for was not found.
          </Text>
        </Box>

        <Button size="lg" bg="primary" onClick={() => router.push("/")}>
          <LuArrowLeft /> Return to Home
        </Button>
      </Stack>
    </Container>
  );
};

export default Custom404;
