import React from 'react';
import styled from "styled-components";

export const MenuProjects = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenuProjects>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </StyledMenuProjects>
    );
};

const StyledMenuProjects = styled.div`
    ul {
        display: flex;
        gap: 10px;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    li {
        background-color: green;
    }
`

