import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper gap={"20px"} direction={"column"} align={"center"}>
                <SocialIconsList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"37px"} width={"37px"} viewBox={"0 0 37px 37px"} iconId={"mail"}/>
                            <SocialIconTitle>gmail</SocialIconTitle>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"37px"} width={"37px"} viewBox={"0 0 37px 37px"} iconId={"linkedin"}/>
                            <SocialIconTitle>linkedin</SocialIconTitle>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon height={"37px"} width={"37px"} viewBox={"0 0 37px 37px"} iconId={"github"}/>
                            <SocialIconTitle>GITHUB</SocialIconTitle>
                        </SocialIconLink>
                    </SocialItem>
                </SocialIconsList>
                <NavLiks>
                    <SocialNavLink href={"#"}>Projects</SocialNavLink>
                    <SocialNavLink href={"#"}>Contact</SocialNavLink>
                </NavLiks>
                <FooterInfo>WEB DEVELOPER 2021</FooterInfo>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #7699ec;
    min-height: 20vh;
    padding: 40px 0;
`

const SocialIconsList = styled.ul`
    display: flex;
    gap: 70px;
    list-style: none;
    padding: 0;
    margin: 0;
`

const SocialIconLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`

const SocialIconTitle = styled.span`

`

const SocialItem = styled.li`

`

const NavLiks = styled.div`
    display: flex;
    gap: 40px;
`

const SocialNavLink = styled.a`

`

const FooterInfo = styled.span`

`