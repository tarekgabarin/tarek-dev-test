import SideBarContent from './SideBarContent/SideBarContent'
import {
    Box,
    Drawer,
    DrawerContent,
    useDisclosure
} from '@chakra-ui/react';

import MobileNavBar from './MobileNavBar/MobileNavBar'

const SideNavBar = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh">
            <SideBarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent>
                    <SideBarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNavBar onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    )
}

export default SideNavBar