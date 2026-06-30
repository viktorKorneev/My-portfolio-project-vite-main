import React from 'react';
import styled from "styled-components";
import {MenuProjects} from "../../../../components/menu/MenuProjects.tsx";

type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    items: Array<string>
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <MenuProjects menuItems={props.items}/>
            <Text>{props.text}</Text>
        </StyledProject>
    );
};

const StyledProject = styled.div`
    background-color: chocolate;
    max-width: 522px;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 388px;
    object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`

