import { Button as ChakraButton } from "@chakra-ui/react";
import { useCallback } from "react";

export function Button({ children, ...props }) {
  const handleTouchStart = useCallback((e) => {
    const target = e.currentTarget;

    target.classList.add("bg-secondary");
    target.classList.add("text-base");
  }, []);

  const handleTouchEnd = useCallback((e) => {
    const target = e.currentTarget;

    target.classList.remove("bg-secondary");
    target.classList.remove("text-base");
  }, []);

  return (
    <ChakraButton
      bg={props.variant === "solid" ? "primary" : "transparent"}
      color={props.variant === "solid" ? "neutralDark" : "baseLight"}
      variant={props.variant || "solid"}
      data-type={props.variant || "solid"}
      transition={".4s"}
      rounded="full"
      size={props.size}
      fontWeight={"600"}
      fontSize={props.fontSize || ".97em"}
      _hover={{
        backgroundColor: "secondary",
        color: props.variant === "solid" ? "baseLight" : "",
        borderColor: "transparent",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
