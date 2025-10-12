import React, { useState } from "react";
import { Input, InputGroup, IconButton, Box } from "@chakra-ui/react";
import { Search } from "react-bootstrap-icons";

export default function ExpandableSearch() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Box display="flex" alignItems="center">
      <InputGroup
        bg="transparent"
        width={isExpanded ? "350px" : "110px"}
        transition="width 0.3s ease"
        endAddon={
          <IconButton
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Search"
          >
            <Search />
          </IconButton>
        }
      >
        <Input
          placeholder="Search property..."
          width="100%"
          visibility={isExpanded ? "visible" : "hidden"}
        />
      </InputGroup>
    </Box>
  );
}
