import { Input, Flex, Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// Controlled component
// Uncontrolled component

export function SearchBox() {
  // const [ search, setSearch ] = useState('');
  // const searchInputRef = useRef<HTMLInputElement>(null);

  // console.log(searchInputRef.current.value)

  // //debounce

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input 
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{color: 'gray.400'}}
        px="4"
        mr="4"
        // ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize={20} />
    </Flex>
  )
}