import React from 'react';
import styled from "styled-components";


export const Menu = () => {
    return (
        <StyledMenu>
            <a href="/">Home</a>
            <div>
                <a href="">Projects</a>
                <button>Contact</button>
            </div>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    div {
        display: flex;
        gap: 85px
    }
`

