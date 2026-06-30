import React from 'react';
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Menu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #5ce15c;
    height: 100px;
`

