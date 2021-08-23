import { Flex, Box, Text, Avatar} from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Douglas Almeida</Text>
          <Text 
            color="gray.300" 
            fontSize="small"
          >
            douglas@gmail.com
          </Text>
       </Box>
      )}

      <Avatar size="md" name="Douglas Almeida"/>
    </Flex>
  ) 
}