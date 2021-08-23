import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

/**
* Props to navSection
* @param {string} title - The title of section
*/
interface NavSectionProps {
  title: string;
  children?: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}