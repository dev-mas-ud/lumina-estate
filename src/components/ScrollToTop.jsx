import { Box, IconButton } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from "react";
import { LuArrowUp } from "react-icons/lu";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    setIsClicked(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Remove the "clicked" animation after the animation ends
    const intervaId = setTimeout(() => {
      setIsClicked(false);
    }, 300); // Match the duration of the animation

    return () => {
      clearTimeout(intervaId);
    };
  }, []);

  return (
    <Box>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          aria-label="scroll to top"
          rounded="full"
          size="lg"
          bg="primary"
          style={{
            transform: isClicked ? "scale(1.2)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        >
          <LuArrowUp />
        </IconButton>
      )}
    </Box>
  );
};

export default ScrollToTopButton;
