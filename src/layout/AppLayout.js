import React from "react";
import SideNavBar from "./SideBar/SideNavBar";
import { Container } from "@chakra-ui/react";

const AppLayout = ({ children }) => {
    return (
        <>
            <SideNavBar>
                <Container maxW='5xl'>
                    {children}
                </Container>
            </SideNavBar>
        </>
    )
}

export default AppLayout