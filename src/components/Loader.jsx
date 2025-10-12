import { Center } from "@chakra-ui/react";
import { FadeLoader, RiseLoader } from "react-spinners";

export const Loader = (props) => {
  return (
    <Center as="div" height={{ base: "70vh", md: "60vh" }} overflow={"hidden"}>
      <RiseLoader color={props.color || "#2B1B12"} size={props.size || 10} />
    </Center>
  );
};

export const FullPageLoader = (props) => {
  return (
    <Center
      as="div"
      p={0}
      m={0}
      top="0"
      left="0"
      position={"fixed"}
      zIndex={9999999}
      width="100vw"
      height="100vh"
      overflow={"hidden"}
      bg="white"
    >
      <RiseLoader color={props.color || "#2B1B12"} size={props.size || 15} />
    </Center>
  );
};

export const ButtonLoader = (props) => {
  return (
    <FadeLoader
      color={props.color || "#000000"}
      margin={0}
      style={{
        transform: props.scale || "scale(0.5)",
        marginTop: "-7px",
        marginRight: props.marginRight || ".8rem",
      }}
    />
  );
};
