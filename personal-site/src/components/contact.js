import React from 'react'
import styled from 'styled-components'

const ContactSection = styled.div`
    background-color: rgba(36, 55, 101, 0.7);
    font-family: 'Oswald', sans-serif;
    margin: 0;
    color: white;
    padding: 0 0 50px 0;
    display: grid;
`

const Title = styled.h1`
    color: white;
    text-align: center;
    text-decoration: underline;
    margin: 0 0 25px;
    padding: 75px 0 0 0;
`

const Header = styled.p`
    color: white;
    margin: 0 auto;
    font-size: 42px;
    font-weight: 700px;
`

const Detail = styled.p`
    color: white;
    margin: 0 auto;
    text-align: center;
    line-height: 1.45;
    font-size: 24px;
    padding: 25px;

    @media (max-width: 817px) {
        font-size: 18px;
        padding: 35px;
    }
`

const ContactLink = styled.a`
    margin: 100px auto;
`

const ContactButton = styled.button`
    background-color: white;
    margin: 0 auto;
    padding: 25px 50px;
    font-size: 32px;
    font-weight: 700px;
    font-family: 'Oswald', sans-serif;
    border-radius: 25px;
    color: rgba(36, 55, 101);
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        cursor: pointer;
        transform: scale(1.1) translateY(-3px);
    }
`

const Contact = () => {
    return(
        <ContactSection id="contact">
            <Title>Contact</Title>
            <Header>Get In Touch</Header>
            <Detail>I am a passionate programmer and problem solver. I am open to hearing about future opportunities 
            <br/>
            whether it be front-end, iOS, or full-stack.
            <br/>
            <br/>
            Feel free to reach out to me if you have any questions or if you just want to say Hi!
            <br/>
            I will keep improving my skills until then!
            </Detail>
            <ContactLink href = "mailto:anandb7248@gmail.com" target="_blank">
                <ContactButton>Message</ContactButton>
            </ContactLink>
        </ContactSection>
    );
}

export default Contact