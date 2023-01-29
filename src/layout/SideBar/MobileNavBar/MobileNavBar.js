import {
    Flex,
    Text,
    HStack,
    Menu,
    MenuList,
    MenuButton,
    MenuItem,
    Avatar,
    VStack,
    IconButton,
} from '@chakra-ui/react';

import {
    FiMenu,
    FiBell
  } from 'react-icons/fi';

const MobileNavBar = ({ onOpen, ...rest }) => {
    return (
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        bg={"secondary.300"}
        borderBottomWidth="1px"
        borderBottomColor={"secondary.200"}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        {...rest}>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          color={"white"}
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: 'flex', md: 'none' }}
          fontSize="2xl"
          color="white"
          fontFamily="monospace"
          fontWeight="bold">
          Logo
        </Text>
  
        <HStack spacing={{ base: '0', md: '6' }}>
          <IconButton
            size="lg"
            color="white"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
            _hover={{
                bg: 'secondary.200',
                color: 'black',
              }}
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                py={2}
                color="white"
                transition="all 0.3s"
                _focus={{ boxShadow: 'none' }}>
                <HStack>
                  <Avatar
                    size={'sm'}
                    src={
                      'https://e7.pngegg.com/pngimages/765/171/png-clipart-management-university-student-tokyo-institute-of-technology-empowerment-placeholder-angle-logo.png'
                    }
                  />
                  <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2">
                    <Text fontSize="sm">Jennifer Anderson</Text>
                    <Text fontSize="xs" color="white">
                      Student
                    </Text>
                  </VStack>
                </HStack>
              </MenuButton>
              <MenuList
                borderColor={"primary.400"}>
                <MenuItem>Settings</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };

  export default MobileNavBar