import {
  Flex,
  Icon,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const SideBarItem = ({ icon, name, children, linkTo, ...rest }) => {
  return (
    <Link to={linkTo}>

      <Flex
        align="center"
        transition="all 0.3s"
        p="4"
        mx="4"
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
        {name}
      </Flex>
    </Link>
  );
};

export default SideBarItem
