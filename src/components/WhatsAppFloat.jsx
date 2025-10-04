import { Center, Circle, Float, Image } from "@chakra-ui/react";

export default function WhatsAppFloat() {
  return (
    <Center
      as="a"
      textDecoration="none"
      href="https://wa.me/message/43ZJUJZP7IJFE1?message=Hello there! I'm contacting from your website."
      target="_blank"
      width="56px"
      height="56px"
      aria-label="Contact ByteDesign"
      bg="#fff"
      rounded="full"
      boxShadow="2xl"
      cursor="pointer"
      // overflow="hidden"
      transform="translateY(50%)"
      transition="all 0.3s ease"
      _hover={{ transform: "translateY(50%) scale(1.05)" }}
    >
      <Image
        src="/images/whatsapp-logo.png"
        alt="Contact ByteDesign"
        width="56px"
        height="auto"
        style={{
          transition: "transform 0.3s ease",
          animation: "move 3s ease-in-out infinite",
          objectFit: "cover",
        }}
      />
      <Float offsetX="3" offsetY="2" placement="bottom-end">
        <Circle
          bg="green.500"
          size="8px"
          outline="0.2em solid"
          outlineColor="bg"
          aria-hidden="true"
        />
      </Float>
    </Center>
  );
}
