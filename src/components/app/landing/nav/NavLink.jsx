import Link from "next/link";
import { useState } from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

const NavLink = ({ children, href, color, target, isOpen }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isHashLink = href.includes("#");
  const isRootLink = href === "/";
  const basePath = isHashLink ? href.split("#")[0] : href;
  const isActive = pathname === basePath && !isHashLink;

  const defaultColor = color || "primary";
  const hoverColor = "secondary";
  const activeColor = hoverColor;

  const [isNavigating, setIsNavigating] = useState(false);

  const updateUrl = (url) => {
    window.history.pushState({}, "", url);
  };

  const scrollToTop = () => {
    updateUrl("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToHash = (hash) => {
    updateUrl(hash);
    const element = document.getElementById(hash.substring(1));
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const handleLinkClick = async (e) => {
    if (isNavigating) {
      e.preventDefault();
      return;
    }

    if (isRootLink && pathname === "/") {
      e.preventDefault();
      scrollToTop();
      return;
    }

    if (isHashLink && pathname === "/") {
      e.preventDefault();
      const [, hash] = href.split("#");
      scrollToHash(`#${hash}`);
      return;
    }

    if (isHashLink && pathname !== basePath) {
      e.preventDefault();
      setIsNavigating(true);
      router.push(basePath);
      setTimeout(() => {
        const [, hash] = href.split("#");
        scrollToHash(`#${hash}`);
        setIsNavigating(false);
      }, 100);
    }
  };

  return (
    <Link href={href} target={target} scroll={false} onClick={handleLinkClick}>
      <ChakraLink
        as="span"
        py={2}
        fontWeight="semibold"
        fontSize={"1em"}
        transition="color 0.15s ease-in-out"
        color={isActive ? activeColor : isOpen ? "#f8f8f8" : defaultColor}
        _hover={{
          textDecoration: "none",
          color: hoverColor,
        }}
        aria-current={isActive ? "page" : undefined}
      >
        {children}
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
