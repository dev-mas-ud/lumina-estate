import { Box, Heading, SimpleGrid, Text, Flex, Stack } from "@chakra-ui/react";
import { FaCode, FaSearch, FaWrench } from "react-icons/fa";
import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import { FaCartShopping } from "react-icons/fa6";
import HeadingMarker from "./HeadingMarker";
import { useCallback } from "react";

const services = [
  {
    title: "Custom Website Design & Development",
    description:
      "Building modern, responsive websites from scratch or redesigning existing ones — tailored to the client's goals, brand identity, and target audience.",
    icon: FaCode,
  },
  {
    title: "SEO Optimization & Performance",
    description:
      "Improving site speed, SEO fundamentals, and accessibility so pages load fast, rank better on search engines, and work smoothly across devices.",
    icon: FaSearch,
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Providing ongoing updates, bug fixes, security enhancements, and fresh content to keep your website fast, secure, and reliable.",
    icon: FaWrench,
  },
  {
    title: "E-Commerce & Integrations",
    description:
      "Creating online stores (Shopify, WooCommerce, custom solutions) and integrating third-party tools (payments, CRMs, analytics, APIs) to extend functionality.",
    icon: FaCartShopping,
  },
];

export default function WhatIOffer() {
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
      id="services"
      bg="neutralDark"
      as="section"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 14 }}
      px={{ base: 6, md: 12 }}
    >
      <Box maxW="1200px" mx="auto" textAlign="center">
        <Stack align={"center"}>
          <Box>
            <HeadingMarker text="what i offer" />
            <H2Heading color="baseLight">Skills and Expertise</H2Heading>
          </Box>
        </Stack>
        <SlideIn>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={10}>
            {services.map((service, index) => (
              <Box
                key={`why-${index}`}
                bg="baseLight"
                overflow={"hidden"}
                rounded="3xl"
                shadow="md"
                transition="all 0.5s"
                _hover={{ shadow: "xl", transform: "translateY(-6px)" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <SlideIn>
                  <Flex
                    py={6}
                    direction="column"
                    align="center"
                    justify={"center"}
                    w="full"
                    shadow={"2xl"}
                  >
                    <Box
                      as={service.icon}
                      size="70px"
                      color="primary"
                      bg="secondary"
                      rounded="full"
                      p={4}
                      mt={1}
                    ></Box>
                  </Flex>
                  <Box p={6}>
                    <Heading
                      as="h3"
                      size="md"
                      fontSize={"1.3em"}
                      mb={3}
                      color="neutralDark"
                    >
                      {service.title}
                    </Heading>
                    <Text
                      color="gray.600"
                      textAlign={"left"}
                      fontSize="md"
                      lineHeight={1.9}
                    >
                      {service.description}
                    </Text>
                  </Box>
                </SlideIn>
              </Box>
            ))}
          </SimpleGrid>
        </SlideIn>
      </Box>
    </Box>
  );
}
