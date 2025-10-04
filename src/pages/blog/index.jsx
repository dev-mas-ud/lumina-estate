import React from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  Flex,
  Badge,
  Separator,
} from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { ArrowRight, EnvelopeAt } from "react-bootstrap-icons";

export default function BlogPosts() {
  // Sample blog post data - replace with your actual data
  const blogPosts = [
    {
      id: 1,
      title: "Website Costs for Nigerian Small Businesses",
      description:
        "Comprehensive guide on website costs for Nigerian small businesses, including realistic budgets, hidden costs, and tips to get the best value.",
      image: "/images/blog/website-cost.webp",
      date: "May 15, 2024",
      readTime: "15 min read",
      category: "Technology",
      slug: "website-costs-in-nigeria",
    },
    {
      id: 1,
      title: "Effective Online Marketing Strategies for Nigerian Businesses",
      description:
        "Discover the most effective online marketing strategies for Nigerian businesses. Learn how to use SEO, social media, content marketing, and paid ads to grow your brand and attract customers.",
      image: "/images/blog/content-marketing.webp",
      date: "May 15, 2024",
      readTime: "10 min read",
      category: "Marketing",
      slug: "effective-online-marketing-strategies",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Blog Posts | Websites by Masud - Web Design & Development Insights
        </title>
        <meta
          name="description"
          content="Explore our blog for insights on web design, business growth, digital marketing, and entrepreneurship in Nigeria. Stay updated with the latest trends and strategies."
        />
        <meta
          property="og:title"
          content="Blog Posts | Websites by Masud - Web Design & Development Insights"
        />
        <meta
          property="og:description"
          content="Explore our blog for insights on web design, business growth, digital marketing, and entrepreneurship in Nigeria."
        />
        <meta property="og:image" content="/images/blog/business-idea.jpg" />
        <meta
          name="keywords"
          content="web design blog, business tips Nigeria, digital marketing, entrepreneurship, small business growth"
        />
      </Head>

      <Box bg="baseLight" minH="100vh" py={12} px={{ base: 4, md: 0 }}>
        <Container maxW="4xl">
          <Box textAlign="center" mb={12}>
            <Heading as="h1" size="2xl" mb={4} color="neutralDark">
              Blog
            </Heading>
            <Text fontSize="lg" color="neutralDark" maxW="2xl" mx="auto">
              Insights on web design, business growth, and digital marketing
              strategies for Nigerian entrepreneurs
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} gap={8} mb={12}>
            <Box
              textAlign="center"
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="md"
            >
              <Box fontSize="4xl" mb={4} color="green.600">
                💻
              </Box>
              <Heading as="h2" color="neutralDark" fontSize={"1.2em"} mb={2}>
                Web Design
              </Heading>
              <Text color="neutralDark">
                Latest trends and best practices in web design
              </Text>
            </Box>
            <Box
              textAlign="center"
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="md"
            >
              <Box fontSize="4xl" mb={4} color="purple.600">
                📱
              </Box>
              <Heading as="h2" color="neutralDark" fontSize={"1.2em"} mb={2}>
                Digital Marketing
              </Heading>
              <Text color="neutralDark">
                Effective online marketing strategies
              </Text>
            </Box>
          </SimpleGrid>

          <Separator mb={12} />

          <Stack gap={10}>
            {blogPosts.map((post) => (
              <Box
                key={post.id}
                bg="white"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
              >
                <Flex
                  as={"a"}
                  href={`/blog/${post.slug}`}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box
                    width={{ base: "100%", md: "40%" }}
                    position="relative"
                    height={{ base: "250px", md: "inherit" }}
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      priority
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box
                    p={{ base: 6, md: 8 }}
                    width={{ base: "100%", md: "60%" }}
                  >
                    <Badge colorScheme="blue" mb={2}>
                      {post.category}
                    </Badge>
                    <Heading as="h3" size="lg" mb={3} color="secondary">
                      {post.title}
                    </Heading>
                    <Text color="neutralDark" mb={4}>
                      {post.description}
                    </Text>

                    <Flex justify="space-between" align="center" mb={4}>
                      <Text fontSize="sm" color="primary">
                        {post.date}
                      </Text>
                      <Text fontSize="sm" color="primary">
                        {post.readTime}
                      </Text>
                    </Flex>

                    <Button bg="secondary" size="md">
                      Read more <ArrowRight />
                    </Button>
                  </Box>
                </Flex>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
