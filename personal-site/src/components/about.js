import React from 'react'
import styled from 'styled-components'
import Profile from '../images/profile.png'

const AboutSection = styled.div`
    background: #243765;
    margin: 0;
    font-family: 'Oswald', sans-serif;
`

const Title = styled.h1`
    color: white;
    text-align: center;
    text-decoration: underline;
`

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
`

const ProfileImage = styled.div`
    ${'' /* background-image: url(${Profile}); */}
    background: blue;
    height: 300px;
    width: 300px;
    background-size: cover;
    margin: 5px 50px 100px 50px;
`

const ProfileTextContainer = styled.div`
    display: grid;
    row-gap: 0px;
`

const ProfileText = styled.p`
    color: white;
    font-size: 24px;
    margin: 0 25px;
`

const About = () => {
    return(
        <AboutSection >
            <Title>About Me</Title>
            <ContentContainer>
                <ProfileImage />
                <ProfileTextContainer>
                    <ProfileText>Hello! I’m Anand, a software engineer based in San Francisco Bay Area.</ProfileText>
                    <ProfileText>I enjoy learning the latest technologies and building software that bring value to users.</ProfileText>
                    <ProfileText>I want to build software products that make life easier and more efficient for users
with everything that works just right with an emphasis on great intuitive design.</ProfileText>
                    <ProfileText>And I am a constant learner, 
I continually take online courses to improve my knowledge and skillsets as a software engineer,
as well as to apply what I learned with projects.  </ProfileText>
                </ProfileTextContainer>
            </ContentContainer>
        </AboutSection>
    );
}

export default About