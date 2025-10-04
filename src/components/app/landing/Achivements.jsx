import { Box, Flex, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react";
import { FaProjectDiagram, FaUsers, FaAward, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import H2Heading from "./H2Heading";
import HeadingMarker from "./HeadingMarker";

function AnimatedCounter({ target, duration = 2 }) {
  const controls = useAnimation();
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        value: target,
        transition: { duration, ease: "easeOut" },
      });
    }
  }, [controls, inView, target, duration]);

  return (
    <motion.span
      ref={ref}
      animate={controls}
      initial={{ value: 0 }}
      onUpdate={(latest) => setCount(Math.floor(latest.value))}
    >
      {count}
    </motion.span>
  );
}

const stats = [
  {
    label: "Successful Projects",
    value: 20,
    icon: FaProjectDiagram,
    color: "#253900",
  },
  {
    label: "Client Satisfaction",
    value: 99,
    icon: FaUsers,
    color: "#08CB00",
  },
  {
    label: "Recognitions for Excellence",
    value: 5,
    icon: FaAward,
    color: "orange",
  },
  { label: "Years in the Industry", value: 6, icon: FaClock, color: "#000000" },
];

export default function Achievements() {
  // Image animation
  const controls = useAnimation();
  const { inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  return (
    <Box
      as="section"
      bg="neutralDark"
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
      px={{ base: 5, md: 12 }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        maxW="1200px"
        mx="auto"
        gap={{ base: 0, md: 12 }}
      >
        {/* Left Content */}
        <Box flex="1" px={{ base: 2, md: 0 }}>
          <Stack>
            <Box>
              <HeadingMarker text="my journey" />
              <H2Heading color="baseLight" mb={6}>
                Achievements
              </H2Heading>
            </Box>
          </Stack>
          <Text fontSize="1.22em" lineHeight={1.9} mb={10} color="baseLight">
            Over the years, I've built a reputation for delivering high-quality
            digital solutions. These milestones represent my dedication,
            creativity, and impact in the web design industry.
          </Text>
        </Box>

        {/* Stats Grid */}
        <SimpleGrid
          columns={{ base: 2, md: 2 }}
          w={{ base: "full", md: "50%" }}
          gap={{ base: 8, md: 10 }}
        >
          {stats.map((stat, index) => (
            <Box
              key={index}
              p={6}
              px={{ base: 2, md: 10 }}
              rounded="3xl"
              bg="baseLight"
              border={"none"}
              textAlign="center"
            >
              <Box
                as={stat.icon}
                size="40px"
                color={stat.color}
                mb={3}
                mx="auto"
              />
              <Heading
                size="lg"
                fontSize={"2em"}
                fontWeight={600}
                color="neutralDark"
                mb={1}
              >
                <AnimatedCounter target={stat.value} />
                {stat.label.includes("Client")
                  ? "%"
                  : stat.label.includes("Recognition")
                  ? ""
                  : "+"}
              </Heading>
              <Text fontSize={"1em"} textAlign={"center"} color="gray.600">
                {stat.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
