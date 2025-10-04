import { Heading } from "@chakra-ui/react";

export default function H2Heading({
  fontSize = { base: "2.1em", md: "2em" },
  fontWeight = "600",
  children,
  ...props
}) {
  return (
    <Heading
      as="h2"
      mt={-5}
      mb={props.mb || 12}
      fontSize={fontSize}
      textAlign={"left"}
      color={"primary"}
      lineHeight={{ base: 1.4, md: 1.5 }}
      {...props}
    >
      {children}
    </Heading>
  );
}
