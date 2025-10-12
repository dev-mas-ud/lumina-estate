import {
  Box,
  Button,
  Card,
  HStack,
  SimpleGrid,
  Span,
  Stack,
  Text,
} from "@chakra-ui/react";
import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import Image from "next/image";
import { GeoAltFill } from "react-bootstrap-icons";

export default function FeaturedProperties() {
  const features = [
    {
      imgURL: "/images/featured-1.png",
      room: 4,
      sq: "1,300",
      price: "4,000,000",
      title: "Abuja, FCT",
    },
    {
      imgURL: "/images/featured-2.png",
      room: 3,
      sq: "850",
      price: "3,300,000",
      title: "Ilorin, Kwara",
    },
    {
      imgURL: "/images/featured-3.png",
      room: 6,
      sq: "3,300",
      price: "8,500,000",
      title: "Damaturu, Yobe",
    },
    {
      imgURL: "/images/featured-1.png",
      room: 2,
      sq: "1,000",
      price: "3,700,000",
      title: "Yola, Adamawa",
    },
  ];

  return (
    <Box
      id="services"
      px={{ base: 3, md: 8, lg: 16 }}
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
    >
      <Stack align={"center"} px={4}>
        <Stack color="primary" align={"center"}>
          <H2Heading mb={0}>Featured Properties</H2Heading>
          <Text
            mb={12}
            textAlign={"center"}
            w={{ base: "full", md: "70%" }}
            lineHeight={1.7}
          >
            Discover our featured properties, thoughtfully curated to showcase
            the finest homes where comfort, design, and lifestyle come together
          </Text>
        </Stack>
      </Stack>
      <SimpleGrid columns={[1, 2, 2, 4]} gap={8} px={4}>
        {features.map(({ imgURL, title, room, sq, price }, index) => (
          <SlideIn key={`WhyUs-${index}`}>
            <Card.Root
              bg="secondary"
              w={{ md: "full", lg: "95%" }}
              transition="all 0.4s"
              _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
              rounded="2xl"
              overflow={"hidden"}
              border={"none"}
              color="primary"
            >
              <Card.Body
                gap={0}
                p={0}
                justifyContent={"flex-start"}
                alignItems={"left"}
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  width={"full"}
                  maxH="200px"
                  minHeight="200px"
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
                    alt={title}
                  />
                </Box>
                <Stack px={4} pb={4} gap={2}>
                  <Card.Title
                    mt={3}
                    display={"flex"}
                    alignItems={"center"}
                    gap={2}
                    fontSize={"1em"}
                    textAlign={"left"}
                  >
                    <GeoAltFill />
                    {title}
                  </Card.Title>
                  <HStack px={1} fontSize={"sm"} justify={"space-between"}>
                    <Span>{`${room} Rooms`}</Span>
                    <Span>{`${sq} Sq Ft`}</Span>
                  </HStack>

                  <HStack px={1} justify={"space-between"}>
                    <Span fontWeight={"bold"}>{`₦${price}`}</Span>
                    <Button size="xs" bg="primary">
                      Buy Now
                    </Button>
                  </HStack>
                </Stack>
              </Card.Body>
            </Card.Root>
          </SlideIn>
        ))}
      </SimpleGrid>
    </Box>
  );
}
