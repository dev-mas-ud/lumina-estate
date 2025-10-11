import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Avatar,
  Stack,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import { ChevronLeft, ChevronRight, StarFill } from "react-bootstrap-icons";
import { useCallback } from "react";
import Image from "next/image";

export default function Testimonials() {
  const TESTIMONIALS = [
    {
      avatar: "images/client-2.webp",
      imgURL: "/images/location-1.png",
      name: "Ibrahim Bello",
      residence: "Yola, Adamawa",
      comment:
        "Lumina truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    },
    {
      avatar: "images/client-1.webp",
      imgURL: "/images/location-2.png",
      name: "Tunde Balogun",
      residence: "Nasarawa, Kano",
      comment:
        "I had a fantastic experience working with Lumina. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    },
    {
      avatar: "images/client-3.webp",
      imgURL: "/images/location-3.png",
      name: "Chinedu Okafor",
      residence: "Abuja, FCT",
      comment:
        "Lumina made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
    },

    {
      avatar: "images/client-4.webp",
      imgURL: "/images/location-1.png",
      name: "Emeka Adeyemi",
      residence: "Ikeja, Lagos",
      comment:
        "I had an excellent experience with Lumina. Their knowledge and tailored support went beyond my expectations. The process of finding my dream home was fast and seamless. Strongly recommended.",
    },
  ];

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
      id="testimonials"
      bg="baseLight"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      px={{ base: 4, md: 10 }}
    >
      <Container maxW="container.lg" p="0">
        <Stack color="primary" align={"center"}>
          <H2Heading mb={0}>Client Feedback</H2Heading>
          <Text
            mb={12}
            textAlign={"center"}
            w={{ base: "full", md: "70%" }}
            lineHeight={1.7}
          >
            See what our clients have shared about their experiences and the
            results they achieved with us
          </Text>
        </Stack>
        <SimpleGrid px={2} columns={[1, 1, 2, 4]} gap={{ base: 8, md: 10 }}>
          {TESTIMONIALS.map(
            ({ name, avatar, residence, imgURL, comment }, index) => (
              <Box
                key={`review-${index}`}
                bg={"secondary"}
                color="primary"
                p={6}
                rounded="2xl"
                shadow="xl"
                textAlign="center"
                transition="all 0.5s"
                _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  rounded={"xl"}
                  mb={5}
                  width={"full"}
                  maxH={{ base: "160px", md: "110px" }}
                  minHeight={{ base: "160px", md: "110px" }}
                >
                  <Image
                    style={{
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                    priority
                    fill
                    sizes="100%"
                    src={imgURL}
                    alt={residence}
                  />
                </Box>
                <SlideIn>
                  <HStack gap={4} mb={2} align={"center"}>
                    <Avatar.Root
                      width={50}
                      height={50}
                      overflow={"hidden"}
                      rounded={"100"}
                    >
                      <Avatar.Fallback name={name} />
                      <Avatar.Image
                        objectPosition={"top"}
                        objectFit={"cover"}
                        src={avatar}
                        alt={residence}
                      />
                    </Avatar.Root>

                    <Stack>
                      <Heading
                        as="h3"
                        fontWeight={"semibold"}
                        lineHeight={1.2}
                        fontSize="md"
                        textAlign={"left"}
                        truncate
                      >
                        {name}
                      </Heading>
                      <Text
                        lineHeight={1.2}
                        fontSize={".9em"}
                        textAlign={"left"}
                      >
                        {residence}
                      </Text>
                    </Stack>
                  </HStack>
                  <HStack gap={2} mt={5}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarFill color="brown" key={`rate-${i}`} />
                    ))}
                  </HStack>
                  <Text
                    mt={4}
                    fontSize={"1em"}
                    textAlign={"left"}
                    lineHeight={"1.9"}
                    lineClamp={{ md: 7 }}
                  >
                    {comment}
                  </Text>
                </SlideIn>
              </Box>
            )
          )}
        </SimpleGrid>
      </Container>
      <HStack gap={8} align={"center"} justify={"center"} mt={14} w="full">
        <IconButton
          size="lg"
          rounded="full"
          bg="primary"
          aria-label="Previous"
          shadow={"lg"}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          size="lg"
          rounded="full"
          bg="primary"
          aria-label="Next"
          shadow={"lg"}
        >
          <ChevronRight />
        </IconButton>
      </HStack>
    </Box>
  );
}
