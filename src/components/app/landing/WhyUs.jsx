import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import FeatureCard from "@/components/app/landing/components/FeaturedCard";
import H2Heading from "./H2Heading";
import { FaHandshake } from "react-icons/fa";
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import { SlideIn } from "@/components/Animations";
import { PersonBadge } from "react-bootstrap-icons";
import { RiGuideFill } from "react-icons/ri";

export default function WhyUs() {
  const features = [
    {
      icon: <FaPersonWalkingArrowRight size={35} />,
      title: "Expert Guidance",
      description:
        "Benefit from our team's seasoned expertise for a smooth buying experience",
    },
    {
      icon: <PersonBadge size={35} />,
      title: "Personalized Service",
      description:
        "Our services adapt to your unique needs, making your journey stress-free",
    },
    {
      icon: <RiGuideFill size={35} />,
      title: "Transparent Process",
      description:
        "Stay informed with our clear and honest approach to buying your home",
    },
    {
      icon: <FaHandshake size={35} />,
      title: "Exceptional Support",
      description:
        "Providing peace of mind with our responsive and attentive customer service",
    },
  ];

  return (
    <Box
      px={{ base: 3, md: 16 }}
      py={{ base: 16, md: 20 }}
      pt={{ base: 10, md: 20 }}
    >
      <Stack align={"center"} px={4}>
        <Stack color="primary" align={"center"}>
          <H2Heading mb={0}>Why Choose Us</H2Heading>
          <Text
            mb={12}
            textAlign={"center"}
            w={{ base: "full", md: "70%" }}
            lineHeight={1.7}
          >
            Elevating Your Home Buying Experience with Expertise, Integrity, and
            Unmatched Personalized Service
          </Text>
        </Stack>
      </Stack>
      <SimpleGrid columns={[1, 2, 2, 4]} gap={8} px={4}>
        {features.map(({ icon, title, description }, index) => (
          <SlideIn key={`WhyUs-${index}`}>
            <FeatureCard
              shadow="lg"
              icon={icon}
              title={title}
              description={description}
            />
          </SlideIn>
        ))}
      </SimpleGrid>
    </Box>
  );
}
