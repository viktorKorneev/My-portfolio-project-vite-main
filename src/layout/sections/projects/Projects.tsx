import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import socialImg from "../../../assets/images/image-_1_.webp"


const projectsItems1 = ["Javascript", "PostgreSQLh", "React", "Redux"];
const projectsItems2 = ["Javascript", "React Native", "Redux"];

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <FlexWrapper wrap="wrap" justify={"space-around"}>
                <Project src={socialImg} title={"TITLE PROJECT"}
                         text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                         items={projectsItems1}/>
                <Project src={socialImg} title={"I N S I G H T G R A M"}
                         text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                         items={projectsItems2}/>
                <Project src={socialImg} title={"TITLE PROJECT"}
                         text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                         items={projectsItems1}/>
                <Project src={socialImg} title={"I N S I G H T G R A M"}
                         text={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                         items={projectsItems2}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: #e39156;
`

