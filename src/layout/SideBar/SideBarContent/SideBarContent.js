import {
  Box,
  CloseButton,
  Flex,
  Text,
  VStack
} from '@chakra-ui/react';

import {
  FiHome,
  FiUsers
} from 'react-icons/fi';

import SideBarItem from '../SideBarItem/SideBarItem';

const SidebarContent = ({ onClose, ...rest }) => {

  const linkItems = [{
    name: "Home",
    linkTo: "/",
    icon: FiHome
  },
  {
    name: "Students",
    linkTo: "/students",
    icon: FiUsers
  }
  ]

  return (
    <Box
      transition="3s ease"
      bg={'primary.400'}
      borderRight="1px"
      borderRightColor={"primary.400"}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <VStack align='stretch'>
        {linkItems.map((link) => (
          <SideBarItem key={link.name}  linkTo={link.linkTo} icon={link.icon}>
            {link.name}
          </SideBarItem>
        ))}
      </VStack>

    </Box>
  );
};

export default SidebarContent