import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <StyledForm>
                <Label>Name</Label>
                <Field placeholder={"Name"}/>
                <Label>Email</Label>
                <Field type={"email"} placeholder={"Email"}/>
                <Label>Message</Label>
                <Field placeholder={"Message"} as={"textarea"}/>
                <Button type={"submit"}>Submit</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: aqua;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Label = styled.label`
    
`

const Field = styled.input`
    
`

