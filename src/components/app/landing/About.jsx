import { Box, Flex, HStack, Stack, Stat, Text } from "@chakra-ui/react";
import Image from "next/image";
import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import { useCallback, useState } from "react";
import { Github, Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";

export default function About() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleTouchStart = useCallback((e) => {
    const target = e.currentTarget;
    target.classList.add("translate-y");
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const target = e.currentTarget;
    target.classList.remove("translate-y");
  }, []);

  return (
    <Box
      id="about"
      as="section"
      py={{ base: 16, md: 14 }}
      pt={{ base: 4, md: 14 }}
      px={{ base: 7, md: 32 }}
      position="relative"
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        mx="auto"
        gap={{ base: 14, md: 14 }}
      >
        <Box
          bg="baseLight"
          p={2}
          overflow={"hidden"}
          w={{ base: "100%", md: "40%" }}
          maxW={{ base: "100%", md: "40%" }}
          rounded="2xl"
          transition="all 0.5s"
          _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <SlideIn
            isImage={true}
            isLoaded={isImageLoaded}
            flex={{ base: "unset", md: "1" }}
            position="relative"
            rounded="xl"
            overflow="hidden"
            h={"300px"}
          >
            <Image
              src="/images/about-img.webp"
              alt="Affordable, modern, and mobile-friendly web design in Nigeria by ByteDesign — helping businesses grow online with fast websites and custom web apps."
              fill
              priority
              sizes="(max-width: 768px) 100vw, 
           (max-width: 1280px) 50vw, 
           33vw"
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "12px",
              }}
              onLoad={() => setIsImageLoaded(true)}
            />
          </SlideIn>
        </Box>
        <Stack flex="1" px={{ base: 2, md: 0 }} gap={{ base: 6, md: 8 }}>
          <H2Heading mb={0}>
            We Help You Discover and Secure Your Perfect Dream Home
          </H2Heading>
          <Text fontSize="md" lineHeight={1.7} color="neutralDark">
            From cozy cottages to luxurious estates across Nigeria, our
            dedicated team guides you through every step of the journey, making
            it simple, seamless, and certain that your dream home becomes a
            reality.
          </Text>
          <HStack gap={10} color="primary">
            <Stat.Root>
              <Stat.ValueText>6K+</Stat.ValueText>
              <Stat.Label>Houses Available</Stat.Label>
            </Stat.Root>
            <Stat.Root>
              <Stat.ValueText>4K+</Stat.ValueText>
              <Stat.Label>Houses Sold</Stat.Label>
            </Stat.Root>
            <Stat.Root>
              <Stat.ValueText>1K+</Stat.ValueText>
              <Stat.Label>Trusted Agents</Stat.Label>
            </Stat.Root>
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
}
