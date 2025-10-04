import { Button } from "@/components/Button";
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Flex,
  Icon,
  Badge,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

import { FiClock, FiCalendar } from "react-icons/fi";

export default function BlogTemplate({
  title,
  imageURL,
  intro,
  subIntro,
  readTime = "8 min read",
  publishDate = "May 15, 2024",
  category = "Business",
  sections,
  ctaHeading,
  ctaText,
  ctaLink,
}) {
  return (
    <Box w="full" userSelect={"text"}>
      <Container maxW="4xl" py={16} px={{ base: 6, md: 0 }}>
        <VStack align="start" gap={{ base: 6, md: 10 }}>
          <Box>
            <Badge colorPalette="teal" px={3} py={1} borderRadius="full" mb={3}>
              {category}
            </Badge>
            <Heading
              as="h1"
              fontSize={"2.7rem"}
              lineHeight={{ base: 1.3, md: 1.4 }}
            >
              {title}
            </Heading>

            <Flex align="center" gap={4} mb={{ base: 2, md: 6 }} mt={4}>
              <Flex align="center">
                <Icon as={FiCalendar} mr={1.5} />
                <Text fontSize="sm">{publishDate}</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FiClock} mr={1.5} />
                <Text fontSize="sm">{readTime}</Text>
              </Flex>
            </Flex>
          </Box>

          {/* Feature Image */}
          {imageURL && (
            <Box
              w="full"
              minH={{ base: "250px", md: "500px" }}
              rounded={"xl"}
              my={0}
              overflow={"hidden"}
              position="relative"
            >
              <Image
                src={imageURL}
                alt={title}
                fill
                priority
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Box>
          )}

          {/* Intro */}
          <Text fontSize="lg" mb={subIntro ? 0 : 2}>
            {intro}
          </Text>

          {subIntro && subIntro}
          {/* Sections */}
          <Stack gap={{ base: 16, md: 20 }}>
            {sections?.map((section, idx) => (
              <Box key={idx}>
                <Heading as="h2" fontSize="3xl" mb={2}>
                  {section.heading}
                </Heading>
                <Box fontSize={"md"}>
                  <Text whiteSpace="preserve">{section.content}</Text>
                  {section.contentList && section.contentList}
                </Box>
              </Box>
            ))}
          </Stack>
          {/* Call To Action */}
          {ctaHeading && (
            <Box
              textAlign="center"
              width="100%"
              bg={"primary"}
              p={8}
              borderRadius="xl"
            >
              <Heading as="h3" size="lg" mb={4} color={"neutralDark"}>
                {ctaHeading}
              </Heading>

              <Text mb={6} fontSize="lg" color={"neutralDark"}>
                {ctaText}
              </Text>

              <Button
                as="a"
                href={ctaLink}
                size="xl"
                bg="neutralDark"
                color="primary"
                variant="solid"
                target="_blank"
              >
                Get a Free Consultation
              </Button>
            </Box>
          )}
        </VStack>
      </Container>
    </Box>
  );
}
