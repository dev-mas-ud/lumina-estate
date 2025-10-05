import { Box, Link, Stack, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { Facebook, Instagram, Threads, TwitterX } from "react-bootstrap-icons";

export default function Footer() {
  const sections = [
    {
      title: "About",
      links: [
        { label: "Our Stories", href: "/#" },
        { label: "Careers", href: "/#" },
        { label: "Our Team", href: "/#" },
        { label: "Resources", href: "/#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQs", href: "/#" },
        { label: "Contact Us", href: "/#" },
        { label: "Help Center", href: "/#" },
        { label: "Terms of Service", href: "/#" },
      ],
    },
    {
      title: "Find Us",
      links: [
        { label: "Events", href: "/#" },
        { label: "Locations", href: "/#" },
        { label: "Newsletter", href: "/#" },
        { label: "Map", href: "/#" },
      ],
    },
    {
      title: "Social Media",
      links: [
        { label: "Instagram", href: "/#", icon: <Instagram /> },
        { label: "Twitter (X)", href: "/#", icon: <TwitterX /> },
        { label: "Facebook", href: "/#", icon: <Facebook /> },
        { label: "Threads", href: "/#", icon: <Threads /> },
      ],
    },
  ];

  return (
    <Box bg="secondary" color="primary" py={10} px={{ base: 4, md: 8 }}>
      <SimpleGrid columns={{ base: 2, md: 5 }} gap={{ base: 8, md: 12 }}>
        {/* Brand */}
        <Stack gap={3}>
          <Heading as="h3" fontSize="lg" fontWeight="bold">
            Lumina
          </Heading>
          <Text fontSize="sm">
            Bringing you closer to your dream home, one click at a time.
          </Text>
        </Stack>

        {/* Sections */}
        {sections.map((section) => (
          <Stack key={section.title} gap={3}>
            <Heading as="h4" fontSize="md">
              {section.title}
            </Heading>
            {section.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="sm"
                display="flex"
                alignItems="center"
                gap={2}
                _hover={{ textDecoration: "underline" }}
              >
                {link.icon && link.icon}
                {link.label}
              </Link>
            ))}
          </Stack>
        ))}
      </SimpleGrid>
      <Box
        borderTop="1px solid"
        borderColor="primary"
        mt={10}
        pt={4}
        textAlign="center"
        fontSize="sm"
      >
        © {new Date().getFullYear()} Lumina. All rights reserved.
      </Box>
    </Box>
  );
}
