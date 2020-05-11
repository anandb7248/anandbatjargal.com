import React from 'react'
import styled from 'styled-components'

import Workday from '../images/workday.png'
import Intuit from '../images/intuit.png'
import CalPoly from '../images/calpoly.png'

const ExperienceSection = styled.div`
    background: #243765;
    font-family: 'Oswald', sans-serif;
    margin: 0;
    color: white;
    padding: 0 0 50px 0;
`

const Title = styled.h1`
    color: white;
    text-align: center;
    text-decoration: underline;
    margin: 0 0 25px;
    padding: 75px 0 0 0;
`

const ExperienceGroup = styled.div`
    display: grid;
    row-gap: 50px;
`

const ExperienceEntry = styled.div`
    display: grid;
    grid-template-columns: 40% 1fr;

    @media(max-width: 925px){
        grid-template-columns: 1fr;
    }
`

const Clickable = styled.a`
    align-self: start;
    justify-self: end;
    margin: 30px 75px 0px 50px;

    @media(max-width: 925px){
        align-self: center;
        justify-self: center;
        margin: 0 0 25px 0;
    }
`

const Icon = styled.img`
    width: 275px;
    object-fit: contain;
    border-radius: 20px;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
        cursor: pointer;
        transform: scale(1.1) translateY(-3px);
    }
`

const Description = styled.div`
    align-self: start;
    justify-self: start;

    @media(max-width: 925px){
        align-self: center;
        justify-self: center;
    }
`

const Headline = styled.div`
    margin: 0 10px;

    ${'' /* @media(max-width: 925px){
        margin: 0 auto;
    } */}
`

const Role = styled.h2`
    margin: 0;

    @media(max-width: 925px){
        text-align: center;
    }
`

const City = styled.h4`
    margin: 0;

    @media(max-width: 925px){
        text-align: center;
    }
`

const Bullets = styled.ul`
    margin: 10px 0px;
    line-height: 1.8;

    @media(max-width: 925px){
        margin: 10px 50px;
    }
`

const Entry = styled.li`
    font-size: 1.1rem;
    margin: 0 50px 0 0;
`

const Experience = () => {
    return(
        <ExperienceSection id="experience">
            <Title>Experience</Title>
            <ExperienceGroup>
                <ExperienceEntry>
                    <Clickable href="http://www.workday.com" target="_blank">
                        <Icon src={Workday}></Icon>
                    </Clickable>
                    
                    <Description>
                        <Headline>
                            <Role>Software Application Engineer</Role>
                            <City>Pleasanton, California</City>
                        </Headline>
                        <Bullets>
                            <Entry>Assisted in the development of Change Location and Change Manager chatbot features for Workday Assistant</Entry>
                            <Entry>Enhanced REST API retrieval, processing, and validations for Workday Cloud Platform</Entry>
                            <Entry>Completed bug fixes for UI and backend processing for Change Job feature</Entry>
                        </Bullets>
                    </Description>
                </ExperienceEntry>

                <ExperienceEntry>
                    <Clickable href="http://www.intuit.com" target="_blank">
                        <Icon src={Intuit}></Icon>
                    </Clickable>
                    <Description>
                        <Headline>
                            <Role>Software Engineering Intern</Role>
                            <City>San Diego, California</City>
                        </Headline>
                        <Bullets>
                            <Entry>Used UIKit to implement reusable and responsive UI components that work across all Apple mobile devices </Entry>
                            <Entry>Developed Siri Shortcuts integration UI and voice prototype for Turbo in anticipation for iOS 12 release</Entry>
                            <Entry>Tracked load, view, and click data analytics to be viewed in Splunk and Segment for new screens in the application</Entry>
                        </Bullets>
                    </Description>
                </ExperienceEntry>

                <ExperienceEntry>
                <Clickable href="https://www.calpoly.edu/" target="_blank">
                        <Icon src={CalPoly}></Icon>
                    </Clickable>
                    <Description>
                        <Headline>
                            <Role>Instructional Student Assistant, CSC 436 Mobile App Development</Role>
                            <City>San Luis Obispo, California</City>
                        </Headline>
                        <Bullets>
                            <Entry>Assisted and graded 120+ students with their iOS mobile application assignments and projects</Entry>
                            <Entry>Accelerated students programming proficiency and knowledge of Swift & UIKit</Entry>
                            <Entry>Taught students using Apple’s IDE for iOS development, Xcode</Entry>
                        </Bullets>
                    </Description>
                </ExperienceEntry> 

            </ExperienceGroup>
        </ExperienceSection>
    )
}

export default Experience