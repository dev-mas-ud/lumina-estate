import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Button } from "@/components/Button";
import { LuArrowLeft } from "react-icons/lu";

const Custom404 = () => {
  const router = useRouter();

  return (
    <Container
      maxW="container.lg"
      height="100vh"
      display="flex"
      flexDirection={{ base: "column-reverse", md: "row" }}
      bg="baseLight"
      px={{ base: 10, md: 40 }}
      justifyContent={"center"}
      alignItems="center"
    >
      <Stack
        gap={6}
        align={{ base: "center", md: "flex-start" }}
        flex={1}
        textAlign={{ base: "center", md: "left" }}
      >
        <Box>
          <Text fontSize="lg" color="primary" fontWeight="bold" ml={1} mb={2}>
            404 | Page Not Found
          </Text>
          <Heading
            as="h1"
            size={{ base: "5xl", md: "6xl" }}
            mb={4}
            color="secondary"
          >
            Lost in Space?
          </Heading>
          <Text fontSize="1.2em" color="gray.800" lineHeight="1.8">
            You've reached the edge of the universe. The page you requested was
            not found.
          </Text>
        </Box>

        <Button size="lg" variant="solid" onClick={() => router.push("/")}>
          <LuArrowLeft /> Return to Home
        </Button>
      </Stack>

      <Box
        flex={1}
        position="relative"
        width="100%"
        height={{ base: "300px", md: "400px" }}
      >
        <Image
          src="/images/astronaut.svg"
          alt="Astronaut floating in space"
          fill
          style={{
            objectFit: "contain",
            animation: "float 6s ease-in-out infinite",
            filter: "grayscale(100%)",
          }}
          priority
        />
      </Box>
    </Container>
  );
};

export default Custom404;
