import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Skills</SectionTitle>
            <FlexWrapper wrap={"wrap"} justify={"center"} align={"center"}>
                <Skill iconId={"codeSvg"} title={"JAVACRIPT"}/>
                <Skill iconId={"ts"} title={"typescript"}/>
                <Skill iconId={"mongo"} title={"mongo db"}/>
                <Skill iconId={"postresql"} title={"PostgreSQL"}/>
                <Skill iconId={"jest"} title={"Jest"}/>
                <Skill iconId={"express"} title={"Express JS"}/>
                <Skill iconId={"nest-js"} title={"Nest JS"}/>
                <Skill iconId={"docker"} title={"Docker"}/>
                <Skill iconId={"react-js"} title={"mongo db"}/>
                <Skill iconId={"react-native"} title={"react nactive"}/>
                <Skill iconId={"styled"} title={"Styled Components"}/>
                <Skill iconId={"redux"} title={"Redux"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #6ee66e;
    min-height: 100vh;
`