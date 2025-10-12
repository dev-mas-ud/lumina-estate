import { SlideIn } from "@/components/Animations";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Menu,
  Portal,
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
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button
              size={{ base: "xs", md: "sm" }}
              px={{ base: 2, md: 5 }}
              variant={"subtle"}
              color={"primary"}
            >
              Location <BsGeoAltFill />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="abuja">FCT, Abuja</Menu.Item>
                <Menu.Item value="kaduna">Kaduna</Menu.Item>
                <Menu.Item value="lagos">Lagos</Menu.Item>
                <Menu.Item value="enugu">Enugu</Menu.Item>
                <Menu.Item value="gombe">Gombe</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        <Menu.Root>
          <Menu.Trigger asChild>
            <Button
              size={{ base: "xs", md: "sm" }}
              px={{ base: 2, md: 5 }}
              variant={"subtle"}
              color={"primary"}
            >
              Type <BiSolidHome />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="1bed">1 Bed Room</Menu.Item>
                <Menu.Item value="2bed">2 Bed Room</Menu.Item>
                <Menu.Item value="5bed">5 Bed Room</Menu.Item>
                <Menu.Item value="7bed">7 Bed Room</Menu.Item>
                <Menu.Item value="10bed">10 Bed Room</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>

        <Menu.Root>
          <Menu.Trigger asChild>
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
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="1mto2m">1M to 2M</Menu.Item>
                <Menu.Item value="2mto5m">2M to 5M</Menu.Item>
                <Menu.Item value="5mto10m">5M to 10M</Menu.Item>
                <Menu.Item value="10mto15m">10M to 15M</Menu.Item>
                <Menu.Item value="15mto20m">15M to 20M</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
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
        alt="hero image"
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
