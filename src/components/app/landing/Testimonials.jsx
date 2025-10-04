import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Avatar,
  Stack,
  HStack,
} from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import HeadingMarker from "./HeadingMarker";
import { StarFill } from "react-bootstrap-icons";
import { useCallback } from "react";

export default function Testimonials() {
  const TESTIMONIALS = [
    {
      avatar: "images/dentist-portrait.webp",
      name: "Dr. Emily Carter",
      business: "Owner, BrightSmile",

      comment:
        "Our new website doubled our appointment bookings within weeks — clean design and easy booking for patients.",
    },
    {
      avatar: "images/event-planner-agent.webp",
      name: "Ahmed Bashir",
      business: "Event Planner",

      comment:
        "They redesigned my website beautifully — inquiries and event bookings jumped almost immediately after launch!",
    },

    {
      avatar: "images/salon-owner.webp",
      name: "Grace Oko",
      business: "Owner, Glow Salon",

      comment:
        "They created a stylish, mobile-friendly website for my salon — clients now book appointments faster and easier than ever.",
    },

    {
      avatar: "images/restaurant-owner.webp",
      name: "Sofia Adeniyi",
      business: "Restaurant Owner",

      comment:
        "My restaurant's online orders doubled after they designed our website with an easy-to-use menu and order form.",
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
        <Stack align={"center"} px={3}>
          <Box>
            <HeadingMarker text="testimonials" />
            <H2Heading>What Clients Say</H2Heading>
          </Box>
        </Stack>
        <SimpleGrid px={2} columns={[1, 1, 2, 4]} gap={{ base: 8, md: 10 }}>
          {TESTIMONIALS.map(({ name, avatar, business, comment }, index) => (
            <Box
              key={`review-${index}`}
              bg={"secondary"}
              color="baseLight"
              p={6}
              rounded="3xl"
              shadow="xl"
              textAlign="center"
              transition="all 0.5s"
              _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <SlideIn>
                <HStack gap={4} mb={2} align={"center"}>
                  <Avatar.Root
                    width={50}
                    height={50}
                    p={1}
                    overflow={"hidden"}
                    rounded={"100"}
                    bgGradient="to-r"
                    gradientFrom="#08CB00"
                    gradientTo="blue.200"
                  >
                    <Avatar.Fallback name={name} />
                    <Avatar.Image
                      objectPosition={"top"}
                      objectFit={"cover"}
                      src={avatar}
                      alt={business}
                    />
                  </Avatar.Root>

                  <Stack>
                    <Heading
                      as="h3"
                      fontWeight={"normal"}
                      lineHeight={1.2}
                      fontSize="md"
                      textAlign={"left"}
                      truncate
                    >
                      {name}
                    </Heading>

                    <Text
                      color={"#d7d7d7"}
                      lineHeight={1.2}
                      fontSize={".9em"}
                      textAlign={"left"}
                    >
                      {business}
                    </Text>
                  </Stack>
                </HStack>
                <HStack gap={2} mt={5}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarFill color="gold" key={`rate-${i}`} />
                  ))}
                </HStack>
                <Text
                  mt={4}
                  fontSize={"1em"}
                  color="#d7d7d7"
                  textAlign={"left"}
                  lineHeight={"1.9"}
                  lineClamp={{ md: 7 }}
                >
                  {comment}
                </Text>
              </SlideIn>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
