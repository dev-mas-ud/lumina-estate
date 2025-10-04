import {
  SimpleGrid,
  Box,
  Card,
  Span,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";

import H2Heading from "./H2Heading";
import { SlideIn } from "@/components/Animations";
import { Button } from "@/components/Button";
import { ArrowUpRightSquare } from "react-bootstrap-icons";
import HeadingMarker from "./HeadingMarker";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const PROJECTS = [
    {
      title: "Event Planning Landing Page",
      href: "https://masud73.github.io/event-planner/",
      imgUrl: "/images/event-planner.webp",
    },
    {
      title: "Restaurant Landing Page",
      href: "https://masud73.github.io/my-restaurant/",
      imgUrl: "/images/my-restaurant.webp",
    },
  ];

  return (
    <Box
      id="projects"
      px={{ base: 6, md: 10 }}
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      bg="neutralDark"
    >
      <Stack align={"center"}>
        <Box>
          <HeadingMarker text="recent work" />
          <H2Heading color="baseLight">My Recent Projects</H2Heading>
        </Box>
      </Stack>
      <SimpleGrid columns={[1, 1, 2]} gap={10}>
        {PROJECTS.map(({ title, imgUrl, href }, index) => (
          <SlideIn
            key={`project-${index}`}
            direction={useBreakpointValue({ base: "right", md: "up" })}
          >
            <Card.Root
              cursor={"pointer"}
              outline={"none"}
              textDecoration={"none"}
              as="a"
              rel="noopener noreferrer"
              href={href}
              target="_blank"
              rounded="3xl"
              bg="baseLight"
              overflow={"hidden"}
              transition="all 0.3s"
              _hover={{
                shadow: "xl",
              }}
            >
              <Card.Body
                p={0}
                overflow={"hidden"}
                justifyContent={"center"}
                alignItems={"center"}
                rounded="2xl"
              >
                <Box
                  position="relative"
                  overflow="hidden"
                  width="full"
                  maxH="250px"
                  minHeight="250px"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStartCapture={() => setHoveredIndex(index)}
                  onTouchCancelCapture={() => setHoveredIndex(null)}
                >
                  <Image
                    src={imgUrl}
                    alt={title}
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      objectPosition: "top",
                      transform:
                        hoveredIndex === index
                          ? "translateY(calc(-100% + 250px))"
                          : "translateY(0)",

                      transition:
                        hoveredIndex === index
                          ? "transform 10s ease-in-out"
                          : ".3s",
                    }}
                  />
                </Box>

                <Span
                  my={4}
                  px={1}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"1.2em"}
                >
                  {title}
                </Span>
                <Button variant="solid" size="lg" mb={6}>
                  Check Out <ArrowUpRightSquare />{" "}
                </Button>
              </Card.Body>
            </Card.Root>
          </SlideIn>
        ))}
      </SimpleGrid>
    </Box>
  );
}
