import { HStack } from "@chakra-ui/react";
import NavLink from "./NavLink";

const DesktopLinks = ({ Links, linkUrls }) => {
  return (
    <HStack as="nav" gap={8} id="desktop-links" display={"none"}>
      {Links.map((link) => (
        <NavLink key={link} href={linkUrls[link]} target={"_parent"}>
          {link}
        </NavLink>
      ))}
    </HStack>
  );
};

export default DesktopLinks;
