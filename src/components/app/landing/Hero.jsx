import { SlideIn } from "@/components/Animations";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Span,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { BsGeoAltFill } from "react-icons/bs";
import { BiSolidHome, BiSearch } from "react-icons/bi";
import { LuArrowBigRight } from "react-icons/lu";

export default function Hero() {
  return (
    <Box
      as="header"
      mt={{ base: 0, md: 0 }}
      pb={20}
      pt={{ base: 10, md: 16 }}
      overflow={"hidden"}
      pos="relative"
    >
      <Box
        overflow={"hidden"}
        height={{ base: "130vh", md: "110vh" }}
        width={"full"}
        position="relative"
        mt={{ base: -40, md: -60 }}
        gap={{ base: 0, md: 10 }}
        px={{ base: 8, md: 16, xl: 20 }}
        py={{ base: 14, md: 28 }}
        display={"flex"}
        flexDirection={{ base: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        bg="baseLight"
      >
        <LeftContent />
        <RightContent />
      </Box>
      <HStack
        gap={{ base: 2, md: 4 }}
        bg="secondary"
        py={{ base: 2, md: 5 }}
        px={{ base: 0, md: 5 }}
        wrap={"wrap"}
        rounded={{ base: "0", sm: "lg" }}
        pos="absolute"
        w={{ base: "full", sm: "70%", md: "65%", lg: "unset" }}
        align={"center"}
        justify={"center"}
        bottom={{ base: ".3rem", sm: "2rem", md: ".3rem" }}
        left="50%"
        transform={"translate(-50%, -50%)"}
        shadow="lg"
      >
        <Button
          size={{ base: "xs", md: "sm" }}
          px={{ base: 2, md: 5 }}
          variant={"subtle"}
          color={"primary"}
        >
          Location <BsGeoAltFill />
        </Button>
        <Button
          size={{ base: "xs", md: "sm" }}
          px={{ base: 2, md: 5 }}
          variant={"subtle"}
          color={"primary"}
        >
          Type <BiSolidHome />
        </Button>
        <Button
          size={{ base: "xs", md: "sm" }}
          px={{ base: 2, md: 5 }}
          variant={"subtle"}
          color={"primary"}
        >
          Price Range{" "}
          <Span fontWeight={"bold"} fontSize={"md"}>
            ₦
          </Span>
        </Button>
        <IconButton
          disabled
          aria-label="Search"
          ml={{ base: 0, md: 2 }}
          bg="primary"
          size="sm"
        >
          <BiSearch />
        </IconButton>
      </HStack>
    </Box>
  );
}

const LeftContent = () => {
  return (
    <Stack gap={8} w={{ base: "full", md: "50%" }} mt={28} color="primary">
      <Heading as="h1" fontSize={"3.3em"}>
        Discover Your Perfect Home in Nigeria
      </Heading>
      <Text fontSize={"md"}>
        Explore our handpicked collection of exceptional properties,
        thoughtfully designed to match your vision of the perfect home.
      </Text>
      <Button
        as="a"
        href="#contact"
        aria-label="Get started"
        bg={"primary"}
        size="xl"
        w={{ base: "full", md: "12rem" }}
      >
        Get Started <LuArrowBigRight />
      </Button>
    </Stack>
  );
};

const RightContent = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <SlideIn
      isImage={true}
      isLoaded={isImageLoaded}
      flex={{ base: "unset", md: "1" }}
      position="relative"
      overflow="hidden"
      w="full"
      h={{ base: "full", md: "full" }}
    >
      <Image
        src="/images/hero-img.webp"
        alt="Affordable, modern, and mobile-friendly web design in Nigeria by ByteDesign — helping businesses grow online with fast websites and custom web apps."
        fill
        priority
        sizes="(max-width: 768px) 100vw, 
             (max-width: 1280px) 50vw, 
             33vw"
        style={{
          objectFit: "cover",
          objectPosition: "top",
        }}
        onLoad={() => setIsImageLoaded(true)}
      />
    </SlideIn>
  );
};
