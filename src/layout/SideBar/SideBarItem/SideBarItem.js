import {
  Flex,
  Icon,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const SideBarItem = ({ icon, children, linkTo, ...rest }) => {
  return (
    <Link to={linkTo}>

      <Flex
        align="center"
        transition="all 0.3s"
        p="2"
        mx="7"
        backgroundColor={"secondary.300"}
        color={"white"}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'secondary.200',
          color: 'black',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'black',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default SideBarItem
