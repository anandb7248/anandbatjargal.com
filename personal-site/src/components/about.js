import React from 'react'
import styled from 'styled-components'
import Profile from '../images/profile.png'

const AboutSection = styled.div`
    background: #243765;
    font-family: 'Oswald', sans-serif;
    margin: 0;
`

const Title = styled.h1`
    color: white;
    text-align: center;
    text-decoration: underline;
    margin: 0 0 25px;
    padding: 60px 0 0 0;
`

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin: 0 50px 0 0;

    @media (max-width: 817px) {
        grid-template-columns: 1fr;
    }
`

const ProfileImage = styled.div`
    background-image: url(${Profile});
    height: 300px;
    width: 300px;
    background-size: cover;
    justify-self: end;
    align-self: start;
    margin: 10px 100px 50px;

    @media (max-width: 817px) {
        height: 200px;
        width: 200px;
        margin: 10px auto 10px;
    }
`

const ProfileText = styled.p`
    color: white;
    font-size: 18px;
    margin: 0 50px 25px 0;
    line-height: 1.6;
    justify-self: start;
    align-self: start;

    @media (max-width: 817px) {
        margin: 10px auto 25px;
        padding: 25px;
    }
`

const Emphasis = styled.em`
    font-style: normal;
    color: #03A4FF;
`

const About = () => {
    return(
        <AboutSection id="about">
            <Title >About Me</Title>
            <ContentContainer>
                <ProfileImage />
                <ProfileText>
                Hello! I’m Anand, a software engineer based in San Francisco Bay Area. 
                <br />
                <br />
                I was originally born in Ulaanbaatar, Mongolia 🇲🇳, but then moved to San Francisco 🌉 when I was 9 years old.
                <br />
                <br />
                I graduated from <Emphasis>City College of San Francisco</Emphasis> on May 2016 with a Associate of Science in Mathematics 🧮,
                <br />
                then transferred to <Emphasis>California Polytechnic State University, San Luis Obispo </Emphasis>
                <br />
                to obtain a Bachelor of Science in Computer Science 👨‍💻on December 2018.
                <br />
                <br />
                I enjoy learning the latest technologies and building software that bring value to users.
                <br />
                <br />
                I want to build software products that make life easier and more efficient
                <br />
                with everything that working just right with an emphasis on great intuitive design.
                <br />
                <br />
                And I am a constant learner, 
                <br />
                I continually take online courses to improve my knowledge and skillsets as a software engineer,
                <br />
                as well as to apply what I learned with projects.
                <br />
                <br />
                Please feel free to email me at anandb7248@gmail.com or connect with me on Linkedin. Thanks!
                </ProfileText>
            </ContentContainer>
        </AboutSection>
    );
}

export default About