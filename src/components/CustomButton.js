import {
    Flex,
    Icon,
  } from '@chakra-ui/react';

  const CustomButton = ({icon, children, ...rest}) => {
    return (
        <Flex
        align="center"
        transition="all 0.3s"
        p="3"
        mx="5"
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
    )
  }

  export default CustomButton