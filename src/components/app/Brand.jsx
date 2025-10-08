import { Link, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

export default function Brand({
  height = useBreakpointValue({ base: "25px", md: "25px" }),
}) {
  return (
    <Link
      mr={2}
      ml={-1}
      outline={"none"}
      textDecoration={"none"}
      tabIndex={-1}
      color="primary"
      href="/"
      fontWeight={"bold"}
      fontSize={"1.5em"}
    >
      {/* <Image
        width={560}
        height={66}
        style={{ height: height, width: "auto" }}
        sizes="100%"
        priority
        src="/images/logo.svg"
        alt="Logo"
      /> */}
      lumina
    </Link>
  );
}
