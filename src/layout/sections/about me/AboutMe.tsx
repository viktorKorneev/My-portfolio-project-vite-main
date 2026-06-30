import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const AboutMe = () => {
    return (
        <AboutMeSection>
            <FlexWrapper direction="column" justify="center">
                <SectionTitle>About me</SectionTitle>
                <Description>The long barrow was built on land previously inhabited in the Mesolithic period. It
                    consisted
                    of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a
                    chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were
                    placed within this chamber during the Neolithic period, representing at least nine or ten
                    individuals.</Description>
            </FlexWrapper>
        </AboutMeSection>
    );
};

const AboutMeSection = styled.div`
    min-height: 50vh;
    background-color: cornflowerblue;
`

const Description = styled.p`

`