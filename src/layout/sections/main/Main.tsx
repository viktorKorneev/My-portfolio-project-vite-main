import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/main-image.svg"
import iconArrow from "../../../assets/images/arrow scroll.svg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <MainSection>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <MainContent>
                    <h1>WEB DEVELOPER</h1>
                    <h2>John Doe</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt.</p>
                    <button>Contact Me</button>
                </MainContent>
                <MainPhoto src={photo} alt=""/>
            </FlexWrapper>
            <a href="">
                <IconArrow src={iconArrow}/>
            </a>
        </MainSection>
    );
};

const MainSection = styled.div`
    min-height: 100vh;
    background-color: #17a5f1;
`

const MainContent = styled.div`
    text-align: left;
    max-width: 515px;

`

const MainPhoto = styled.img`
    object-fit: contain;
`

const IconArrow = styled.img`
    display: block;
    margin: 0 auto;
`


